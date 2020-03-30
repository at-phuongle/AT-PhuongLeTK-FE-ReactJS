import React, { Component } from 'react';

class AddTask extends Component {
  constructor(props) {
    super(props);
  }
  inputTask = e => {
    if (e.key === 'Enter') {
      this.props.addTask(e.target.value);
      e.target.value = '';
    }
  }
  render() {
    return (
      <div className="add-task">
        <input className="input-task" type="text" placeholder="What needs to be done?" onKeyPress={this.inputTask} />
      </div>
    );
  }
}

export default AddTask;
