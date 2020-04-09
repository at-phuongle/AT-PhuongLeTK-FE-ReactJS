import React, { useState } from 'react';

export function Footer(props) {
  function handleChangeSatus(e) {
    props.changeStatus(e.target.value);
  }
  return (
    <footer className="page-footer">
      <ul className="page-footer-list">
        <li className="page-footer-item">{props.countItemActive} items left</li>
        <li className="page-footer-item"><button value='all' onClick={handleChangeSatus}>All task</button></li>
        <li className="page-footer-item"><button value='active' onClick={handleChangeSatus}>Active</button></li>
        <li className="page-footer-item"><button value='complete' onClick={handleChangeSatus}>Completed</button></li>
      </ul>
    </footer>
  );
}
