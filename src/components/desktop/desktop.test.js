import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DesktopContainer, { Desktop } from './desktop';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { rendersCorrectly, matchesSnapshot } from 'testUtilities';

import * as drive from 'selectors/drive';
import * as activePrograms from 'selectors/activePrograms';

drive.getDesktopContents = jest.fn(() => {});
activePrograms.getDetailedActivePrograms = jest.fn(() => []);

const mockStore = configureMockStore([thunk]);

const minProps = {
  contents: {},
  activePrograms: [],
};

let store;
beforeEach(() => {
  store = mockStore({
    contents: {},
    programs: [],
    activePrograms: [],
    openProgram: jest.fn(),
    createVariable: jest.fn(),
  });
});

const getMinComponent = (otherProps = {}) => (
  <Desktop {...minProps} {...otherProps} />
);

it('Desktop renders correctly', () => {
  rendersCorrectly(getMinComponent(), expect);
});

it('Desktop matches snapshot correctly', () => {
  matchesSnapshot(getMinComponent(), expect);
});

it('DesktopContainer renders correctly', () => {
  rendersCorrectly(<DesktopContainer store={store} {...minProps} />, expect);
});

it('DesktopContainer matches snapshot', () => {
  matchesSnapshot(<DesktopContainer store={store} {...minProps} />, expect);
});

it('a real Id will create a a program component', () => {
  const program = { windowId: 0, id: 'NOTEPAD', payload: { text: 'test' } };
  const wrapper = shallow(getMinComponent({ activePrograms: [program] }));
  expect(wrapper.find('.open-windows').children().length).toBe(1);
});

it('no Id will create a no component', () => {
  const program = { windowId: 0, id: '', payload: { text: 'test' } };
  const wrapper = shallow(getMinComponent({ activePrograms: [program] }));
  expect(wrapper.find('.open-windows').children().length).toBe(0);
});

it('Notepad Id will create a notepad component', () => {
  const program = { windowId: 0, id: 'NOTEPAD', payload: { text: 'test' } };
  const wrapper = shallow(getMinComponent({ activePrograms: [program] }));
  expect(wrapper.find('.notepad').length).toBe(1);
});

it('Explorer Id will create an explorer component', () => {
  const program = { windowId: 0, id: 'EXPLORER', payload: { text: 'test' } };
  const wrapper = shallow(getMinComponent({ activePrograms: [program] }));
  expect(wrapper.find('.explorer').length).toBe(1);
});

it('PASSWORD_DIALOG Id will create a password-dialog component', () => {
  const program = {
    windowId: 0,
    id: 'PASSWORD_DIALOG',
    payload: { text: 'test' },
  };
  const wrapper = shallow(getMinComponent({ activePrograms: [program] }));
  expect(wrapper.find('.password-dialog').length).toBe(1);
});
