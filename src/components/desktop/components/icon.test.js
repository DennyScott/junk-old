import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { rendersCorrectly, matchesSnapshot } from 'testUtilities';

import Icon from './icon';

const minProps = {
  name: '',
  logo: '',
  onDoubleClick: jest.fn(),
};

const getMinComponent = () => <Icon {...minProps} />;

it('Desktop renders correctly', () => {
  rendersCorrectly(getMinComponent(), expect);
});

it('Desktop matches snapshot correctly', () => {
  matchesSnapshot(getMinComponent(), expect);
});

it('Double clicking the icon calls the double click prop', () => {
  const wrapper = shallow(getMinComponent());
  const spy = jest.spyOn(minProps, 'onDoubleClick');
  wrapper.find('.desktop-icon').simulate('doubleClick');
  expect(spy).toHaveBeenCalled();
});

it('The app name is displayed', () => {
  const appName = 'appName';
  const wrapper = shallow(<Icon {...minProps} name={appName} />);
  expect(toJson(wrapper.find('.app-name').children())).toBe(appName);
});
