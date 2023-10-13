// TaskInput.js
//Separate the input box and "Add" button into their own component. This component can manage the user's input and provide a button for adding new tasks. This can be useful for handling user interactions and validation.

import React, { useState } from 'react';


const TaskInput = ({ onAddTask }) => {
  const [inputText, setInputText] = useState('');

  const handleAddTask = () => {
    if (inputText === '') {
      alert('You must write something!');
    } else {
      onAddTask(inputText);
      setInputText('');
    }
  };

  return (
    <div className="row">
      <input
        type="text"
        placeholder="Add your text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default TaskInput;
