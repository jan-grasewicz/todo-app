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

  isUserSigned = user =>
    this.setState({ isAuthenticated: user === null ? false : true });

  componentDidMount() {
    this.unsubscribe = this.props.authContext.fetchSignedUserData(user =>
      this.isUserSigned(user)
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
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
            isAuthenticated ? <Redirect to="/" /> : <SignIn />
          }
        />
        <Route
          path="/signup"
          render={() =>
            isAuthenticated ? <Redirect to="/" /> : <SignUp />
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
