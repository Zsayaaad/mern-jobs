import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    // if (typeof window === "undefined") return false;

    const savedTheme = localStorage.getItem("theme") === "dark";

    return savedTheme
      ? savedTheme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", isDark);
    root.classList.toggle("light", !isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="cursor-pointer p-2 hover:bg-surface-container border-2 border-transparent hover:border-on-surface transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center"
      aria-label="Toggle theme"
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <span className="material-symbols-outlined">
        {isDark ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
};

export default ThemeToggle;
