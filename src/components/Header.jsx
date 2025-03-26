import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Header({ onToggleSidebar, onToggleDark }) {
  const { i18n } = useTranslation();

  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className="flex items-center gap-3">
        <button onClick={onToggleSidebar} className="text-xl">
          <FaBars />
        </button>
      </div>
      <div className="flex items-center gap-4">
        <select
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          className="bg-transparent border rounded p-1 text-sm dark:bg-gray-700"
        >
          <option value="pt">PT</option>
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
        <button onClick={onToggleDark}>
          <FaMoon className="hidden dark:inline" />
          <FaSun className="inline dark:hidden" />
        </button>
      </div>
    </header>
  );
}
