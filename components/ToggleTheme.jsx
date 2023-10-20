import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [enabled, setEnabled] = useState(false);

  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const initialTheme = localStorage.getItem("darkMode");
      return initialTheme ? initialTheme : "light";
    } else {
      return "light";
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
        setEnabled(true);
      } else {
        document.documentElement.classList.remove("dark");
        setEnabled(false);
      }

      localStorage.setItem("darkMode", theme);
    }
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <label class="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" class="sr-only peer" />
      <div
        onClick={() => handleThemeToggle()}
        class="group peer ring-0 bg-light-gray rounded-full outline-none duration-300 after:duration-300 w-12 h-6 
        shadow-md peer-checked:bg-light-app peer-focus:outline-none after:content-['🌑'] after:rounded-full
        after:absolute after:outline-none after:h-16 after:w-16 after:top-[-20px] after:left-[-16px] after:-rotate-180
        after:flex after:justify-center after:items-center peer-checked:after:translate-x-4 peer-checked:after:content-['🌞']
        peer-hover:after:scale-95 peer-checked:after:rotate-0"
      ></div>
    </label>
  );
};

export default ThemeToggle;
