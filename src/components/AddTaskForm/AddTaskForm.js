import React, { Component } from "react";
import { withTasks } from "../../contexts/TasksContext";

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
    if (event.key === "Enter" && this.state.taskName.length) {
      this.props.tasksContext.addTask(this.state.taskName);
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
export default withTasks(AddTaskForm);
