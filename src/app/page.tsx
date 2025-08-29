"use client";

import React from "react";
import ThemeToggle from "./component/theme/ThemeToggle";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50transition-colors">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-green-700">
        Theme Provider Example
      </h1>

      <ThemeToggle />
      <ToastContainer position="top-center" autoClose={2000} />

      <br />
      <br />

      {/* to fetch the data from the API */}

      <div className="flex justify-center space-x-6 mt-1">
        <Link
          href="/fetch-example"
          className="px-5 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          Example with Fetch API
        </Link>

        <Link
          href="/axios-example"
          className="px-4 py-2 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          Example with Axios
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
