import React from "react";
import { userAuthStore } from "../store/useAuthStore";

const LoginPage = () => {
  const { authUser, login } = userAuthStore();
  return <div>LoginPage</div>;
};

export default LoginPage;
