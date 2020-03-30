import React, { useState } from 'react';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';
import StatusTask from './components/StatusTask';

function App() {
  let [arrTodo, setState] = useState([
    { id: 0, name: 'Reading', isComplete: false },
    { id: 1, name: 'Listening', isComplete: false },
    { id: 2, name: 'Writing', isComplete: false }
  ]);
  let completeItem = id => {
    setState(
      arrTodo.map(item => {
        if (item.id === parseInt(id)) {
          return { ...item, isComplete: !item.isComplete };
        }
        return item;
      })
    );
  }
  let addTask = newTaskName => {
    let newTask = { id: arrTodo.length, name: newTaskName, isComplete: false }
    setState(
      arrTodo.concat(newTask)
    );
    // console.log(newTask);
  }
  return (
    <div className="App">
      <div className="container">
        <div className="app-wrap">
          <h1 className="app-title">Todos</h1>
          <AddTask addTask={addTask} />
          <ul className="todo-list">
            {arrTodo.map((item, index) => (
              <TodoList key={index} todo={item} completeItem={completeItem} />
            ))}
          </ul>
          <StatusTask todo={arrTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
