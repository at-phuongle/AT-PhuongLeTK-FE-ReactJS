import React, { useState, useEffect } from 'react';
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
  const countItemActive = arrTodo.filter(item => item.status).length;

  useEffect(() => {
    document.title = 'Todo (' + countItemActive + ')';
    console.log('chạy');
    
  }, [countItemActive])

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
      let newTodo;
      if (!arrTodo.length) {
        newTodo = { id: 0, name: nameNewTodo, status: true };
      } else {
        newTodo = { id: arrTodo[arrTodo.length - 1].id + 1, name: nameNewTodo, status: true };
      }
      setArrTodo(arrTodo.concat(newTodo));
    }
  }

  function completeItem(id) {
    setArrTodo(arrTodo.map(item => {
      if (item.id === parseInt(id)) {
        return { ...item, status: !item.status }
      }
      return item;
    }))
  }

  function deleteItem(id) {
    setArrTodo(arrTodo.filter(item => item.id !== parseInt(id)));
  }

  function completeAllItem() {
    let check = arrTodo.find(item => item.status === true);
    if (check) {
      setArrTodo(arrTodo.map(item => {
        return { ...item, status: false }
      }))
    } else {
      setArrTodo(arrTodo.map(item => {
        return { ...item, status: true }
      }))
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="app-wrap">
          <Header />
          <main>
            <AddTodo addNewTodo={addNewTodo} completeAllItem={completeAllItem} />
            <TodoList arrTodo={showItemByStatus(status)} completeItem={completeItem} deleteItem={deleteItem} />
          </main>
          <Footer countItemActive={countItemActive} changeStatus={(status) => { setStatus(status); }} />
        </div>
      </div>
    </div>
  );
}
