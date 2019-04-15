import React, { Component } from "react";
import "./index.css";

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
