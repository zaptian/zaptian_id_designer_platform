import React from "react";
import { Users, Activity, TrendingUp, AlertCircle, ArrowUpRight } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const StatCard = ({ title, value, change, icon: Icon, trend }) => (
  <div className="bg-light-card1 dark:bg-[#111827] p-6 rounded-2xl border border-light-border dark:border-white/5 shadow-xl hover:border-light-border-hover dark:hover:border-white/10 transition-all group">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-button-primary/10 rounded-xl group-hover:bg-button-primary/20 transition-colors">
        <Icon className="h-6 w-6 text-button-primary" />
      </div>
      {change && (
        <div
          className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold ${
            trend === "up"
              ? "bg-emerald-500/10 text-emerald-500"
              : "bg-red-500/10 text-red-500"
          }`}
        >
          {trend === "up" ? (
            <ArrowUpRight className="h-3 w-3" />
          ) : (
            <ArrowUpRight className="h-3 w-3 rotate-90" />
          )}
          {change}
        </div>
      )}
    </div>
    <div className="space-y-1">
      <p className="text-light-text2 dark:text-gray-400 text-sm font-medium">{title}</p>
      <p className="text-2xl font-bold text-light-text1 dark:text-white tracking-tight">{value}</p>
    </div>
  </div>
);

export default function UserDashboardOverview() {
  const { user } = useAuth();
  
  // Mock Data
  const stats = {
    idsCreated: 120,
    planLimit: 500,
    subscriptionStatus: "Active",
    daysRemaining: 12,
  };

  return (
    <div className="space-y-8 animate-fadeInSimple max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-light-text1 dark:text-white tracking-tight">
          Welcome back, {user?.firstName}! 👋
        </h1>
        <p className="text-light-text2 dark:text-gray-400 mt-1">Here is what's happening with your account today.</p>
      </div>

      {/* Quick Alert */}
      {stats.daysRemaining <= 15 && (
        <div className="flex items-center gap-3 bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 p-4 rounded-xl">
          <AlertCircle size={20} className="shrink-0" />
          <p className="text-sm font-medium">Your subscription will renew in {stats.daysRemaining} days. Make sure your payment method is up to date.</p>
        </div>
      )}

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Designs Generated"
          value={stats.idsCreated.toLocaleString()}
          change="+12 this week"
          trend="up"
          icon={Activity}
        />
        <StatCard
          title="Current Plan"
          value="Pro Tier"
          icon={TrendingUp}
        />
        <StatCard
          title="Usage Limits"
          value={`${stats.idsCreated} / ${stats.planLimit}`}
          icon={Users}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity Mock */}
        <div className="bg-light-card1 dark:bg-[#111827] p-8 rounded-2xl border border-light-border dark:border-white/5 shadow-xl">
          <h3 className="text-lg font-bold text-light-text1 dark:text-white mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 border border-light-border/50 dark:border-white/5 rounded-xl">
                <div>
                  <p className="text-sm font-bold text-light-text1 dark:text-white">ID Design Exported</p>
                  <p className="text-xs text-light-text2 dark:text-gray-400">Template: Corporate Standard</p>
                </div>
                <span className="text-xs text-light-text2 dark:text-gray-500 px-3 py-1 bg-light-bg dark:bg-black/20 rounded-md">2 hrs ago</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-light-card1 dark:bg-[#111827] p-8 rounded-2xl border border-light-border dark:border-white/5 shadow-xl flex flex-col justify-center gap-4">
          <h3 className="text-lg font-bold text-light-text1 dark:text-white">Quick Actions</h3>
          <button className="w-full py-4 bg-button-primary text-white rounded-xl font-bold shadow-lg hover:-translate-y-1 transition-transform">
            Create New Design
          </button>
          <button className="w-full py-4 border border-light-border dark:border-white/10 text-light-text1 dark:text-white hover:bg-light-hover dark:hover:bg-white/5 rounded-xl font-bold transition-all">
            Upgrade Plan
          </button>
        </div>
      </div>
    </div>
  );
}
