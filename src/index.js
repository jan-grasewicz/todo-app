import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ToDoApp from "./ToDoApp";
import * as serviceWorker from "./serviceWorker";
import TasksContextProvider from "./contexts/TasksContext";

ReactDOM.render(
  <TasksContextProvider>
    <ToDoApp />
  </TasksContextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
