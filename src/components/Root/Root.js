import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import ToDoApp from "../ToDoApp";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Account from "../Account";
import { withAuth } from "../../contexts/AuthContext";

class Root extends Component {
  state = {
    isAuthenticated: false
  };

  isUserSigned = () =>
    this.props.authContext.user === null
      ? this.setState({ isAuthenticated: false })
      : this.setState({ isAuthenticated: true });

  componentDidMount(){
    this.isUserSigned()

  }

  render() {
    const { isAuthenticated } = this.state;
    return (
      <Router>
        <Route
          exact
          path="/"
          render={() =>
            isAuthenticated ? <ToDoApp /> : <Redirect to="/signin" />
          }
        />
        <Route
          path="/signin"
          render={() =>
            isAuthenticated ? <Redirect to="/account" /> : <SignIn />
          }
        />
        <Route
          path="/signup"
          render={() =>
            isAuthenticated ? <Redirect to="/account" /> : <SignUp />
          }
        />
        <Route
          path="/account"
          render={() =>
            isAuthenticated ? <Account /> : <Redirect to="/signin" />
          }
        />
      </Router>
    );
  }
}
export default withAuth(Root);
