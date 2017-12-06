import React from 'react';
import { shallow } from 'enzyme';
import DesktopContainer, { Desktop, mapDispatchToProps } from './desktop';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { rendersCorrectly, matchesSnapshot } from 'testUtilities';

import * as drive from 'selectors/drive';
import * as activePrograms from 'selectors/activePrograms';
import * as activeProgramActions from 'actions/activeProgram';

drive.getDesktopContents = jest.fn(() => {});
activePrograms.getDetailedActivePrograms = jest.fn(() => []);
activeProgramActions.openProgram = jest.fn();

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

const getMinContainerComponent = (otherProps = {}) => (
  <DesktopContainer store={store} {...minProps} />
);

const createSimpleProgram = (id="") => ({
  windowId: 0, 
  id, 
  payload: { 
    text: 'test' 
  },
});

const expectProgramToBeCreated = (id, selector, amount) => {
  const program = createSimpleProgram(id);
  const wrapper = shallow(getMinComponent({ activePrograms: [program] }));
  expect(wrapper.find(selector).length).toBe(amount);
}

const expectProgramToBeListed = (id, amount) => {
  const program = createSimpleProgram(id);
  const wrapper = shallow(getMinComponent({ activePrograms: [program] }));
  expect(wrapper.find('.open-windows').children().length).toBe(amount);
}

it('Desktop renders correctly', () => {
  rendersCorrectly(getMinComponent());
});

it('Desktop matches snapshot correctly', () => {
  matchesSnapshot(getMinComponent());
});

it('DesktopContainer renders correctly', () => {
  rendersCorrectly(getMinContainerComponent());
});

it('DesktopContainer matches snapshot', () => {
  matchesSnapshot(getMinContainerComponent());
});

it('a real Id will create a a program component', () => {
  expectProgramToBeListed('NOTEPAD', 1);
});

it('no Id will create a no component', () => {
  expectProgramToBeListed('', 0);
});

it('Notepad Id will create a notepad component', () => {
  expectProgramToBeCreated('NOTEPAD', '.notepad', 1);
});

it('Explorer Id will create an explorer component', () => {
  expectProgramToBeCreated('EXPLORER', '.explorer', 1);
});

it('PASSWORD_DIALOG Id will create a password-dialog component', () => {
  expectProgramToBeCreated('PASSWORD_DIALOG', '.password-dialog', 1, expect);
});

it('Passing in contents will result in an icon being added to the desktop', () => {
  const icon = {logo: 'someLogo'};
  const wrapper = shallow(getMinComponent({ contents: {'myComputer': icon } }));
  expect(wrapper.find('.desktop-icons').children().length).toBe(1);
});

it('calling the openProgram in dispatch calls the openProgram action', () => {
  const dispatchSpy = jest.fn();
  const {openProgram} = mapDispatchToProps(dispatchSpy);
  const spy = jest.spyOn(activeProgramActions, 'openProgram');
  openProgram();
  expect(spy).toHaveBeenCalled();
});


