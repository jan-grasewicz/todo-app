import React, { Component } from "react";
import TaskListItem from "../TaskListItem";

import { withTasks } from "../../contexts/TasksContext";

class TasksDone extends Component {
  render() {
    const { getTasksDone } = this.props.tasksContext;

    return (
      <>
        <h2>Tasks completed</h2>
        <ul>
          {getTasksDone().map(task => (
            <TaskListItem task={task} key={task.id} />
          ))}
        </ul>
      </>
    );
  }
}
export default withTasks(TasksDone);
