import React, { Component } from "react";
import { withAuth } from "../../contexts/AuthContext";
import { Link, Redirect } from "react-router-dom";

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
      .then(() => <Redirect to="/" />)
      .catch(error => this.setState({ success: null, error: error }));
  };

  render() {
    const { email, password, success, error } = this.state;

    // if (success) {
    //   return <Redirect to="/" />;
    // }
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
          <button onClick={this.handleSubmit}>Sign Up</button>
        </form>
        <p>
          Already have an account?
          <Link to="/signin"> Sign In.</Link>
        </p>
      </>
    );
  }
}
export default withAuth(SignUp);
