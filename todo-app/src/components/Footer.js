import React, { Component } from 'react';
class Footer extends Component {
  constructor(props) {
    super(props);
  }

  handleShowListByStatus = e => {
    this.props.showListByStatus(e.target.value);
  };
  
  render() {
    return (
      <footer className="page-footer">
        <ul className="page-footer-list">
          <li className="page-footer-item">{this.props.item.length} iteam(s) left</li>
          <li className="page-footer-item"><button value={'all'} onClick={this.handleShowListByStatus}>All task</button></li>
          <li className="page-footer-item"><button value={'active'} onClick={this.handleShowListByStatus}>Active</button></li>
          <li className="page-footer-item"><button value={'complete'} onClick={this.handleShowListByStatus}>Completed</button></li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
