import React from 'react';

function AddTask(props) {
  let todo = props;
  let inputTask = e => {
    if (e.key === 'Enter') {
      todo.addTask(e.target.value);
      e.target.value = '';
    }
  }
  return (
    <header className="add-task">
      <input className="input-task" type="text" placeholder="What needs to be done?" onKeyPress={inputTask} />
    </header>
  );
}

export default AddTask;
