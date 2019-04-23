import React, { Component } from "react";
import { withAuth } from "../../contexts/AuthContext";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    success: null,
    error: null
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { signUp } = this.props.authContext;
    signUp(this.state.email, this.state.password)
      .then(() => {
        this.setState({
          error: null,
          success: "Account created",
          email: "",
          password: ""
        });
      })
      .catch(error => this.setState({ success: null, error: error }));
  };

  render() {
    return (
      <>
        {this.state.error && (
          <p style={{ color: "red" }}>{this.state.error.message}</p>
        )}
        {this.state.success && (
          <p style={{ color: "green" }}>{this.state.success}</p>
        )}
        <form>
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="e-mail"
          />
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="password"
          />
          <button onClick={this.handleSubmit}>Sign Up</button>
        </form>
      </>
    );
  }
}
export default withAuth(SignUp);
