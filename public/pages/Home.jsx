import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import DashboardCard from "./DashboardCard";
import {Users, UserPlus, DollarSign, CreditCard,} from "lucide-react";

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
          <main className="flex-1 p-6">
            <h1 className="text-2xl font-bold mb-6">Bem-vindo ao Dashboard</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
              <DashboardCard
                title="Lorem ipsum"
                value="20,000"
                percentage="+5,000"
                subtitle="últimos 30 dias"
                icon={<Users className="text-blue-500" />}
                trend="up"
                color="text-green-500"
              />
              <DashboardCard
                title="Lorem ipsum"
                value="15,000"
                percentage="-800"
                subtitle="últimos 30 dias"
                icon={<UserPlus className="text-purple-500" />}
                trend="down"
                color="text-red-500"
              />
              <DashboardCard
                title="Lorem ipsum"
                value="$42,000"
                percentage="+$20,000"
                subtitle="últimos 30 dias"
                icon={<DollarSign className="text-teal-500" />}
                trend="up"
                color="text-green-500"
              />
              <DashboardCard
                title="Lorem ipsum"
                value="$30,000"
                percentage="+$5,000"
                subtitle="últimos 30 dias"
                icon={<CreditCard className="text-red-500" />}
                trend="up"
                color="text-green-500"
              />
            </div>

            <section className="mb-6">
              <h2 className="text-x1 fibt-semibold mb-4">Equipamentos Favoritos</h2>
              <div className="bg-white dark:bg-gray-800 rounded-1g shadow p-6">
                <p className="text-gray-400">Equipamentos</p>
              </div>
            </section>

            <section className="mb-6">
              <h2 className="text-x1 fibt-semibold mb-4">Equipamentos</h2>
              <div className="bg-white dark:bg-gray-800 rounded-1g shadow p-6">
                <p className="text-gray-400">Equipamentos</p>
              </div>
            </section>
            
            <section className="mb-6">
              <h2 className="text-x1 fibt-semibold mb-4">Equipamentos Favoritos</h2>
              <div className="bg-white dark:bg-gray-800 rounded-1g shadow p-6">
                <p className="text-gray-400">Equipamentos</p>
              </div>
            </section>

            <section className="mb-6">
              <h2 className="text-x1 fibt-semibold mb-4">Equipamentos</h2>
              <div className="bg-white dark:bg-gray-800 rounded-1g shadow p-6">
                <p className="text-gray-400">Equipamentos</p>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
