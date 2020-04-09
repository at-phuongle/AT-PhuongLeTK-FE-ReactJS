import React, { useState } from 'react';

export function AddTodo(props) {
  let [valueInput, setValueInput] = useState('');
  function handleInput(e) {
    setValueInput(e.target.value);
  }
  function handleAddNewTodo(e) {
    if (e.key === 'Enter') {
      props.addNewTodo(e.target.value);
      setValueInput('');
    }
  }
  return (
    <div className="add-task">
      <input className="input-task" type="text" placeholder="What needs to be done?" value={valueInput} onChange={handleInput} onKeyPress={handleAddNewTodo} />
      <label className="select-all-item" ></label>
    </div>
  );
}
