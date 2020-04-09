import React, { useState } from 'react';

export function TodoItem(props) {
  let [valueCheckBox, setValueCheckBox] = useState(props.item.id);
  let classNameDiv = 'todo-item';
  if (!props.item.status) {
    classNameDiv += ' todo-item-complete';
  }

  function handleCheckbox(e) {
    setValueCheckBox(e.target.value);
    props.completeItem(valueCheckBox);
  }
  
  function handleDeleteItem(e) {
    props.deleteItem(e.target.value);
  }
  return (
    <li className={classNameDiv}>
      <input className="toggle" type="checkbox" checked={!props.item.status} value={valueCheckBox} onChange={handleCheckbox} />
      <label className="todo-name">{props.item.name}</label>
      <button className="btn btn-delete-item" value={props.item.id} onClick={handleDeleteItem}>X</button>
    </li>
  );
}
