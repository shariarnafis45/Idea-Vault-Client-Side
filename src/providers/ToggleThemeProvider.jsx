"use client";
import { ThemeProvider } from "next-themes";

const ToggleThemeProvider = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
};

export default ToggleThemeProvider;
