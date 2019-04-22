import React, { Component } from "react";
import { withTasks } from "../../contexts/TasksContext";

class AddTaskForm extends Component {
  state = {
    taskTitle: ""
  };

  handleChange = event => {
    this.setState({
      taskTitle: event.target.value
    });
  };

  handleKeyUp = event => {
    event.key === "Enter" && this.handleSubmit();
  };

  handleSubmit = () => {
    if (this.state.taskTitle.length) {
      this.props.tasksContext.addTask(this.state.taskTitle);
      this.setState({ taskTitle: "" });
    }
  };

  render() {
    return (
      <>
        <input
          value={this.state.taskTitle}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          className="addTaskForm__input"
          placeholder="Enter new task"
          autoFocus
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </>
    );
  }
}
export default withTasks(AddTaskForm);
