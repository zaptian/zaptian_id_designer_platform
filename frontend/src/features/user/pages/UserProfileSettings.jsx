import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { User, Mail, Lock, Phone } from "lucide-react";

export default function UserProfileSettings() {
  const { user } = useAuth();
  
  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    mobile: user?.mobile || "",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleProfileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeInSimple">
      <div>
        <h1 className="text-3xl font-bold text-light-text1 dark:text-white tracking-tight">
          Profile Settings
        </h1>
        <p className="text-light-text2 dark:text-gray-400 mt-1">Manage your personal information and security.</p>
      </div>

      <div className="bg-light-card1 dark:bg-[#111827] rounded-3xl border border-light-border dark:border-white/5 shadow-xl overflow-hidden">
        <div className="p-8 border-b border-light-border dark:border-white/5">
          <h2 className="text-xl font-bold text-light-text1 dark:text-white mb-6">Personal Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-light-text1 dark:text-gray-300 ml-1">First Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleProfileChange}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-white dark:bg-[#14151a] border border-light-border dark:border-white/10 focus:border-button-primary focus:ring-1 focus:ring-button-primary text-light-text1 dark:text-white outline-none transition-all shadow-inner"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-light-text1 dark:text-gray-300 ml-1">Last Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleProfileChange}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-white dark:bg-[#14151a] border border-light-border dark:border-white/10 focus:border-button-primary focus:ring-1 focus:ring-button-primary text-light-text1 dark:text-white outline-none transition-all shadow-inner"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-light-text1 dark:text-gray-300 ml-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  disabled
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-[#14151a] border border-light-border dark:border-white/5 text-gray-500 cursor-not-allowed outline-none shadow-inner"
                />
              </div>
              <p className="text-xs text-light-text2 dark:text-gray-500 ml-1">Contact support to change email</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-light-text1 dark:text-gray-300 ml-1">Mobile Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                  <Phone size={18} />
                </div>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleProfileChange}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-white dark:bg-[#14151a] border border-light-border dark:border-white/10 focus:border-button-primary focus:ring-1 focus:ring-button-primary text-light-text1 dark:text-white outline-none transition-all shadow-inner"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-end">
            <button className="px-6 py-3 bg-button-primary text-white rounded-xl font-bold hover:-translate-y-0.5 shadow-lg shadow-button-primary/20 transition-all active:scale-95">
              Save Changes
            </button>
          </div>
        </div>

        <div className="p-8">
          <h2 className="text-xl font-bold text-light-text1 dark:text-white mb-6">Change Password</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2 md:col-span-2 max-w-md">
              <label className="text-sm font-bold text-light-text1 dark:text-gray-300 ml-1">Current Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  name="currentPassword"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-white dark:bg-[#14151a] border border-light-border dark:border-white/10 focus:border-button-primary focus:ring-1 focus:ring-button-primary text-light-text1 dark:text-white outline-none transition-all shadow-inner"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-light-text1 dark:text-gray-300 ml-1">New Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-white dark:bg-[#14151a] border border-light-border dark:border-white/10 focus:border-button-primary focus:ring-1 focus:ring-button-primary text-light-text1 dark:text-white outline-none transition-all shadow-inner"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-light-text1 dark:text-gray-300 ml-1">Confirm New Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-white dark:bg-[#14151a] border border-light-border dark:border-white/10 focus:border-button-primary focus:ring-1 focus:ring-button-primary text-light-text1 dark:text-white outline-none transition-all shadow-inner"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <button className="px-6 py-3 border border-light-border dark:border-white/10 text-light-text1 dark:text-white rounded-xl font-bold hover:bg-light-hover dark:hover:bg-white/5 transition-all">
              Update Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
