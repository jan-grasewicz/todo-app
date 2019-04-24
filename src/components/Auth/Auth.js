import React from "react";
import { withAuth } from "../../contexts/AuthContext";
const Auth = ({ cover, children },{user}) => {
  return user ? children : cover ? cover() : <p>Please Sign in.</p>;
};
export default withAuth(Auth);
