import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  changeStatus = e => {
    this.props.completeItem(e.target.value);
  }
  remove = e => {
    this.props.deleteItem(e.target.value);
  }
  render() {
    let classNameDiv = 'todo-item';
    if (this.props.item.isComplete) {
      classNameDiv += ' todo-item-complete';
    }
    return (
      <li className={classNameDiv}>
        <input className="toggle" type="checkbox" value={this.props.item.id} onClick={this.changeStatus} />
        <label className="todo-name">{this.props.item.name}</label>
        <button className="btn btn-delete-item" value={this.props.item.id} onClick={this.remove}>X</button>
      </li>
    );
  }
}

export default TodoList;
