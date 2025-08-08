"use client";
import React from "react";
import Link from "next/link";
import { useTheme } from "./contextprovider/page/ThemeProvider";

const HomePage: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-6 ${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      }`}
    >
      <h1 className="text-4xl font-bold mb-4">Welcome to Home Page</h1>
      <p className="text-md mb-3">Current Theme: {theme}</p>
      <button
        onClick={toggleTheme}
        className="bg-cyan-700 hover:bg-cyan-500 mb-3 text-white font-semibold py-2 px-2 rounded transition duration-300"
      >
        Toggle Theme
      </button>
      <Link href="/login" className="text-cyan-600 hover:text-cyan-500">
        Go to Login
      </Link>
    </div>
  );
};

export default HomePage;
