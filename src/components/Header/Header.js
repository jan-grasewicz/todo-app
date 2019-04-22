import React, { Component } from "react";

import { withTasks } from "../../contexts/TasksContext";

class Header extends Component {
  render() {
    // const {} = this.props.tasksContext;

    return (
      <>
        <p>todo app / task title / account info</p>
      </>
    );
  }
}
export default withTasks(Header);
