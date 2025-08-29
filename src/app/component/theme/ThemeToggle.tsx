"use client";

import { useTheme } from "@/app/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 dark:text-white"
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
