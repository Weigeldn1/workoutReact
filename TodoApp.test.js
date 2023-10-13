import React from 'react';
import { shallow } from 'enzyme';
import TodoApp from './todoApp';

describe('TodoApp component', () => {
  it('should render a title, TaskInput, and TaskList', () => {
    const wrapper = shallow(<TodoApp />);
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('TaskInput')).toHaveLength(1);
    expect(wrapper.find('TaskList')).toHaveLength(1);
  });
});