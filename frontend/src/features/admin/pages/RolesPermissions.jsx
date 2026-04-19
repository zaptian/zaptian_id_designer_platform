import React, { useState } from "react";
import { Shield, ShieldAlert, ShieldCheck, Save, Search, UserCog } from "lucide-react";
import { cn } from "@/lib/utils";

const PERMISSIONS = [
  { id: "view_analytics", label: "View Analytics", category: "Reporting" },
  { id: "manage_users", label: "Manage Users", category: "Users" },
  { id: "suspend_users", label: "Suspend Users", category: "Users" },
  { id: "view_payments", label: "View Payments", category: "Finance" },
  { id: "refund_payments", label: "Process Refunds", category: "Finance" },
  { id: "manage_plans", label: "Edit Pricing Plans", category: "Product" },
  { id: "manage_coupons", label: "Manage Coupons", category: "Product" },
  { id: "view_audit_logs", label: "View Audit Logs", category: "System" },
  { id: "system_settings", label: "Modify System Settings", category: "System" },
];

const RoleCard = ({ role, active, onClick }) => {
  const Icon = role.id === 'SUPER_ADMIN' ? ShieldAlert : role.id === 'ADMIN' ? ShieldCheck : Shield;
  return (
    <button 
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-4 p-4 rounded-2xl border transition-all text-left",
        active 
          ? "bg-blue-600 border-blue-500 shadow-lg shadow-blue-600/20" 
          : "bg-[#111827] border-white/5 hover:border-white/10 hover:bg-white/[0.02]"
      )}
    >
      <div className={cn(
        "p-3 rounded-xl",
        active ? "bg-white/20" : "bg-blue-600/10 text-blue-500"
      )}>
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <p className={cn("font-bold", active ? "text-white" : "text-gray-200")}>{role.name}</p>
        <p className={cn("text-xs", active ? "text-blue-100" : "text-gray-400")}>{role.description}</p>
      </div>
    </button>
  );
};

export default function RolesPermissions() {
  const [selectedRole, setSelectedRole] = useState("SUPPORT");
  const [permissions, setPermissions] = useState({
    SUPPORT: ["view_analytics", "view_payments", "view_users"],
    ADMIN: ["view_analytics", "manage_users", "suspend_users", "view_payments", "manage_plans", "manage_coupons", "view_audit_logs"],
    SUPER_ADMIN: PERMISSIONS.map(p => p.id)
  });

  const roles = [
    { id: "SUPER_ADMIN", name: "Super Admin", description: "Full system access & admin management" },
    { id: "ADMIN", name: "Administrator", description: "Standard business & user management" },
    { id: "SUPPORT", name: "Support Agent", description: "Limited access for customer assistance" },
  ];

  const togglePermission = (permId) => {
    if (selectedRole === "SUPER_ADMIN") return; // Immutable
    
    setPermissions(prev => ({
      ...prev,
      [selectedRole]: prev[selectedRole].includes(permId)
        ? prev[selectedRole].filter(id => id !== permId)
        : [...prev[selectedRole], permId]
    }));
  };

  return (
    <div className="space-y-8 animate-fadeInSimple">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Roles & Permissions</h1>
          <p className="text-gray-400 mt-1">Configure access levels and RBAC policies</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/20 transition-all">
          <Save className="h-4 w-4" /> Save Configuration
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Role Selection */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest px-1">Select Role</h3>
          <div className="space-y-3">
            {roles.map(role => (
              <RoleCard 
                key={role.id} 
                role={role} 
                active={selectedRole === role.id}
                onClick={() => setSelectedRole(role.id)}
              />
            ))}
          </div>
          
          <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10 mt-6">
            <div className="flex gap-3">
              <ShieldAlert className="h-5 w-5 text-amber-500 shrink-0" />
              <p className="text-xs text-amber-200/70 leading-relaxed">
                <span className="font-bold text-amber-500">Security Note:</span> Super Admin permissions are immutable. Admin accounts can only be created by an existing Super Admin.
              </p>
            </div>
          </div>
        </div>

        {/* Permissions Management */}
        <div className="lg:col-span-2 bg-[#111827] rounded-2xl border border-white/5 shadow-xl overflow-hidden">
          <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
            <div className="flex items-center gap-3">
              <UserCog className="h-5 w-5 text-blue-500" />
              <h3 className="font-bold text-white">Permissions for {roles.find(r => r.id === selectedRole)?.name}</h3>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search tools..."
                className="bg-[#0b0f1a] border border-white/10 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white focus:outline-none"
              />
            </div>
          </div>

          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {Object.entries(
              PERMISSIONS.reduce((acc, curr) => {
                if (!acc[curr.category]) acc[curr.category] = [];
                acc[curr.category].push(curr);
                return acc;
              }, {})
            ).map(([category, perms]) => (
              <div key={category} className="space-y-4">
                <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">{category}</h4>
                <div className="space-y-3">
                  {perms.map(perm => (
                    <label 
                      key={perm.id} 
                      className={cn(
                        "flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer group",
                        permissions[selectedRole].includes(perm.id)
                          ? "bg-blue-600/5 border-blue-500/30"
                          : "bg-white/[0.02] border-white/5 hover:border-white/10"
                      )}
                    >
                      <span className={cn(
                        "text-sm font-medium transition-colors",
                        permissions[selectedRole].includes(perm.id) ? "text-white" : "text-gray-400 group-hover:text-gray-200"
                      )}>
                        {perm.label}
                      </span>
                      <div className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer"
                          checked={permissions[selectedRole].includes(perm.id)}
                          onChange={() => togglePermission(perm.id)}
                          disabled={selectedRole === "SUPER_ADMIN"}
                        />
                        <div className="w-9 h-5 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
