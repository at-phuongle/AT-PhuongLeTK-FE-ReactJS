import React from 'react';

function TodoList(props) {
  const todos = props;
  let changeStatus = e => {
    todos.completeItem(e.target.value);
  }
  let classNameDiv = 'todo-item';
  if (todos.todo.isComplete) {
    classNameDiv += ' todo-item-complete';
  }
  return (
    <main>
      <li className={classNameDiv}>
        <input className="toggle" type="checkbox" value={todos.todo.id} onClick={changeStatus} />
        <label className="todo-name">{todos.todo.name}</label>
      </li>
    </main>
  );
}

export default TodoList;
