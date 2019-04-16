import React, { Component } from "react";
import TaskListItem from "../TaskListItem";

import { withTasks } from "../../contexts/TasksContext";

class TasksInProgress extends Component {
  render() {
    const { getTasksInProgress } = this.props.tasksContext;

    return (
      <>
        <h2>Tasks in progress</h2>
        <ul>
          {getTasksInProgress().map(task => (
            <TaskListItem task={task} key={task.id} />
          ))}
        </ul>
      </>
    );
  }
}
export default withTasks(TasksInProgress);
