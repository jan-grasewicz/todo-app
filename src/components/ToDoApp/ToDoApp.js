import React, { Component } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskListItem from "./TaskListItem";

import "./index.css";

import { withTasks } from "../../contexts/TasksContext";

class ToDoApp extends Component {
  render() {
    const { addTask, tasks } = this.props.tasksContext;
    return (
      <div>
        <AddTaskForm handleInput={addTask} />
        <ul>
          {tasks &&
            tasks.map(task => <TaskListItem task={task} key={task.id} />)}
        </ul>
      </div>
    );
  }
}
export default withTasks(ToDoApp);
