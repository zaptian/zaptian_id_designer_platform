import React from "react";
import { Laptop, Tablet, Smartphone, ShieldCheck, LogOut, ShieldAlert } from "lucide-react";

export default function UserSecurity() {
  const activeSessions = [
    {
      id: 1,
      device: "Desktop - Chrome (Windows 11)",
      ip: "192.168.1.45",
      lastActive: "Active now",
      location: "San Francisco, US",
      isCurrent: true,
      icon: Laptop
    },
    {
      id: 2,
      device: "iPhone 15 Pro - Safari",
      ip: "172.56.23.102",
      lastActive: "2 hours ago",
      location: "San Francisco, US",
      isCurrent: false,
      icon: Smartphone
    },
    {
      id: 3,
      device: "iPad Air - Safari",
      ip: "172.56.23.104",
      lastActive: "Yesterday",
      location: "San Jose, US",
      isCurrent: false,
      icon: Tablet
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fadeInSimple">
      <div>
        <h1 className="text-3xl font-bold text-light-text1 dark:text-white tracking-tight">
          Security & Sessions
        </h1>
        <p className="text-light-text2 dark:text-gray-400 mt-1">Manage your active sessions and account security settings.</p>
      </div>

      {/* Two-Factor Auth Banner */}
      <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-6">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
          <ShieldCheck size={32} />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-lg font-bold text-emerald-700 dark:text-emerald-400">Two-Factor Authentication is Enabled</h3>
          <p className="text-sm text-emerald-600/80 dark:text-emerald-400/80">Your account is protected with an extra layer of security. We'll ask for a code whenever you sign in from a new device.</p>
        </div>
        <button className="px-5 py-2.5 bg-emerald-500 text-white rounded-xl font-bold text-sm shadow-lg shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all">
          Manage 2FA
        </button>
      </div>

      {/* Active Sessions */}
      <div className="bg-light-card1 dark:bg-[#111827] rounded-3xl border border-light-border dark:border-white/5 shadow-xl overflow-hidden">
        <div className="p-8 border-b border-light-border dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-light-text1 dark:text-white">Active Sessions</h2>
            <p className="text-sm text-light-text2 dark:text-gray-400 uppercase tracking-widest font-bold mt-1">Logged in devices</p>
          </div>
          <button className="text-sm font-bold text-red-500 hover:text-red-600 flex items-center gap-2 hover:bg-red-500/5 px-4 py-2 rounded-xl transition-all border border-red-500/10">
            Sign out of all other devices
          </button>
        </div>

        <div className="p-4 sm:p-8 space-y-4">
          {activeSessions.map((session) => {
            const Icon = session.icon;
            return (
              <div key={session.id} className={`flex items-center justify-between p-4 sm:p-6 rounded-2xl border transition-all ${session.isCurrent ? 'bg-button-primary/5 border-button-primary/20' : 'bg-transparent border-light-border dark:border-white/5'}`}>
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${session.isCurrent ? 'bg-button-primary text-white shadow-lg shadow-button-primary/20' : 'bg-light-hover dark:bg-white/5 text-light-text2 dark:text-gray-400'}`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                       <p className="text-sm sm:text-base font-bold text-light-text1 dark:text-white">{session.device}</p>
                       {session.isCurrent && (
                         <span className="text-[10px] sm:text-xs font-black bg-button-primary text-white px-2 py-0.5 rounded-full uppercase tracking-tighter">Current</span>
                       )}
                    </div>
                    <p className="text-xs text-light-text2 dark:text-gray-400 mt-0.5">{session.location} • {session.ip}</p>
                    <p className="text-[10px] text-button-primary font-bold mt-1">{session.lastActive}</p>
                  </div>
                </div>
                {!session.isCurrent && (
                  <button className="p-2 text-light-text2 dark:text-gray-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all" title="Terminate Session">
                    <LogOut size={18} />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-red-500/5 border border-red-500/10 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center shrink-0">
             <ShieldAlert size={28} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-light-text1 dark:text-white">Delete Account</h3>
            <p className="text-sm text-light-text2 dark:text-gray-400">Once you delete your account, there is no going back. Please be certain.</p>
          </div>
        </div>
        <button className="px-6 py-3 border border-red-500 text-red-500 rounded-xl font-bold text-sm hover:bg-red-500 hover:text-white transition-all whitespace-nowrap">
          Permanently Delete
        </button>
      </div>

    </div>
  );
}
