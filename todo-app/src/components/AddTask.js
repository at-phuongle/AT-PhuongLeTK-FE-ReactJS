import React, { Component } from 'react';

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }

  inputHandler = e => {
    this.setState({ inputValue: e.target.value })
  }

  handleAddNewTask = e => {
    if (e.key === 'Enter') {
      this.props.addNewTask(e.target.value);
      this.setState({ inputValue: '' });
    }
  }

  handleCompleteAllItem = () => {
    this.props.completeAllItem();
  }

  render() {
    return (
      <div className="add-task">
        <input className="input-task" type="text" placeholder="What needs to be done?" value={this.state.inputValue} onChange={this.inputHandler} onKeyPress={this.handleAddNewTask} />
        <label className="select-all-item" onClick={this.handleCompleteAllItem}></label>
      </div>
    );
  }
}

export default AddTask;
