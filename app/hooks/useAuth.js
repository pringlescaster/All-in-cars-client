"use client";

import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";

export function useAuth() {
  const { checkAuth, isAuthenticated, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth(); // Check auth state when the component mounts
  }, [checkAuth]);

  return { isCheckingAuth, isAuthenticated };
}
