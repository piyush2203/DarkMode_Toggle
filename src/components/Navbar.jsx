// Navbar.js
import { useTheme } from "../Context/ThemeContext";

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav
      className={`p-4 flex justify-between items-center ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <h1 className="text-xl font-bold">My App</h1>
      <button
        onClick={toggleTheme}
        className="px-3 py-1 border rounded-lg"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
}
