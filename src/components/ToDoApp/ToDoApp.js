import React, { Component } from "react";
import AddTaskForm from "../AddTaskForm";
import Header from "../Header";
import Tasks from "../Tasks";
// import Auth from "../Auth";
// import { Redirect } from "react-router-dom";

class ToDoApp extends Component {
  render() {
    return (
      <div>
        {/* <Auth
          cover={
            () => <p>Sign in</p>
            // () => <Redirect path to="/signin" />
          }
        > */}
          <Header />
          <AddTaskForm />
          <Tasks />
        {/* </Auth> */}
      </div>
    );
  }
}
export default ToDoApp;
