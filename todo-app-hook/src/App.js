import React, { useState } from 'react';
import { Header } from './components/Header';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { Footer } from './components/Footer';

export function App() {
  const [arrTodo, setArrTodo] = useState([
    { id: 0, name: 'Reading', status: true },
    { id: 1, name: 'Listening', status: false },
    { id: 2, name: 'Writing', status: false },
    { id: 3, name: 'Speaking', status: true }
  ]);
  const [status, setStatus] = useState('all');

  function showItemByStatus(status) {
    switch (status) {
      case 'active':
        return arrTodo.filter(item => item.status);
      case 'complete':
        return arrTodo.filter(item => !item.status);
      default:
        return arrTodo
    }
  }

  function addNewTodo(nameNewTodo) {
    if (!nameNewTodo) {
      alert('Please input something!');
    } else {
      let newTask;
      if (!arrTodo.length) {
        newTask = { id: 0, name: nameNewTodo, status: true };
      } else {
        newTask = { id: arrTodo[arrTodo.length - 1].id + 1, name: nameNewTodo, status: true };
      }
      const newArrTodo = arrTodo.concat(newTask);
      setArrTodo(newArrTodo);
    }
  }

  function completeItem(id) {
    const newArrTodo = arrTodo.map(item => {
      if (item.id === parseInt(id)) {
        return { ...item, status: !item.status }
      }
      return item;
    })
    setArrTodo(newArrTodo);
  }

  function deleteItem(id) {
    const newArrTodo = arrTodo.filter(item => item.id !== parseInt(id));
    setArrTodo(newArrTodo);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="app-wrap">
          <Header />
          <main>
            <AddTodo addNewTodo={addNewTodo} />
            <TodoList arrTodo={showItemByStatus(status)} completeItem={completeItem} deleteItem={deleteItem} />
          </main>
          <Footer changeStatus={(status)=>{setStatus(status);}}/>
        </div>
      </div>
    </div>
  );
}
