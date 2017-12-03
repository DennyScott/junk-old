import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MenuItem from './menu-item';

const minProps = {
  name: 'test',
};

it('MenuItem renders correctly', () => {
  const wrapper = shallow(<MenuItem {...minProps} />);
  expect(wrapper.length).toBe(1);
});

it('MenuItem render matches snapshot', () => {
  const wrapper = shallow(<MenuItem {...minProps} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('MenuItem gets the first letter of the name to key', () => {
  const wrapper = shallow(<MenuItem {...minProps} />);
  const keyLetter = wrapper.find('.key-letter');
  expect(toJson(keyLetter.children())).toBe(minProps.name.charAt(0));
});

it('selected state should start on false', () => {
  const wrapper = shallow(<MenuItem {...minProps} />);
  expect(wrapper.state().selected).toBeFalsy();
});

it('selected state should turn to true when item is clicked', () => {
  const wrapper = shallow(<MenuItem {...minProps} />);
  wrapper.simulate('click');
  expect(wrapper.state().selected).toBeTruthy();
});
