import React, { Component } from "react";

import { withTasks } from "../../contexts/TasksContext";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    // const {} = this.props.tasksContext;

    return (
      <>
        <p>
          todo app / task title / 
          <Link to="/account">Account</Link>
        </p>
      </>
    );
  }
}
export default withTasks(Header);
