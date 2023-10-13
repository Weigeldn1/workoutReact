//Code is written in Jest and Enzyme

import React from 'react';
import { shallow } from 'enzyme'; //function from the enzyme library 
import TaskInput from './TaskInput';


//Rendering Elements Test 
//Tests that TaskInput component correctly renders an input field and a button 

describe('TaskInput component', () => {
  it('should render an input field and a button', () => {
    const wrapper = shallow(<TaskInput />);//create a shallow wrapper of Taskinput component 
    expect(wrapper.find('input')).toHaveLength(1); //checks if the shallow wrapper has exactly one input element 
    //wrapper.find: search for inoput elements within the rendered component 
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('should update state on input change', () => {
    const wrapper = shallow(<TaskInput />);
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'New Task' } });
    //simulates user typing new Task into the input field, which triggers the Onchange events 
    expect(wrapper.state('inputText')).toEqual('New Task');
  });

  it('should call onAddTask when the button is clicked', () => {
    const onAddTask = jest.fn(); 
    //creates a mock function, used to simulate the onnAddTask function
    //that would typically be passed as a prop to the TaskInput component 
    const wrapper = shallow(<TaskInput onAddTask={onAddTask} />);
    //passing onAdTask as a props 
    const button = wrapper.find('button');
    wrapper.setState({ inputText: 'New Task' });
    button.simulate('click');
    expect(onAddTask).toHaveBeenCalledWith('New Task');
  });
});
