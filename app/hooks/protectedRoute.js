"use client"

import React from "react";
import { useAuth } from "./useAuth";
import { useRouter } from "next/navigation";


export default function ProtectedRoute({ children }) {
    const { isCheckingAuth, isAuthenticated } = useAuth();
    const router = useRouter();
  
    if (isCheckingAuth) {
      return <p>Loading...</p>;
    }
  
    if (!isAuthenticated) {
      router.push("/sign-in");
      return null;
    }
  
    return children;
  }