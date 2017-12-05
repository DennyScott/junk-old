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

const getMinComponent = () => <Desktop {...minProps} />;

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

// it('DesktopContainer openProgram dispatch called on double click', () => {
//   const contents = {
//     something: {
//       logo: 'img.png',
//     },
//   };

//   drive.getDesktopContents = jest.fn(() => contents);

//   const wrapper = mount(<DesktopContainer store={store} {...minProps} />);
//   console.log(store.getState());
//   const state = store.getState();
//   const spy = jest.spyOn(state, 'openProgram');

//   wrapper.find(DesktopIcon).simulate('doubleClick');
//   expect(spy).toHaveBeenCalled();
// });
