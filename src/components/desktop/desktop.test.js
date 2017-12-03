import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import DesktopContainer, { Desktop } from './desktop';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { DesktopIcon } from './components/icon';

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

it('Desktop renders correctly', () => {
  const wrapper = shallow(<Desktop {...minProps} />);
  expect(wrapper.length).toBe(1);
});

it('Desktop matches snapshot correctly', () => {
  const wrapper = shallow(<Desktop {...minProps} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('DesktopContainer renders correctly', () => {
  const wrapper = shallow(<DesktopContainer store={store} {...minProps} />);
  expect(wrapper.length).toBe(1);
});

it('DesktopContainer matches snapshot', () => {
  const wrapper = shallow(<DesktopContainer store={store} {...minProps} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

//TODO: For travis, needs to use the Desktop Icon but should be Icon test
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
