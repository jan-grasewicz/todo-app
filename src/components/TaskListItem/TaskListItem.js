import React, { Component } from "react";

import { withTasks } from "../../contexts/TasksContext";

class TaskListItem extends Component {
  handleStatusChange = (id, status) =>
    this.props.tasksContext.changeTaskStatus(id, status);

  render() {
    const { title, id, status } = this.props.task;
    const statusBtnMsg = {
      todo: "Start Task",
      inprogress: "End Task",
      done: "Delete Task"
    };
    return (
      <li>
        <p>{title}</p>
        <button onClick={() => this.handleStatusChange(id, status)}>
          {statusBtnMsg[status]}
        </button>
      </li>
    );
  }
}
export default withTasks(TaskListItem);
