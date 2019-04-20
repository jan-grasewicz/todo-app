import React, { Component } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TasksToDo from "./components/TasksToDo";
import TasksInProgress from "./components/TasksInProgess";
import TasksDone from "./components/TasksDone";
import Header from "./components/Header";

import "./ToDoApp.css";

class ToDoApp extends Component {
  render() {
    return (
      <div>
        <Header />
        <AddTaskForm />
        <TasksToDo />
        <TasksInProgress />
        <TasksDone />
      </div>
    );
  }
}
export default ToDoApp;
