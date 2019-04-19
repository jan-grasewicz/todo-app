import React, { Component } from "react";

class TaskListItem extends Component {
  render() {
    const { title } = this.props.task;
    return (
      <li>
        <p>{title}</p>
      </li>
    );
  }
}
export default TaskListItem;
