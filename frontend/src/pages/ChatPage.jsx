import React from "react";
import { userAuthStore } from "../store/useAuthStore";

const ChatPage = () => {
  const { authUser, login } = userAuthStore();
  return <div>ChatPage</div>;
};

export default ChatPage;
