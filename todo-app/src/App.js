import React, { Component } from 'react';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import Header from './components/Header';
import TodoList from './components/TodoList';

let listTodo = [
  { id: 0, name: 'Reading', status: false },
  { id: 1, name: 'Listening', status: true },
  { id: 2, name: 'Writing', status: false },
  { id: 3, name: 'Speaking', status: true }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrTodo: listTodo,
    }
    this.completeItem = this.completeItem.bind(this);
    this.addNewTask = this.addNewTask.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.showListByStatus = this.showListByStatus.bind(this);
  }

  //add new task todo to list
  addNewTask = newTaskName => {
    if (!newTaskName) {
      alert('Please input something!');
    } else {
      let newTask = { id: listTodo[listTodo.length-1].id+1, name: newTaskName, status: false };
      listTodo = listTodo.concat(newTask);
      this.setState({ arrTodo: listTodo });
    }
  }

  //show by category condition
  showListByStatus = (e) => {
    let checkArrTodo = [];
    switch (e) {
      case 'all':
        checkArrTodo = listTodo;
        break;
      case 'active':
        checkArrTodo = listTodo.filter(item => !item.status)
        break;
      case 'complete':
        checkArrTodo = listTodo.filter(item => item.status)
        break;
      default:
        checkArrTodo = listTodo;
    }
    this.setState({ arrTodo: checkArrTodo });
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
    let check = listTodo.find(item => item.status === false);
    if (check) {
      listTodo = listTodo.map(item => {
        return { ...item, status: true }
      })
    } else {
      listTodo = listTodo.map(item => {
        return { ...item, status: false }
      })
    }
    this.setState({ arrTodo: listTodo });
  }

  //click delete item
  deleteItem = id => {
    listTodo.splice(listTodo.find(item => item.id === parseInt(id)), 1);
    this.setState({ arrTodo: listTodo });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="app-wrap">
            <Header />
            <main>
              <AddTask addNewTask={this.addNewTask} completeAllItem={this.completeAllItem} />
              <TodoList arrTodo={this.state.arrTodo} completeItem={this.completeItem} deleteItem={this.deleteItem}/>
            </main>
            <Footer item={this.state.arrTodo} showListByStatus={this.showListByStatus} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
