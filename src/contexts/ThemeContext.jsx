import React, { createContext, useContext, useState, useEffect } from "react";

// 1. Create the context with a default value
const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {}, // Default empty function
});

// 2. Create the provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(() => {
    // Check for saved theme in localStorage, or system preference, or default to 'light'
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    // Remove the opposite class and add the current one
    const oldTheme = theme === "dark" ? "light" : "dark";
    root.classList.remove(oldTheme);
    root.classList.add(theme);

    // Save the user's preference
    localStorage.setItem("theme", theme);
  }, [theme]);

  // The function to pass down to consumers of the context
  const setTheme = (newTheme) => {
    setThemeState(newTheme);
  };

  // The value object now correctly includes both theme and setTheme
  const value = { theme, setTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

// 3. Create the custom hook that components will use to access the context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
