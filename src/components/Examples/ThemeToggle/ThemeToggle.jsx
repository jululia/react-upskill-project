import { useState } from "react";
import "./styles.css"; // Import your CSS file

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`theme-container ${isDarkMode ? "dark" : "light"}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div className="content">
        <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
        <p>
          This is an example of a React functional component using state and
          hooks to toggle between dark and light themes.
        </p>
      </div>
    </div>
  );
};