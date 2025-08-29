"use client";

import { useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("authToken");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  // Optionally, you can add a loading spinner or empty div while redirecting
  return <>{children}</>;
}
