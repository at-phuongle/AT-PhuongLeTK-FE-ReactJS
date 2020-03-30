import React from 'react';

function Footer(props) {
let todos = props;
  return (
    <footer className="page-footer">
      <ul className="footer-list">
        <li className="footer-item">{todos.todo.length} iteams left</li>
        <li className="footer-item"><a href="#">All task</a></li>
        <li className="footer-item"><a href="#">Active</a></li>
        <li className="footer-item"><a href="#">Completed</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
