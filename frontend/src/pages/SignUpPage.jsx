import React from "react";
import { userAuthStore } from "../store/useAuthStore";

const SignUpPage = () => {
  const { authUser, login } = userAuthStore();
  return <div>SignUpPage</div>;
};

export default SignUpPage;
