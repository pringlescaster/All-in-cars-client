// authStore.js
import { create } from "zustand";
import axios from "axios";

axios.defaults.withCredentials = true; //enable cookies

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,

  signup: async (email, password, name) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URI_AUTH}/signup`,
        { email, password, name }
      );
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error signing up",
        isLoading: false,
      });
      throw error;
    }
  },

  verifyEmail:  async (code) => {
    set({ isLoading: true, error: null });
    try {
        const response = await axios.post(
`${process.env.NEXT_PUBLIC_SERVER_URI_AUTH}/verify-email`, { code }
        );
        set({
          user: response.data.user,
          isAuthenticated: true,
          isLoading: false,
        });
        return response.data
        
    } catch (error) {
        set({ error: error.response?.data?.message || "Error verifying email", isLoading: false})
    throw error;
    }
  }
}));


