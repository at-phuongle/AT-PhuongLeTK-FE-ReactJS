import React, { Component } from 'react';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrTodo: [
        { id: 0, name: 'Reading', isComplete: false },
        { id: 1, name: 'Listening', isComplete: false },
        { id: 2, name: 'Writing', isComplete: false }
      ]
    }
    this.addTask = this.addTask.bind(this);
    this.completeItem = this.completeItem.bind(this);
  }
  completeItem = id => {
    let newTodo = this.state.arrTodo.map(item => {
      if (item.id === parseInt(id)) {
        return { ...item, isComplete: !item.isComplete };
      }
      return item;
    })
    this.setState({arrTodo: newTodo});
  }
  addTask = newTaskName => {
    if(!newTaskName){
      alert('Please input something!');
    } else {
    let newTask = { id: this.state.arrTodo.length, name: newTaskName, isComplete: false };
    let newTodo = this.state.arrTodo.concat(newTask);
    this.setState({arrTodo: newTodo});
    }
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="app-wrap">
            <Header />
            <main>
            <AddTask addTask={this.addTask} />
            <ul className="todo-list">
              {this.state.arrTodo.map((item, index) => (
                <TodoList key={item.id} todo={item} completeItem={this.completeItem} />
              ))}
            </ul>
            </main>
            <Footer todo={this.state.arrTodo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
