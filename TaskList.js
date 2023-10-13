// TaskList.js
//This component can manage the list of tasks. It can include sorting options, filtering, and the ability to mark all tasks as completed. It keeps the main TodoApp component cleaner by encapsulating task list functionality.

import React from 'react';
import TaskItem from './TaskItem'; //render individual tasks items within the list 

const TaskList = ({ tasks, onToggle, onDelete }) => {
  //3 props: 
  //tasks: array
  //
  return (
    <ul>
      {tasks.map((task, index) => (
        //map function: iterate over the tasks array and generated taskItem component for each task 
        //transform each task object into a TaskItem component 
        <TaskItem
          key={index}
          text={task.text}
          completed={task.completed}
          onToggle={() => onToggle(index)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </ul>

    // The taskList component is repsonsible for rendering a list of tasks by mapping over the the provideds taska array 
    // for each task, it creates a TaskItem component, passing the necessary props to configure the the task apperance and behaviour
  );
};

export default TaskList;
