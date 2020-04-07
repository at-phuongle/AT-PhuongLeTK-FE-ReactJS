import React, { Component } from 'react';
export class Footer extends Component {
  constructor(props) {
    super(props);
  }

  countTaskByStatus = () => {
    return this.props.item.filter(item => item.status).length;
  }

  handleShowListByStatus = e => {
    this.props.showListByStatus(e.target.value);
  };

  handleClearAllItem = () => {
    this.props.clearAllItem();
  }
  render() {
    let count = this.countTaskByStatus() + ' iteam(s) left';
    return (
      <footer className="page-footer">
        <ul className="page-footer-list">
          <li className="page-footer-item">{count}</li>
          <li className="page-footer-item"><button value={'all'} onClick={this.handleShowListByStatus}>All task</button></li>
          <li className="page-footer-item"><button value={'active'} onClick={this.handleShowListByStatus}>Active</button></li>
          <li className="page-footer-item"><button value={'complete'} onClick={this.handleShowListByStatus}>Completed</button></li>
          <li className="page-footer-item clear-all"><button onClick={this.handleClearAllItem}>Clear All</button></li>
        </ul>
      </footer>
    );
  }
}
