import { useTranslation } from "react-i18next";
import { FaHome, FaCog, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logoFull from "../src/assets/logo-full.png";
import logoIcon from "../src/assets/logo-icon.ico";

export default function Sidebar({ collapsed }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogout = () =>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }  

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
          className={`transition-all duration-300 ${
            collapsed ? "w-8 h-8" : "w-32 h-auto"
          }`}
        />
      </div>

      {/* Navegação */}
      <nav className="space-y-4 p-4">
        <a href="#" className="flex items-center gap-3 hover:text-blue-500">
          <FaHome />
          {!collapsed && t('dashboard')}
        </a>

        <a href="#" className="flex items-center gap-3 hover:text-blue-500">
          <FaCog />
          {!collapsed && t('settings')}
        </a>
        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 hover:text-red-500 mt20 texto-left w-full"
        >
          <FaSignOutAlt />
          {!collapsed &&t("logout")}
        </button>  
      </nav>
    </div>
  );
}
