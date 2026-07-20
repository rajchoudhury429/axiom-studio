"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative inline-flex items-center justify-center rounded-full p-2 transition-colors duration-300",
        "text-muted-foreground hover:text-foreground hover:bg-secondary",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        className,
      )}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <span className="relative h-5 w-5">
        <Sun
          className={cn(
            "absolute inset-0 h-5 w-5 transition-all duration-300",
            theme === "dark"
              ? "opacity-0 rotate-90 scale-0"
              : "opacity-100 rotate-0 scale-100",
          )}
        />
        <Moon
          className={cn(
            "absolute inset-0 h-5 w-5 transition-all duration-300",
            theme === "dark"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-90 scale-0",
          )}
        />
      </span>
    </button>
  );
}
