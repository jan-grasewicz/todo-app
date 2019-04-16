import React, { Component } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskListItem from "./components/TaskListItem";

import "./ToDoApp.css";

import { withTasks } from "./contexts/TasksContext";

class ToDoApp extends Component {
  render() {
    const { addTask, getTasksFromNewest } = this.props.tasksContext;
    return (
      <div>
        <AddTaskForm handleInput={addTask} />
        <ul>
          {getTasksFromNewest().map(task => (
            <TaskListItem task={task} key={task.id} />
          ))}
        </ul>
      </div>
    );
  }
}
export default withTasks(ToDoApp);
