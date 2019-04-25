import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/auth";

export const AuthContext = React.createContext({ user: null });
const { Provider, Consumer } = AuthContext;

export default class AuthContextProvider extends Component {
  state = {
    user: null,
    signUp: (email, password) =>
      firebase.auth().createUserWithEmailAndPassword(email, password),
    signIn: (email, password) =>
      firebase.auth().signInWithEmailAndPassword(email, password),
    signOut: () => firebase.auth().signOut(),
    fetchSignedUserData: callback =>
      firebase.auth().onAuthStateChanged(callback)
  };

  componentDidMount() {
    this.unsubscribe = this.state.fetchSignedUserData(user =>
      this.setState({ user })
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}
export const withAuth = Component => props => (
  <Consumer>{value => <Component {...props} authContext={value} />}</Consumer>
);
