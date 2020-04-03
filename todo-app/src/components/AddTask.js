import React, { Component } from 'react';

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }
  changeHandler = e => {
    this.setState({
      inputValue: e.target.value
    })
  }
  inputTask = e => {
    if (e.key === 'Enter') {
      this.props.addTask(e.target.value);
      this.setState({ inputValue: '' });
    }
  }
  selectAllItem = () => {
    this.props.completeAllItem();
  }
  render() {
    return (
      <div className="add-task">
        <input className="input-task" type="text" placeholder="What needs to be done?" value={this.state.inputValue} onChange={this.changeHandler} onKeyPress={this.inputTask} />
        <label className="select-all-item" onClick={this.selectAllItem}></label>
      </div>
    );
  }
}

export default AddTask;
