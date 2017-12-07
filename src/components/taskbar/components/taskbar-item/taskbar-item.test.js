import React from 'react';
import TaskbarItem from './taskbar-item';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { rendersCorrectly, matchesSnapshot } from 'testUtilities';

const minProps = {
    name: '',
    onClick: jest.fn(),
};

const getMinComponent = otherProps => <TaskbarItem {...minProps} {...otherProps} />;

it('TaskbarItem renders correctly', () => {
    rendersCorrectly(getMinComponent(), expect);
});

it('TaskbarItem render matches snapshot', () => {
    matchesSnapshot(getMinComponent(), expect);
});

it('Name gets displayed in taskbar', () => {
    const wrapper = shallow(getMinComponent({ name: 'test' }));
    expect(toJson(wrapper.find('.taskbar-item-name').children())).toBe('test');
});

it('taskbar item click will call click function', () => {
    var clickFunc = jest.fn();
    const wrapper = shallow(getMinComponent({ onClick: clickFunc }));
    wrapper.simulate('click');
    expect(clickFunc).toHaveBeenCalled();
});
