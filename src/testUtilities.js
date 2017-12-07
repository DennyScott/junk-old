import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

export const rendersCorrectly =  component => {
  const wrapper = shallow(component);
  expect(wrapper.length).toBe(1);
}

export const matchesSnapshot = component => {
  const wrapper = shallow(component);
  expect(toJson(wrapper)).toMatchSnapshot();
}