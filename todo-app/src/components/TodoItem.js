import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBoxValue: this.props.item.id
    }
  }

  checkBoxHandle = e => {
    this.setState({ checkBoxValue: e.target.value })
  }

  handleCompleteItem = e => {
    this.props.completeItem(e.target.value);
  }

  handleDeleteItem = e => {
    this.props.deleteItem(e.target.value);
  }

  render() {
    let classNameDiv = 'todo-item';
    if (this.props.item.status) {
      classNameDiv += ' todo-item-complete';
    }
    return (
      <li className={classNameDiv}>
        <input className="toggle" type="checkbox" checked={this.props.item.status} onChange={this.checkBoxHandle} value={this.state.checkBoxValue} onClick={this.handleCompleteItem} />
        <label className="todo-name">{this.props.item.name}</label>
        <button className="btn btn-delete-item" value={this.props.item.id} onClick={this.handleDeleteItem}>X</button>
      </li>
    );
  }
}

export { TodoItem };
