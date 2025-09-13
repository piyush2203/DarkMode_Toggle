import { useTheme } from "../Context/ThemeContext";


export default function Home() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`p-6 ${
        darkMode ? "bg-gray-800 text-white h-full" : "bg-white text-black h-full"
      }`}
    >
      <h2 className="text-2xl">Welcome to the Homepage</h2>
      <p>This section also changes theme.</p>
    </div>
  );
}
