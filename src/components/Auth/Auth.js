// import React, { Component } from "react";
// import { withAuth } from "../../contexts/AuthContext";

// class Auth extends Component {
//   render() {
//     const { children, cover, authContext:{user}} = this.props;
//     return user ? children : cover ? cover() : <p>Please Sign in.</p>;
//   }
// }
// export default withAuth(Auth);



// import React, { useContext } from "react";
// import { AuthContext } from "../../contexts/AuthContext";

// const Auth = ({ cover, children }) => {
//   const { user } = useContext(AuthContext);
//   return user ? children : cover ? cover() : <p>Please Sign in.</p>;
// };
// export default Auth;



import React from "react";
import { withAuth } from "../../contexts/AuthContext";
// (props,context) - destructured
const Auth = ({ cover, children },{user}) => {
  return user ? children : cover ? cover() : <p>Please Sign in.</p>;
};
export default withAuth(Auth);
