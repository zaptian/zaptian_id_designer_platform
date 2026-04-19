import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "@/features/admin/components/Sidebar";
import AdminTopBar from "@/features/admin/components/TopBar";

export default function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#0b0f1a] text-gray-100 font-sans selection:bg-blue-500/30">
      {/* Sidebar */}
      <AdminSidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <AdminTopBar />
        
        <main className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="max-w-[1600px] mx-auto p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
