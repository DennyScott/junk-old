import React from 'react';
import { shallow } from 'enzyme';
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

const createSimpleProgram = (id="") => ({
  windowId: 0, 
  id, 
  payload: { 
    text: 'test' 
  },
});

const expectProgramToBeCreated = (id, selector, amount, expect) => {
  const program = createSimpleProgram(id);
  const wrapper = shallow(getMinComponent({ activePrograms: [program] }));
  expect(wrapper.find(selector).length).toBe(amount);
}

const expectProgramToBeListed = (id, amount, expect) => {
  const program = createSimpleProgram(id);
  const wrapper = shallow(getMinComponent({ activePrograms: [program] }));
  expect(wrapper.find('.open-windows').children().length).toBe(amount);
}

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
  expectProgramToBeListed('NOTEPAD', 1, expect);
});

it('no Id will create a no component', () => {
  expectProgramToBeListed('', 0, expect);
});

it('Notepad Id will create a notepad component', () => {
  expectProgramToBeCreated('NOTEPAD', '.notepad', 1, expect);
});

it('Explorer Id will create an explorer component', () => {
  expectProgramToBeCreated('EXPLORER', '.explorer', 1, expect);
});

it('PASSWORD_DIALOG Id will create a password-dialog component', () => {
  expectProgramToBeCreated('PASSWORD_DIALOG', '.password-dialog', 1, expect);
});
