import React, { Component } from 'react';
import { AddTask } from './components/AddTask';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import { Helmet } from 'react-helmet';

let listTodo = [
  { id: 0, name: 'Reading', status: true },
  { id: 1, name: 'Listening', status: false },
  { id: 2, name: 'Writing', status: true },
  { id: 3, name: 'Speaking', status: false }
]

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrTodo: []
    }
    this.completeItem = this.completeItem.bind(this);
    this.addNewTask = this.addNewTask.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.showListByStatus = this.showListByStatus.bind(this);
  }

  componentDidMount() {
    let listTodos = JSON.parse(localStorage.getItem('arrTodoLocal'));
    if (listTodos) {
      listTodo = listTodos;
      this.setState({ arrTodo: listTodo });
    } else {
      localStorage.setItem('arrTodoLocal', JSON.stringify(listTodo));
    }
  }

  componentDidUpdate(prevProp,prevState) {
    console.log(prevState);
    localStorage.setItem('arrTodoLocal', JSON.stringify(listTodo));
  }

  //add new task todo to list
  addNewTask = newTaskName => {
    if (!newTaskName) {
      alert('Please input something!');
    } else {
      let newTask;
      if (listTodo.length !== 0) {
        newTask = { id: listTodo[listTodo.length - 1].id + 1, name: newTaskName, status: true };
      } else {
        newTask = { id: 0, name: newTaskName, status: true };
      }
      listTodo = listTodo.concat(newTask);
      this.setState({ arrTodo: listTodo });
    }
  }

  //show by category condition
  showListByStatus = e => {
    let checkArrTodo = [];
    switch (e) {
      case 'all':
        checkArrTodo = listTodo;
        break;
      case 'active':
        checkArrTodo = listTodo.filter(item => item.status)
        break;
      case 'complete':
        checkArrTodo = listTodo.filter(item => !item.status)
        break;
      default:
        checkArrTodo = listTodo;
    }
    this.setState({ arrTodo: checkArrTodo });
  }

  //click complete item
  completeItem = id => {
    listTodo = listTodo.map(item => {
      if (item.id === parseInt(id)) {
        return { ...item, status: !item.status };
      }
      return item;
    })
    this.setState({ arrTodo: listTodo });
  }

  //click complete/uncomplete all item
  completeAllItem = () => {
    let check = listTodo.find(item => item.status === true);
    if (check) {
      listTodo = listTodo.map(item => {
        return { ...item, status: false }
      })

    } else {
      listTodo = listTodo.map(item => {
        return { ...item, status: true }
      })
    }
    this.setState({ arrTodo: listTodo });
  }

  //click delete item
  deleteItem = id => {
    listTodo = listTodo.filter(item => item.id !== parseInt(id))
    this.setState({
      arrTodo: listTodo
    })
  }

  //clear all item
  clearAllItem = () => {
    listTodo = [];
    this.setState({ arrTodo: listTodo });
  }
  //count item active
  countItemActive = () => {
    return listTodo.filter(item => item.status).length;
  }

  render() {
    let count = 'Todo (' + this.countItemActive() + ')';
    return (
      <div className="App">
        <Helmet>
          <title>{count}</title>
        </Helmet>
        <div className="container">
          <div className="app-wrap">
            <Header />
            <main>
              <AddTask addNewTask={this.addNewTask} completeAllItem={this.completeAllItem} />
              <TodoList arrTodo={this.state.arrTodo} completeItem={this.completeItem} deleteItem={this.deleteItem} />
            </main>
            <Footer item={this.state.arrTodo} showListByStatus={this.showListByStatus} clearAllItem={this.clearAllItem} />
          </div>
        </div>
      </div>
    );
  }
}
