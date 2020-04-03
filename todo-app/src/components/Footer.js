import React, { Component } from 'react';
class Footer extends Component {
  constructor(props) {
    super(props);
    this.changeTask = this.changeTask.bind(this);
  }
  changeTask = e => {
    this.props.showTask(e.target.value);
  };
  render() {
    return (
      <footer className="page-footer">
        <ul className="page-footer-list">
          <li className="page-footer-item">{this.props.item.length} iteam(s) left</li>
          <li className="page-footer-item"><button value='1' onClick={this.changeTask}>All task</button></li>
          <li className="page-footer-item"><button value='2' onClick={this.changeTask}>Active</button></li>
          <li className="page-footer-item"><button value='3' onClick={this.changeTask}>Completed</button></li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
