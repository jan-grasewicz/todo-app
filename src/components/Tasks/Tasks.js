import React, { Component } from "react";
import TasksToDo from "../TasksToDo";
import TasksInProgress from "../TasksInProgess";
import TasksDone from "../TasksDone";

class Tasks extends Component {
  render() {
    return (
      <>
        <TasksToDo />
        <TasksInProgress />
        <TasksDone />
      </>
    );
  }
}
export default Tasks;
