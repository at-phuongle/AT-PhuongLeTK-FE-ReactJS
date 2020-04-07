import React, { Component } from 'react';
export class Footer extends Component {
  constructor(props) {
    super(props);
  }

  countTaskByStatus = e => {
    return this.props.item.filter(item => !item.status).length;
  }

  handleShowListByStatus = e => {
    this.props.showListByStatus(e.target.value);
  };

  render() {
    let count = this.countTaskByStatus() + ' iteam(s) left';
    return (
      <footer className="page-footer">
        <ul className="page-footer-list">
          <li className="page-footer-item">{count}</li>
          <li className="page-footer-item"><button value={'all'} onClick={this.handleShowListByStatus}>All task</button></li>
          <li className="page-footer-item"><button value={'active'} onClick={this.handleShowListByStatus}>Active</button></li>
          <li className="page-footer-item"><button value={'complete'} onClick={this.handleShowListByStatus}>Completed</button></li>
        </ul>
      </footer>
    );
  }
}
