import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function DashboardCard({
  title,
  value,
  percentage,
  subtitle,
  icon,
  trend = "up",
  color = "text-green-500",
  bg = "bg-white"
}) {
  return (
    <div className={`p-4 rounded-xl shadow-sm ${bg} transition-colors`}>
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm font-semibold text-gray-500">{title}</div>
        <div className="text-2xl">{icon}</div>
      </div>
      <div className="text-2xl font-bold text-gray-800 dark:text-white">{value}</div>
      <div className="flex items-center text-sm mt-1">
        {trend === "up" ? (
          <ArrowUpRight className={`w-4 h-4 mr-1 ${color}`} />
        ) : (
          <ArrowDownRight className={`w-4 h-4 mr-1 ${color}`} />
        )}
        <span className={`${color} font-semibold`}>{percentage}</span>
        <span className="ml-1 text-gray-500 dark:text-gray-400">{subtitle}</span>
      </div>
    </div>
  );
}
