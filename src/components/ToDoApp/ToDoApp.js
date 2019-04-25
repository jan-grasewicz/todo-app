import React, { Component } from "react";
import AddTaskForm from "../AddTaskForm";
import Header from "../Header";
import Tasks from "../Tasks";

class ToDoApp extends Component {
  render() {
    return (
      <div>
        <Header />
        <AddTaskForm />
        <Tasks />
      </div>
    );
  }
}
export default ToDoApp;
