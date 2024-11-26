import { create } from "zustand";
import axios from "axios";

axios.defaults.withCredentials = true; // Enable cookies

export const useAuthStore = create((set) => ({
  user: typeof window !== "undefined" && localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  isAuthenticated: typeof window !== "undefined" && localStorage.getItem("user") ? true : false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,
  message: null,

  // Logout
  logout: async () => {
    set({ isLoading: true, error: null });
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URI_AUTH}/logout`);
      localStorage.removeItem("user"); // Clear user data from localStorage
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
  },

  // Sign up
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
      localStorage.setItem("user", JSON.stringify(response.data.user)); // Save user data to localStorage
    } catch (error) {
      set({
        error: error.response?.data?.message || "Error signing up",
        isLoading: false,
      });
      throw error;
    }
  },

  // Verify email
  verifyEmail: async (code) => {
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
      localStorage.setItem("user", JSON.stringify(response.data.user)); // Save user data to localStorage
      return response.data;
    } catch (error) {
      set({ error: error.response?.data?.message || "Error verifying email", isLoading: false });
      throw error;
    }
  },

  // Check if user is authenticated
  checkAuth: async () => {
    set({ isCheckingAuth: true, error: null });
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI_AUTH}/check-auth`);
      set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false });
      localStorage.setItem("user", JSON.stringify(response.data.user)); // Save user data to localStorage
    } catch (error) {
      set({ error: null, isCheckingAuth: false, isAuthenticated: false });
    }
  },

  // Login
  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URI_AUTH}/login`, { email, password });
      set({
        isAuthenticated: true,
        user: response.data.user,
        error: null,
        isLoading: false,
      });
      localStorage.setItem("user", JSON.stringify(response.data.user)); // Save user data to localStorage
    } catch (error) {
      set({ error: error.response?.data?.message || "Error logging in", isLoading: false });
      throw error;
    }
  },

  // Forgot password
  forgotPassword: async (email) => {
    set({ isLoading: true, error: null, message: null });
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URI_AUTH}/forgot-password`, { email });
      set({ message: response.data.message, isLoading: false });
    } catch (error) {
      set({
        isLoading: false,
        error: error.response?.data?.message || "Error sending password reset email",
      });
      throw error;
    }
  },

  // Reset password
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
      set({
        isLoading: false,
        error: error.response.data.message || "Error resetting password",
      });
      throw error;
    }
  },
}));
