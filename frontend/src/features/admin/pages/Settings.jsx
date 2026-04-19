import React, { useState } from "react";
import { 
  Settings, Key, Mail, Bell, 
  Shield, CreditCard, Save, Smartphone 
} from "lucide-react";
import { cn } from "@/lib/utils";

const SettingSection = ({ icon: Icon, title, description, active, onClick }) => (
  <button 
    onClick={onClick}
    className={cn(
      "w-full flex items-center gap-4 p-5 rounded-2xl border transition-all text-left",
      active 
        ? "bg-blue-600 border-blue-500 shadow-lg shadow-blue-600/20" 
        : "bg-[#111827] border-white/5 hover:border-white/10"
    )}
  >
    <div className={cn(
      "p-3 rounded-xl",
      active ? "bg-white/20" : "bg-blue-600/10 text-blue-500"
    )}>
      <Icon className="h-6 w-6" />
    </div>
    <div>
      <p className={cn("font-bold", active ? "text-white" : "text-gray-200")}>{title}</p>
      <p className={cn("text-xs", active ? "text-blue-100" : "text-gray-400")}>{description}</p>
    </div>
  </button>
);

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="space-y-8 animate-fadeInSimple">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">System Settings</h1>
          <p className="text-gray-400 mt-1">Configure global platform behavior and integrations</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/20 transition-all">
          <Save className="h-4 w-4" /> Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Navigation */}
        <div className="space-y-3">
          <SettingSection 
            icon={Settings} title="General" description="Basic system configuration" 
            active={activeTab === 'general'} onClick={() => setActiveTab('general')} 
          />
          <SettingSection 
            icon={Key} title="API & Integrations" description="Razorpay, Stripe & Github keys" 
            active={activeTab === 'api'} onClick={() => setActiveTab('api')} 
          />
          <SettingSection 
            icon={Mail} title="Email Templates" description="System transactional emails" 
            active={activeTab === 'email'} onClick={() => setActiveTab('email')} 
          />
          <SettingSection 
            icon={Bell} title="Notifications" description="Global alert configurations" 
            active={activeTab === 'notifications'} onClick={() => setActiveTab('notifications')} 
          />
        </div>

        {/* Content */}
        <div className="lg:col-span-2 bg-[#111827] rounded-3xl border border-white/5 shadow-xl p-8">
          {activeTab === 'general' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-6">General Configuration</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Platform Name</label>
                  <input type="text" defaultValue="Zaptian ID Designer" className="w-full bg-[#0b0f1a] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-blue-500/50 transition-all" />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Support Email</label>
                  <input type="email" defaultValue="support@zaptian.com" className="w-full bg-[#0b0f1a] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-blue-500/50 transition-all" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'api' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-6">API & Credentials</h3>
              <div className="p-4 rounded-xl bg-blue-600/5 border border-blue-500/20 text-blue-400 text-xs mb-6">
                Sensitive keys are masked and stored securely on the backend.
              </div>
              <div className="space-y-4">
                <div className="relative">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Razorpay Key ID</label>
                  <input type="password" value="rzp_live_••••••••••••••••" readOnly className="w-full bg-[#0b0f1a] border border-white/10 rounded-xl px-4 py-3 text-white" />
                </div>
                <div className="relative">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Stripe Secret Agent</label>
                  <input type="password" value="sk_test_••••••••••••••••" readOnly className="w-full bg-[#0b0f1a] border border-white/10 rounded-xl px-4 py-3 text-white" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
