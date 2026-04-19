import React from "react";
import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, Users, Handshake, CreditCard, 
  Tag, BarChart3, RefreshCcw, ScrollText, 
  Settings, ShieldCheck, Bell, ChevronLeft, LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAdminAuth } from "@/hooks/useAdminAuth";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/admin", exact: true },
  { icon: Users, label: "Users", path: "/admin/users" },
  { icon: Handshake, label: "Partners", path: "/admin/partners" },
  { icon: CreditCard, label: "Payments", path: "/admin/payments" },
  { icon: Tag, label: "Pricing & Plans", path: "/admin/plans" },
  { icon: Tag, label: "Coupons", path: "/admin/coupons" },
  { icon: BarChart3, label: "Analytics", path: "/admin/analytics" },
  { icon: RefreshCcw, label: "Updates", path: "/admin/updates" },
  { icon: ScrollText, label: "Audit Logs", path: "/admin/logs" },
  { icon: ShieldCheck, label: "Roles & Permissions", path: "/admin/roles" },
  { icon: Settings, label: "Settings", path: "/admin/settings" },
];

export default function AdminSidebar({ collapsed, setCollapsed }) {
  const { logout } = useAdminAuth();

  return (
    <aside 
      className={cn(
        "bg-[#111827] border-r border-white/5 flex flex-col transition-all duration-300 ease-in-out sticky top-0 h-screen z-40",
        "fixed inset-y-0 left-0 lg:static", // Overlay on mobile, static on desktop
        collapsed ? "w-20 -translate-x-full lg:translate-x-0" : "w-64 translate-x-0",
        "translate-x-0" // Default to show if not explicitly hidden
      )}
    >
      <div className="p-6 flex items-center justify-between">
        {!collapsed && (
          <span className="text-xl font-bold text-white tracking-tight">Zaptian</span>
        )}
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-lg bg-white/5 text-gray-400 hover:text-white transition-colors"
        >
          <ChevronLeft className={cn("h-5 w-5 transition-transform", collapsed && "rotate-180")} />
        </button>
      </div>

      <nav className="flex-1 px-4 space-y-1 overflow-y-auto custom-scrollbar">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.exact}
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group",
              isActive 
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
                : "text-gray-400 hover:text-white hover:bg-white/5"
            )}
          >
            <item.icon className="h-5 w-5 shrink-0" />
            {!collapsed && <span className="font-medium text-sm">{item.label}</span>}
            {collapsed && (
              <div className="absolute left-16 bg-[#1f2937] text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block pointer-events-none border border-white/10">
                {item.label}
              </div>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-white/5">
        <button 
          onClick={logout}
          className={cn(
            "flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-red-400 hover:bg-red-400/10 transition-all",
            collapsed ? "justify-center" : ""
          )}
        >
          <LogOut className="h-5 w-5" />
          {!collapsed && <span className="font-medium text-sm">Logout</span>}
        </button>
      </div>
    </aside>
  );
}
