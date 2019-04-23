import React, { Component } from "react";
import { withAuth } from "../../contexts/AuthContext";

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
      </>
    );
  }
}
export default withAuth(Account);
