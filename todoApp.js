import React, { useState, useEffect } from 'react';
import TaskList from './TaskList'; // Import the TaskList component
import TaskInput from './TaskInput'; // Import the TaskInput component

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState('');

  // Load tasks from local storage when the component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    //Retrieves the value assosiated with the key 'tasks' from locale storage and parse it into JSON 
    //JSON.parse: Convert JSON string into JS object 
    setTasks(savedTasks);
  }, []);

  // Save tasks to local storage whenever the tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    //Json.stringify: Serialize JS object into a JSOn stings
  }, [tasks]);

  const addTask = (taskText) => {
    if (taskText === '') {
      alert('You must write something!');
    } else {
      const newTask = { text: taskText, completed: false };
      setTasks([...tasks, newTask]);
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    //it negates the current value of the specific task 
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    //checks if the current indey is not equal to the index of the task you want to remove 
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-app">
      <h2>To-Do List <img src="images/icon.png" alt="" /></h2>
      <TaskInput onAddTask={addTask} /> {/* Render TaskInput component */}
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={removeTask} /> {/* Render TaskList component */}
    </div>
  );
};

export default TodoApp; 

