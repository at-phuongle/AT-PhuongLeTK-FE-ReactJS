import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  changeStatus = e => {
    this.props.completeItem(e.target.value);
  }
  render() {
    let classNameDiv = 'todo-item';
    if (this.props.todo.isComplete) {
      classNameDiv += ' todo-item-complete';
    }
    return (
        <li className={classNameDiv}>
          <input className="toggle" type="checkbox" value={this.props.todo.id} onClick={this.changeStatus} />
          <label className="todo-name">{this.props.todo.name}</label>
        </li>
    );
  }
}

export default TodoList;
