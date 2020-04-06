import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
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
        <input className="toggle" type="checkbox" value={this.props.item.id} onClick={this.handleCompleteItem} />
        <label className="todo-name">{this.props.item.name}</label>
        <button className="btn btn-delete-item" value={this.props.item.id} onClick={this.handleDeleteItem}>X</button>
      </li>
    );
  }
}

export default TodoItem;
