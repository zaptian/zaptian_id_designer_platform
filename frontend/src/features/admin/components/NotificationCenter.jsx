import React, { useState, useEffect } from "react";
import { Bell, X, Check, Info, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function NotificationCenter({ isOpen, onClose }) {
  const [notifications, setNotifications] = useState([
    { id: 1, title: "New Payment", message: "USR-001 processed $49.99 via Stripe", type: "success", time: "2m ago", read: false },
    { id: 2, title: "System Alert", message: "High latency detected in Razorpay API", type: "warning", time: "15m ago", read: false },
    { id: 3, title: "New Signup", message: "A new partner has joined: Tech-Front", type: "info", time: "1h ago", read: true },
  ]);

  // Simulate real-time push after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      const newNotify = {
        id: Date.now(),
        title: "Mock Event",
        message: "Real-time websocket push simulated",
        type: "info",
        time: "Just now",
        read: false
      };
      setNotifications(prev => [newNotify, ...prev]);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-96 bg-[#111827] border border-white/5 rounded-2xl shadow-2xl z-50 overflow-hidden animate-fadeInSimple">
      <div className="p-4 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
        <h3 className="font-bold text-white">Notifications</h3>
        <div className="flex gap-2">
          <button onClick={markAllRead} className="text-[10px] text-blue-400 font-bold hover:underline">Mark all as read</button>
          <button onClick={onClose} className="text-gray-500 hover:text-white"><X className="h-4 w-4" /></button>
        </div>
      </div>

      <div className="max-h-[400px] overflow-y-auto divide-y divide-white/5 custom-scrollbar">
        {notifications.length === 0 ? (
          <div className="p-8 text-center text-gray-500 text-sm">No notifications yet</div>
        ) : (
          notifications.map((n) => (
            <div key={n.id} className={cn(
              "p-4 hover:bg-white/[0.02] transition-colors relative flex gap-3",
              !n.read && "bg-blue-600/[0.03]"
            )}>
              <div className={cn(
                "h-8 w-8 rounded-lg flex items-center justify-center shrink-0",
                n.type === 'success' ? 'bg-emerald-500/10 text-emerald-500' : 
                n.type === 'warning' ? 'bg-amber-500/10 text-amber-500' : 'bg-blue-500/10 text-blue-500'
              )}>
                {n.type === 'success' ? <Check className="h-4 w-4" /> : 
                 n.type === 'warning' ? <AlertTriangle className="h-4 w-4" /> : <Info className="h-4 w-4" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start gap-2">
                  <p className="text-sm font-bold text-white truncate">{n.title}</p>
                  <span className="text-[10px] text-gray-500 whitespace-nowrap">{n.time}</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed mt-0.5">{n.message}</p>
              </div>
              {!n.read && (
                <div className="absolute top-4 right-2 h-2 w-2 bg-blue-500 rounded-full" />
              )}
            </div>
          ))
        )}
      </div>

      <div className="p-3 bg-white/[0.01] border-t border-white/5 text-center">
        <button className="text-[10px] font-bold text-gray-400 hover:text-white uppercase tracking-widest">View All Activity</button>
      </div>
    </div>
  );
}
