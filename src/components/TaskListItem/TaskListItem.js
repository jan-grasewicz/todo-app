import React, { Component } from "react";

class TaskListItem extends Component {
  render() {
    const { name } = this.props.task;
    return (
      <li>
        <p>{name}</p>
      </li>
    );
  }
}
export default TaskListItem;
