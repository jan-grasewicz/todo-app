import React, { Component } from "react";
import "./index.css";

class AddTaskForm extends Component {
  state = {
    taskName: ""
  };

  handleChange = event => {
    this.setState({
      taskName: event.target.value
    });
  };

  handleKeyUp = event => {
    if (event.key === "Enter"&&this.state.taskName.length) {
      this.props.handleInput(this.state.taskName);
      this.setState({ taskName: "" });
    }
  };

  render() {
    return (
      <>
        <input
          value={this.state.taskName}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          className="addTaskForm__input"
          placeholder="Enter new task"
          autoFocus
        />
      </>
    );
  }
}
export default AddTaskForm;
