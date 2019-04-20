import React, { Component } from "react";
import AddTaskForm from "../AddTaskForm";
import TasksToDo from "../TasksToDo";
import TasksInProgress from "../TasksInProgess";
import TasksDone from "../TasksDone";
import Header from "../Header";

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
