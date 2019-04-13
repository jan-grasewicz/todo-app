import React, { Component } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskListItem from "./TaskListItem";

import "./index.css";
import data from "./tasks.json";

class ToDoApp extends Component {
  state = { tasks: data.tasks };

  addTask = taskName => (
      this.setState({
          tasks:this.state.tasks.concat({
              id: Date.now(),
              name: taskName,
              status: "todo",
              parent:"tasks",
        })
      })
  )

  render() {
    return (
      <div>
        <AddTaskForm handleInput={this.addTask} />
        <ul>
          {this.state.tasks.map(task => (
            <TaskListItem task={task} />
          ))}
        </ul>
      </div>
    );
  }
}
export default ToDoApp;
