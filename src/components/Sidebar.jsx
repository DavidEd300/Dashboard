import { useTranslation } from "react-i18next";
import { FaHome, FaCog, FaSignOutAlt } from "react-icons/fa";

export default function Sidebar({ collapsed }) {
  const { t } = useTranslation();

  return (
    <div className={`transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg h-full ${collapsed ? "w-16" : "w-60"}`}>
      <div className="flex items-center justify-between p-4">
        {!collapsed && <h1 className="font-bold text-lg">Logo</h1>}
      </div>

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
