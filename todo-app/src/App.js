import React, { Component } from 'react';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import Header from './components/Header';
let arr = [
  { id: 0, name: 'Reading', isComplete: false },
  { id: 1, name: 'Listening', isComplete: true },
  { id: 2, name: 'Writing', isComplete: false },
  { id: 3, name: 'Speaking', isComplete: true }
]
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrTodo: [],
    }
    this.completeItem = this.completeItem.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.showTask = this.showTask.bind(this);
  }
  componentDidMount() {
    this.setState({ arrTodo: arr });
  }
  addTask = newTaskName => {
    if (!newTaskName) {
      alert('Please input something!');
    } else {
      let newTask = { id: arr.length, name: newTaskName, isComplete: false };
      arr = arr.concat(newTask);
      this.setState({ arrTodo: arr });
    }
  }
  showTask = (e) => {
    let checkArrTodo = [];
    switch (parseInt(e)) {
      case 1:
        checkArrTodo = arr;
        break;
      case 2:
        checkArrTodo = arr.filter(item => !item.isComplete)
        break;
      case 3:
        checkArrTodo = arr.filter(item => item.isComplete)
        break;
      default:
        checkArrTodo = arr;
    }
    this.setState({ arrTodo: checkArrTodo });
  }
  completeItem = id => {
    arr = this.state.arrTodo.map(item => {
      if (item.id === parseInt(id)) {
        return { ...item, isComplete: !item.isComplete };
      }
      return item;
    })
    this.setState({ arrTodo: arr });
  }
  completeAllItem = () => {
    let check = arr.find(item => item.isComplete === false);
    if (check) {
      arr = arr.map(item => {
        return { ...item, isComplete: true }
      })
    } else {
      arr = arr.map(item => {
        return { ...item, isComplete: false }
      })
    }
    this.setState({ arrTodo: arr });
  }
  deleteItem = id => {
    arr.splice(arr.find(item => item.id === parseInt(id)), 1);
    this.setState({ arrTodo: arr });
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="app-wrap">
            <Header />
            <main>
              <AddTask addTask={this.addTask} completeAllItem={this.completeAllItem} />
              <ul className="todo-list">
                {this.state.arrTodo.map((item, index) => (
                  <TodoList key={item.id} item={item} completeItem={this.completeItem} deleteItem={this.deleteItem} />
                ))}
              </ul>
            </main>
            <Footer item={this.state.arrTodo} showTask={this.showTask} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
