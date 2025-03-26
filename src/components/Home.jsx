import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";

export default function Home() {
  const [collapsed, setCollapsed] = useState(true);

  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("dark-mode");
    return saved === null
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : saved === "true";
  });

  useEffect(() => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("dark-mode", dark);
  }, [dark]);

  return (
    <div>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors">
        <Sidebar collapsed={collapsed} />
        <div className="flex-1 flex flex-col">
          <Header
            onToggleSidebar={() => setCollapsed(!collapsed)}
            onToggleDark={() => setDark(!dark)}
          />
          <Content />
        </div>
      </div>
    </div>
  );
}
