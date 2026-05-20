"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        group relative inline-flex items-center justify-center
        overflow-hidden
        rounded-full border border-black/5 dark:border-white/10
        bg-white/80 dark:bg-[#0F172A]/80
        backdrop-blur-xl
        transition-all duration-300
        hover:border-[#4FD1C5]/40
        hover:shadow-[0_0_20px_rgba(109,94,245,0.25)]
        active:scale-95

        /* responsive sizing */
        px-2 sm:px-3 md:px-3
        py-1.5
      "
    >
      {/* Glow */}
      <div
        className="
          absolute inset-0 opacity-0 transition-opacity duration-300
          group-hover:opacity-100
          bg-gradient-to-r from-[#6D5EF5]/10 to-[#4FD1C5]/10
        "
      />

      {/* Icon container */}
      <div
        className="
          relative flex items-center justify-center
          h-7 w-7 sm:h-7 sm:w-7 md:h-7 md:w-7
          rounded-full
          bg-gradient-to-br from-[#6D5EF5] to-[#4FD1C5]
          text-white shadow-md
        "
      >
        {isDark ? <Sun size={14} /> : <Moon size={14} />}
      </div>

      {/* TEXT (hidden on mobile) */}
      <span
        className="
          relative ml-2 hidden sm:inline
          text-xs font-semibold
          text-gray-700 dark:text-gray-200
        "
      >
        {isDark ? "Light" : "Dark"}
      </span>
    </button>
  );
}