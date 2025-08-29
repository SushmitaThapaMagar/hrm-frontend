"use client"; // Required in Next.js for stateful components

import React, { createContext, useContext, useState, ReactNode } from "react";

// 1. Define what context will store
type ThemeContextType = {
  theme: "light" | "dark"; // Allowed theme values
  toggleTheme: () => void; // Function to switch theme "light" and "dark"
};

// 2. Create context (empty initially)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. Provider component (wraps whole app)
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Function to toggle between light & dark
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    //</ThemeContext.Provider> meaning provide data (state + functions)
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Apply Tailwind classes based on theme */}
      <div
        className={
          theme === "light" ? "bg-white text-black" : "bg-black text-white"
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

// 4. Custom hook (for easy usage in components)
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
}
