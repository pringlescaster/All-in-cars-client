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
  message: null,

  logout: () => set({ user: null }),

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
  },

  //check if user is authenticated

checkAuth: async () => {
  set({ isCheckingAuth: true, error: null});
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI_AUTH}/check-auth`);
    set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false})
    console.log('User:', response.data.user);
  } catch (error) {
    set({ error: null, isCheckingAuth: false, isAuthenticated: false })
  }
},

login: async (email, password) => {
  set({ isLoading: true, error: null });
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URI_AUTH}/login`, { email, password});
    set({
      isAuthenticated: true,
      user: response.data.user,
      error: null,
      isLoading: false,
    })

  } catch (error) {
    set({ error: error.response?.data?.message || "Error logging in", isLoading: false});
    throw error;
  }
},

forgotPassword: async (email) => {
  set({ isLoading: true, error: null, message: null});
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URI_AUTH}/forgot-password`, { email });
    set({ message: response.data.message, isLoading: false });
  } catch (error) {
    set({ isLoading: false,
      error: error.response?.data?.message || "Error sending password reset email",
    });
    throw error;
  }
},

resetPassword: async (token, password) => {
set({
  isLoading: true,
  error: null,
  message: null,
});
try {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URI_AUTH}/reset-password/${token}`, { password });
  set({ message: response.data.message, isLoading: false });
} catch (error) {
  set({isLoading: false,
    error: error.response.data.message || "Error resetting password",
   });
   throw error;
}
},

logout: async () => {
  set({ isLoading: true, error: null });
  try {
    await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URI_AUTH}/logout`);
    set({
      user: null,
      isAuthenticated: false,
      error: null,
      isLoading: false,
    });
  } catch (error) {
    set({
      error: error.response?.data?.message || "Error logging out",
      isLoading: false,
    });
    throw error;
  }
}

}));


