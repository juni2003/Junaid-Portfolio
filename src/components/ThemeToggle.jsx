import { Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (storedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, []);

  // Check if user has already dismissed the hint
  useEffect(() => {
    const hintDismissed = localStorage.getItem('themeHintDismissed');
    if (!hintDismissed) {
      // Show hint after a small delay when component mounts
      const timer = setTimeout(() => {
        setShowHint(true);
      }, 2000); // Show after 2 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
    // Dismiss hint when theme is toggled
    if (showHint) {
      dismissHint();
    }
  };

  // Handle hint dismissal
  const dismissHint = () => {
    setShowHint(false);
    // Store in localStorage so it never shows again
    localStorage.setItem('themeHintDismissed', 'true');
  };

  return (
    <div className="fixed top-15 right-9 sm:top-5 sm:right-5 z-50">
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={cn(
          "p-2 rounded-full transition-colors duration-300",
          "focus:outline-none"
        )}
      >
        {isDarkMode ? (
          <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
          <Moon className="h-6 w-6 text-gray-700" />
        )}
      </button>

      {/* Hint Tooltip */}
      {showHint && (
        <div className="absolute top-full right-0 mt-3 z-50">
          {/* Arrow */}
          <div className="absolute -top-2 right-6">
            <div className="w-0 h-0 border-l-6 border-r-6 border-b-6 border-l-transparent border-r-transparent border-b-gray-800"></div>
          </div>
          
          {/* Tooltip */}
          <div className="bg-gray-800 text-white p-4 rounded-lg shadow-xl w-48 animate-in fade-in duration-300">
            <div className="flex justify-between items-start mb-3">
              <p className="text-sm font-medium pr-2">Switch Theme</p>
              <button onClick={dismissHint} className="text-gray-400 hover:text-white p-1">
                <X size={14} />
              </button>
            </div>
            <button
              onClick={dismissHint}
              className="bg-primary hover:bg-primary/80 text-primary-foreground px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 w-full"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
