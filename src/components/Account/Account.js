import React, { Component } from "react";
import { withAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

class Account extends Component {
  render() {
    const { user, signOut } = this.props.authContext;

    return (
      <>
        <h1>Account</h1>
        {user && (
          <p>
            {user.email}
            <button onClick={signOut}>Sign Out</button>
          </p>
        )}
        <p>
          Go to<Link to="/"> App</Link>
        </p>
      </>
    );
  }
}
export default withAuth(Account);
