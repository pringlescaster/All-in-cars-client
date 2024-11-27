"use client";

import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";

export function useAuth() {
  const { checkAuthOnLoad, isAuthenticated, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuthOnLoad(); // Check auth state when the component mounts
  }, [checkAuthOnLoad]);

  return { isCheckingAuth, isAuthenticated };
}
