"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Cookies from "js-cookie"; // Import js-cookie
import { useRouter } from "next/navigation"; // Import useRouter
import { ThemeProvider } from "@/app/context/ThemeContext";
import { signOut } from "next-auth/react";

export default function TopNavBar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is logged in on component mount
  useEffect(() => {
    const token = Cookies.get("authToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    signOut({ callbackUrl: "/login" });
    Cookies.remove("authToken"); // remove token when logging out
    setIsLoggedIn(false);
  };

  return (
    <div className="bg-white">
      <ThemeProvider>
        <header className="relative bg-white">
          <nav
            aria-label="Top"
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          >
            <div className="border-b border-gray-200">
              <div className="flex h-16 items-center">
                {/* Mobile menu toggle */}
                <button
                  type="button"
                  onClick={() => setOpen(!open)}
                  className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                >
                  <span className="sr-only">Open menu</span>
                </button>

                {/* Logo */}
                <div className="ml-4 flex lg:ml-0">
                  <Link href="/">
                    <span className="sr-only">Your Company</span>
                    <img
                      alt=""
                      src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                      className="h-8 w-auto"
                    />
                  </Link>
                </div>

                {/* Nav Links */}
                <div className="text-gray-600 ml-auto flex items-center gap-5">
                  <Link
                    href="/"
                    className="text-zinc-600 underline-offset-[4px]"
                  >
                    Home
                  </Link>
                  <Link
                    href="/dashboard"
                    className="text-zinc-600 underline-offset-[4px]"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/learning"
                    className="text-zinc-600 underline-offset-[4px]"
                  >
                    Learning
                  </Link>

                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    {!isLoggedIn ? (
                      <>
                        <Link
                          href="/login"
                          className="text-md font-medium text-gray-700 hover:text-cyan-600"
                        >
                          Login
                        </Link>
                        <Link
                          href="/register"
                          className="text-md font-medium text-gray-700 hover:text-cyan-600"
                        >
                          Create account
                        </Link>
                      </>
                    ) : (
                      <button
                        onClick={handleLogout}
                        className="text-md font-medium text-gray-700 hover:text-red-600"
                      >
                        Logout
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </ThemeProvider>
    </div>
  );
}
