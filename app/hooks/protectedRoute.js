"use client"; 

import React, { useEffect } from "react";
import { useAuth } from "./useAuth";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }) {
  const { isCheckingAuth, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isCheckingAuth && !isAuthenticated) {
      router.push("/sign-in");
    }
  }, [isCheckingAuth, isAuthenticated, router]);

  if (isCheckingAuth) {
    return <p>Loading...</p>; // Show loading state while checking authentication
  }

  if (!isAuthenticated) {
    return null; // Prevent rendering content while redirecting
  }

  return <>{children}</>; // Render the children components if authenticated
}
