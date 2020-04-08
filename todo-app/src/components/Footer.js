import React, { Component } from 'react';
export class Footer extends Component {
  constructor(props) {
    super(props);
  }

  handleShowListByStatus = e => {
    this.props.showListByStatus(e.target.value);
  };

  handleClearAllItemComplete = () => {
    this.props.clearAllItemComplete();
  }
  render() {
    return (
      <footer className="page-footer">
        <ul className="page-footer-list">
          <li className="page-footer-item">{this.props.countItem}</li>
          <li className="page-footer-item"><button value={'all'} onClick={this.handleShowListByStatus}>All task</button></li>
          <li className="page-footer-item"><button value={'active'} onClick={this.handleShowListByStatus}>Active</button></li>
          <li className="page-footer-item"><button value={'complete'} onClick={this.handleShowListByStatus}>Completed</button></li>
          <li className="page-footer-item clear-all"><button onClick={this.handleClearAllItemComplete}>Clear Complete</button></li>
        </ul>
      </footer>
    );
  }
}
