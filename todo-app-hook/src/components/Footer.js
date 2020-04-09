import React, { useState } from 'react';

export function Footer() {
  return (
    <footer className="page-footer">
        <ul className="page-footer-list">
          <li className="page-footer-item">items left</li>
          <li className="page-footer-item"><button >All task</button></li>
          <li className="page-footer-item"><button >Active</button></li>
          <li className="page-footer-item"><button >Completed</button></li>
        </ul>
      </footer>
  );
}
