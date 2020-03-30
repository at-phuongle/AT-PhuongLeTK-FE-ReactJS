import React from 'react';

function StatusTask(props) {
let todos = props;
  return (
    <footer className="status-task">
      <ul className="status-list">
        <li className="status-item">{todos.todo.length} iteams left</li>
        <li className="status-item"><a href="#">All task</a></li>
        <li className="status-item"><a href="#">Active</a></li>
        <li className="status-item"><a href="#">Completed</a></li>
      </ul>
    </footer>
  );
}

export default StatusTask;
