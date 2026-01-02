import { create } from "zustand";

export const userAuthStore = create((set) => ({
  authUser: { name: "john", _id: "123", age: 25 },
  isLoggedIn: false,

  login: () => {
    console.log("We just logged in");
    set({
      isLoggedIn: true,
    });
  },
}));
