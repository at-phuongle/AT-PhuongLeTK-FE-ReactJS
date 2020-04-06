import React, { Component } from 'react';
import { TodoItem } from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="todo-list">
        {this.props.arrTodo.map(item => (
          <TodoItem key={item.id} item={item} completeItem={this.props.completeItem} deleteItem={this.props.deleteItem} />
        ))}
      </ul>
    );
  }
}

export { TodoList };
