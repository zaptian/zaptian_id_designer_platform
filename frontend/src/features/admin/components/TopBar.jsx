import React, { useState } from "react";
import { Search, Bell, History, User } from "lucide-react";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import NotificationCenter from "./NotificationCenter";
import { cn } from "@/lib/utils";

export default function AdminTopBar() {
  const { admin } = useAdminAuth();
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="h-16 bg-[#0b0f1a]/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-50 px-8 flex items-center justify-between">
      {/* Smart Search */}
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
          <input 
            type="text"
            placeholder="Search users, payments, or coupons..."
            className="w-full bg-white/5 border border-white/5 rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/10 transition-all"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-gray-400 border border-white/10">⌘</kbd>
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-gray-400 border border-white/10">K</kbd>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className={cn(
              "p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all relative",
              showNotifications && "bg-white/10 text-white"
            )}
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2.5 h-2 w-2 bg-blue-500 rounded-full border-2 border-[#0b0f1a]" />
          </button>
          
          <NotificationCenter 
            isOpen={showNotifications} 
            onClose={() => setShowNotifications(false)} 
          />
        </div>

        <button className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all">
          <History className="h-5 w-5" />
        </button>

        <div className="h-6 w-px bg-white/10 mx-2" />

        <div className="flex items-center gap-3 pl-2">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-white">{admin?.name}</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">{admin?.role}</p>
          </div>
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center border border-white/10 shadow-lg">
            <User className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>
    </header>
  );
}
