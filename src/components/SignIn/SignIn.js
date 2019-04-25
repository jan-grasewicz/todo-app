import React, { Component } from "react";
import { withAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

class SignIn extends Component {
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

    const { signIn } = this.props.authContext;
    signIn(this.state.email, this.state.password)
      .then(() => {
        this.setState({
          error: null,
          success: "Signed In",
          email: "",
          password: ""
        });
      })
      .catch(error => this.setState({ success: null, error: error }));
  };

  render() {
    const { email, password, success, error } = this.state;
    return (
      <>
        {error && <p style={{ color: "red" }}>{error.message}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <form>
          <input
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="e-mail"
          />
          <input
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange}
            placeholder="password"
          />
          <button onClick={this.handleSubmit}>Sign In</button>
        </form>
        <p>
          Don't have an account?
          <Link to="/signup"> Sign Up.</Link>
        </p>
      </>
    );
  }
}
export default withAuth(SignIn);
