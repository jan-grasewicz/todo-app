import React, { Component } from "react";

import { withTasks } from "../../contexts/TasksContext";

class TaskListItem extends Component {
  handleStatusChange = (id, status) =>
    this.props.tasksContext.changeTaskStatus(id, status);

  render() {
    const { title, id, status } = this.props.task;
    const statusBtnMsgArr= ['todo','inprogress','done','delete']
    return (
      <li>
        <p>{title}</p>
        <button onClick={() => this.handleStatusChange(id, status)}>
        
          {statusBtnMsgArr[statusBtnMsgArr.indexOf(status)+1]}
        </button>
      </li>
    );
  }
}
export default withTasks(TaskListItem);
