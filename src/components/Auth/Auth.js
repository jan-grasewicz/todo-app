import React, { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";

const Auth = ({ cover, children }) => {
  const { user } = useContext(AuthContext);

  return user ? children : cover ? cover() : <p>Please Sign in.</p>;
};
export default Auth;

// import React from "react";

// import { withAuth } from "../../contexts/AuthContext";

// const Auth = ({ cover, children }) => {
//     const { user } = this.props.authContext;

//   return user ? children : cover ? cover() : <p>Please Sign in.</p>;
// };
// export default withAuth(Auth);
