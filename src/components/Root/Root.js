import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ToDoApp from "../ToDoApp";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Account from "../Account";

class Root extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={ToDoApp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/account" component={Account} />
      </Router>
    );
  }
}
export default Root;
