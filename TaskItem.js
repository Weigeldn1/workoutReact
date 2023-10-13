// TaskItem.js
//Create a separate component for each to-do item. This component can handle individual tasks, including the task text, checking/unchecking, and deleting. It makes the code more modular and easier to maintain.


import React from 'react';

const TaskItem = ({ text, completed, onToggle, onDelete }) => {
  const handleDeleteClick = (e) => {
    e.stopPropagation(); // Prevent the click event from reaching the parent li element
    //without this, clicking on the x button qouls also trigger the li element onclick even
    //function is used to prevent propagation of an event in the DOM
    //it prevents the event from reaching and triggering event listeners on ancestor elements 
    onDelete(); // Call the onDelete function to remove the task
  };

  return (
    <li onClick={onToggle} className={completed ? 'checked' : ''}>
      {text}
      <span onClick={handleDeleteClick}>×</span> {/* Attach the new handler */}
    </li>
  );
};

export default TaskItem;
// In this updated code, a new handler function handleDeleteClick is introduced. This function prevents event propagation using e.stopPropagation(). This should prevent the "X" button click event from reaching the parent li element, which was causing the task to toggle instead of being removed.

// With this change, the "X" button should correctly trigger the onDelete function, and tasks will be removed as expected.






