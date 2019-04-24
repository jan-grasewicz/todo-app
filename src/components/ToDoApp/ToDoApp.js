import React, { Component } from "react";
import AddTaskForm from "../AddTaskForm";
import Header from "../Header";
import Tasks from "../Tasks";
import Auth from "../Auth";

class ToDoApp extends Component {
  render() {
    return (
      <div>
        <Auth cover={() => <p>Sign in</p>}>
          <Header />
          <AddTaskForm />
          <Tasks />
        </Auth>
      </div>
    );
  }
}
export default ToDoApp;
