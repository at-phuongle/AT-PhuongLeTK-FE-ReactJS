import React, { useState } from 'react';

export function TodoItem(props) {
  let classNameDiv = 'todo-item';
  if (!props.item.status) {
    classNameDiv += ' todo-item-complete';
  }

  function handleCheckbox(e) {
    props.completeItem(e.target.value);
  }
  
  function handleDeleteItem(e) {
    props.deleteItem(e.target.value);
  }
  return (
    <li className={classNameDiv}>
      <input className="toggle" type="checkbox" checked={!props.item.status} value={props.item.id} onChange={handleCheckbox} />
      <label className="todo-name">{props.item.name}</label>
      <button className="btn btn-delete-item" value={props.item.id} onClick={handleDeleteItem}>X</button>
    </li>
  );
}
