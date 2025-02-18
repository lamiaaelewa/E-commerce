import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement; // html element

  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-8 h-8 rounded-full flex items-center justify-center bg-white shadow-md transition-all duration-300 absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      >
        <FaSun className="text-black text-xl" />
      </button>

      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-8 h-8 rounded-full flex items-center justify-center bg-black shadow-md transition-all duration-300"
      >
        <FaMoon className="text-white text-xl" />
      </button>
    </div>
  );
};

export default DarkMode;
