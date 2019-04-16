import React, { Component } from "react";
import TaskListItem from "../TaskListItem";

import { withTasks } from "../../contexts/TasksContext";

class TasksToDo extends Component {
  render() {
    const { getTasksToDo } = this.props.tasksContext;

    return (
      <>
        <h2>Tasks to do</h2>
        <ul>
          {getTasksToDo().map(task => (
            <TaskListItem task={task} key={task.id} />
          ))}
        </ul>
      </>
    );
  }
}
export default withTasks(TasksToDo);
