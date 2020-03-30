import React, { Component } from 'react';

// function Footer(props) {
class Footer extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      // let todos = this.props;
      <footer className="page-footer">
        <ul className="footer-list">
          <li className="footer-item">{this.props.todo.length} iteams left</li>
          <li className="footer-item"><a href="#">All task</a></li>
          <li className="footer-item"><a href="#">Active</a></li>
          <li className="footer-item"><a href="#">Completed</a></li>
        </ul>
      </footer>

    );
  }
}

export default Footer;
