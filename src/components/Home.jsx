import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";

export default function Home() {
  const [dark, setDark] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [dark])

  return (
    <div className={`${dark ? "dark" : ""}`}>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors">
        <Sidebar collapsed={collapsed} />
        <div className="flex-1 flex flex-col">
          <Header 
            onToggleDark={() => setDark(!dark)} 
            onToggleSidebar={() => setCollapsed(!collapsed)} 
          />
          <Content />
        </div>
      </div>
    </div>
  );
}
