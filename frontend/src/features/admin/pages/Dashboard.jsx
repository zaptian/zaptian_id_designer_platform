import React, { useEffect, useState } from "react";
import {
  Users,
  CreditCard,
  TrendingUp,
  UserMinus,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { api } from "@/lib/api";
import { cn } from "@/lib/utils";

const StatCard = ({ title, value, change, icon: Icon, trend }) => (
  <div className="bg-[#111827] p-6 rounded-2xl border border-white/5 shadow-xl hover:border-white/10 transition-all group">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-blue-600/10 rounded-xl group-hover:bg-blue-600/20 transition-colors">
        <Icon className="h-6 w-6 text-blue-500" />
      </div>
      <div
        className={cn(
          "flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold",
          trend === "up"
            ? "bg-emerald-500/10 text-emerald-500"
            : "bg-red-500/10 text-red-500",
        )}
      >
        {trend === "up" ? (
          <ArrowUpRight className="h-3 w-3" />
        ) : (
          <ArrowDownRight className="h-3 w-3" />
        )}
        {change}
      </div>
    </div>
    <div className="space-y-1">
      <p className="text-gray-400 text-sm font-medium">{title}</p>
      <p className="text-2xl font-bold text-white tracking-tight">{value}</p>
    </div>
  </div>
);

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    api.get("/admin/stats").then((res) => {
      setStats(res?.data || res);
    }).catch(err => console.error("Error fetching stats:", err));
  }, []);

  if (!stats) return <div className="text-white">Loading dashboard...</div>;

  return (
    <div className="space-y-8 animate-fadeInSimple">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Overview
          </h1>
          <p className="text-gray-400 mt-1">Real-time performance metrics</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-sm font-medium rounded-xl border border-white/5 transition-all">
            Download CSV
          </button>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl shadow-lg shadow-blue-600/20 transition-all">
            Generate Report
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value={stats?.totalUsers?.toLocaleString() ?? "0"}
          change="+12.5%"
          trend="up"
          icon={Users}
        />
        <StatCard
          title="Active Subs"
          value={stats?.activeSubscriptions?.toLocaleString() ?? "0"}
          change="+8.2%"
          trend="up"
          icon={Activity}
        />
        <StatCard
          title="MRR"
          value={`$${stats?.mrr?.toLocaleString() ?? "0"}`}
          change="+15.4%"
          trend="up"
          icon={TrendingUp}
        />
        <StatCard
          title="Churn Rate"
          value={stats?.churnRate ?? "0%"}
          change="-0.4%"
          trend="down"
          icon={UserMinus}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Revenue Trend Area Chart */}
        <div className="bg-[#111827] p-8 rounded-2xl border border-white/5 shadow-xl">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-bold text-white">Revenue Growth</h3>
            <select className="bg-white/5 border border-white/10 text-xs text-gray-400 rounded-lg px-2 py-1 outline-none">
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={stats.revenueTrend}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#1f2937"
                />
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#9ca3af", fontSize: 12 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#9ca3af", fontSize: 12 }}
                  tickFormatter={(val) => `$${val / 1000}k`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1f2937",
                    border: "none",
                    borderRadius: "12px",
                    color: "#fff",
                  }}
                  itemStyle={{ color: "#3b82f6" }}
                />
                <Area
                  type="monotone"
                  dataKey="amount"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorRev)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Feature Usage or other metric */}
        <div className="bg-[#111827] p-8 rounded-2xl border border-white/5 shadow-xl">
          <h3 className="text-lg font-bold text-white mb-8">
            System Conversion
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stats.revenueTrend}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#1f2937"
                />
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#9ca3af", fontSize: 12 }}
                  dy={10}
                />
                <YAxis axisLine={false} tickLine={false} tick={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1f2937",
                    border: "none",
                    borderRadius: "12px",
                    color: "#fff",
                  }}
                />
                <Bar
                  dataKey="amount"
                  fill="#3b82f6"
                  radius={[6, 6, 0, 0]}
                  barSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
