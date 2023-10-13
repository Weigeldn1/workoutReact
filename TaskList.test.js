import React from 'react';
import { shallow } from 'enzyme';
import TaskList from './TaskList';

describe('TaskList component', () => {
  it('should render a list of tasks', () => {
    const tasks = [
      { text: 'Task 1', completed: false },
      { text: 'Task 2', completed: true },
    ];
    const wrapper = shallow(<TaskList tasks={tasks} />);
    expect(wrapper.find('li')).toHaveLength(2);
  });

  it('should toggle a task when clicked', () => {
    const onToggle = jest.fn();
    const tasks = [{ text: 'Task 1', completed: false }];
    const wrapper = shallow(<TaskList tasks={tasks} onToggle={onToggle} />);
    const listItem = wrapper.find('li');
    listItem.simulate('click');
    expect(onToggle).toHaveBeenCalled();
  });

  it('should delete a task when the delete button is clicked', () => {
    const onDelete = jest.fn();
    const tasks = [{ text: 'Task 1', completed: false }];
    const wrapper = shallow(<TaskList tasks={tasks} onDelete={onDelete} />);
    const deleteButton = wrapper.find('span');
    deleteButton.simulate('click');
    expect(onDelete).toHaveBeenCalled();
  });
});