import React, { Component } from 'react';
import { AddTask } from './components/AddTask';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import { Helmet } from 'react-helmet';

let listTodo;
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrTodo: [{ id: 0, name: 'Reading', status: true },
      { id: 1, name: 'Listening', status: false },
      { id: 2, name: 'Writing', status: true },
      { id: 3, name: 'Speaking', status: false }],
      show: 'all'
    }
    this.completeItem = this.completeItem.bind(this);
    this.addNewTask = this.addNewTask.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.showListByStatus = this.showListByStatus.bind(this);
  }

  componentDidMount() {
    let listTodo = JSON.parse(localStorage.getItem('arrTodoLocal'));
    if (listTodo) {
      this.setState({ arrTodo: listTodo });
    } else {
      localStorage.setItem('arrTodoLocal', JSON.stringify(this.state.arrTodo));
    }
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState.arrTodo !== this.state.arrTodo) {
      localStorage.setItem('arrTodoLocal', JSON.stringify(this.state.arrTodo));
    }
  }

  //add new task todo to list
  addNewTask = newTaskName => {
    const { arrTodo } = this.state;
    if (!newTaskName) {
      alert('Please input something!');
    } else {
      let newTask;
      if (!arrTodo.length) {
        newTask = { id: 0, name: newTaskName, status: true };
      } else {
        newTask = { id: arrTodo[arrTodo.length - 1].id + 1, name: newTaskName, status: true };
      }
      listTodo = arrTodo.concat(newTask);
      this.setState({ arrTodo: listTodo });
    }
  }

  //click complete item
  completeItem = id => {
    listTodo = this.state.arrTodo.map(item => {
      if (item.id === parseInt(id)) {
        return { ...item, status: !item.status };
      }
      return item;
    })
    this.setState({ arrTodo: listTodo });
  }

  //click complete/uncomplete all item
  completeAllItem = () => {
    const { arrTodo } = this.state;
    let check = arrTodo.find(item => item.status === true);
    if (check) {
      listTodo = arrTodo.map(item => {
        return { ...item, status: false }
      })
    } else {
      listTodo = arrTodo.map(item => {
        return { ...item, status: true }
      })
    }
    this.setState({ arrTodo: listTodo });
  }

  //click delete item
  deleteItem = id => {
    listTodo = this.state.arrTodo.filter(item => item.id !== parseInt(id));
    this.setState({
      arrTodo: listTodo
    })
  }

  //clear all item
  clearAllItemComplete = () => {
    listTodo = this.state.arrTodo.filter(item => item.status);
    this.setState({
      arrTodo: listTodo
    })
  }

  //count item active
  countItemActive = () => {
    return this.state.arrTodo.filter(item => item.status).length;
  }

  showListByStatus = (changeShow) => {
    this.setState({
      show: changeShow
    });
  };

  render() {
    const { show } = this.state
    const todoByStatus = show => {
      switch (show) {
        case 'active':
          return this.state.arrTodo.filter(item => item.status)
        case 'complete':
          return this.state.arrTodo.filter(item => !item.status)
        default:
          return this.state.arrTodo;
      }
    }
    let count = 'Todo (' + this.countItemActive() + ')';
    let countItem = this.countItemActive() + ' items left'
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
              <TodoList arrTodo={todoByStatus(show)} completeItem={this.completeItem} deleteItem={this.deleteItem} />
            </main>
            <Footer countItem={countItem} showListByStatus={this.showListByStatus} clearAllItemComplete={this.clearAllItemComplete} />
          </div>
        </div>
      </div>
    );
  }
}
