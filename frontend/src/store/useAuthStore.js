import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  authUser: null,
  isCheckingAuth: false,
  isSigninUp: false,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
    } catch (error) {
      console.log("Error in authCheck:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    try {
      set({ isSigninUp: true });
      const res = await axiosInstance.post("/auth/signup", data);
      
      set({ authUser: res.data });
      console.log(data)
      toast.success("Account created successfully!");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isSigninUp: false });
    }
  },
}));
