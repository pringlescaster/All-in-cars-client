"use client "

// hooks/useAuth.js
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../store/authStore";


export function useAuth() {
  const { checkAuth, isAuthenticated, isCheckingAuth } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    checkAuth(); // Initiate the auth check on mount
  }, [checkAuth]);

  useEffect(() => {
    if (!isCheckingAuth && !isAuthenticated) {
      router.push("/sign-in"); // Redirect to login if not authenticated
    }
  }, [isCheckingAuth, isAuthenticated, router]);

  return { isCheckingAuth, isAuthenticated };
}
