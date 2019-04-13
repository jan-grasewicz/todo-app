import React, { Component } from "react";
import "./index.css";

class TaskListItem extends Component {
  render() {
    const { id, name } = this.props.task;
    return (
      <li key={id}>
        <p>{name}</p>
      </li>
    );
  }
}
export default TaskListItem;
