import React from 'react';
import { TodoItem } from './TodoItem';

export function TodoList(props) {
  return (
    <ul className="todo-list">
      {
        props.arrTodo.map((item, index) => <TodoItem key={index} item={item} completeItem={props.completeItem} deleteItem={props.deleteItem} />)
      }
    </ul>
  );
}
