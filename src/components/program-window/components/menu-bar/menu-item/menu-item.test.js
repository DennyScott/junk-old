import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MenuItem from './menu-item';
import { rendersCorrectly, matchesSnapshot } from 'testUtilities';

const minProps = {
  name: 'test',
};

const getMinComponent = () => <MenuItem {...minProps} />

it('MenuItem renders correctly', () => {
  rendersCorrectly(getMinComponent(), expect)
});

it('MenuItem render matches snapshot', () => {
  matchesSnapshot(getMinComponent(), expect)
});

it('MenuItem gets the first letter of the name to key', () => {
  const wrapper = shallow(getMinComponent());
  const keyLetter = wrapper.find('.key-letter');
  expect(toJson(keyLetter.children())).toBe(minProps.name.charAt(0));
});

it('selected state should start on false', () => {
  const wrapper = shallow(getMinComponent());
  expect(wrapper.state().selected).toBeFalsy();
});

it('selected state should turn to true when item is clicked', () => {
  const wrapper = shallow(getMinComponent());
  wrapper.simulate('click');
  expect(wrapper.state().selected).toBeTruthy();
});
