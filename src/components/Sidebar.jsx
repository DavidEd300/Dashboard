import { useTranslation } from "react-i18next";
import { FaHome, FaCog, FaSignOutAlt } from "react-icons/fa";
import logoFull from "../assets/logo-full.png";   // logo horizontal
import logoIcon from "../assets/logo-icon.png";   // ícone da logo

export default function Sidebar({ collapsed }) {
  const { t } = useTranslation();

  return (
    <div
      className={`transition-all duration-300 h-full shadow-lg 
      bg-white dark:bg-gray-800 text-gray-800 dark:text-white 
      border-r border-gray-200 dark:border-gray-700
      ${collapsed ? "w-16" : "w-60"}`}
    >
      {/* Logo */}
      <div className="w-full h-16 border-b border-gray-200 dark:border-gray-700 flex items-center justify-center px-2">
        <img
          src={collapsed ? logoIcon : logoFull}
          alt="Logo"
          className="object-contain h-10 w-auto transition-all duration-300"
        />
      </div>

      {/* Navegação */}
      <nav className="space-y-4 p-4">
        <a href="#" className="flex items-center gap-3 hover:text-blue-500">
          <FaHome />
          {!collapsed && t("dashboard")}
        </a>

        <a href="#" className="flex items-center gap-3 hover:text-blue-500">
          <FaCog />
          {!collapsed && t("settings")}
        </a>

        <a href="#" className="flex items-center gap-3 hover:text-blue-500 mt-20">
          <FaSignOutAlt />
          {!collapsed && t("logout")}
        </a>
      </nav>
    </div>
  );
}
