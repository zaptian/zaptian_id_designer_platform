import React, { useEffect, useState } from "react";
import { 
  Search, Filter, MoreVertical, UserPlus, 
  Download, Mail, Shield, Ban 
} from "lucide-react";
import { api } from "@/lib/api";
import { cn } from "@/lib/utils";

const StatusBadge = ({ status }) => {
  const styles = {
    active: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    suspended: "bg-red-500/10 text-red-500 border-red-500/20",
    pending: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  };

  return (
    <span className={cn(
      "px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border",
      styles[status] || styles.pending
    )}>
      {status}
    </span>
  );
};

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/admin/users").then((response) => {
      // The backend returns { success: true, data: [...], pagination: {...} }
      const usersArray = response?.data || [];
      const mappedUsers = usersArray.map(u => ({
        ...u,
        name: `${u.firstName} ${u.lastName}`,
        lastLogin: new Date(u.updatedAt || u.createdAt).toLocaleDateString(),
        plan: "Free", // Can be extended from Subscription later
      }));
      setUsers(mappedUsers);
      setLoading(false);
    }).catch((err) => {
      console.error("Error fetching users:", err);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="text-white">Loading users...</div>;

  return (
    <div className="space-y-6 animate-fadeInSimple">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">User Management</h1>
          <p className="text-gray-400 mt-1">Manage and audit system users</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-sm font-medium rounded-xl border border-white/5 transition-all">
            <Download className="h-4 w-4" /> Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl shadow-lg shadow-blue-600/20 transition-all">
            <UserPlus className="h-4 w-4" /> Add User
          </button>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-[#111827] p-4 rounded-2xl border border-white/5 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <input 
            type="text" 
            placeholder="Search by name, email, or ID..."
            className="w-full bg-[#0b0f1a] border border-white/5 rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#0b0f1a] border border-white/5 rounded-xl text-sm text-gray-400 hover:text-white transition-all">
            <Filter className="h-4 w-4" /> Filters
          </button>
          <select className="bg-[#0b0f1a] border border-white/5 rounded-xl text-sm text-gray-400 px-4 py-2 outline-none">
            <option>All Roles</option>
            <option>Admin</option>
            <option>Support</option>
            <option>User</option>
          </select>
        </div>
      </div>

      {/* Table Content */}
      <div className="bg-[#111827] rounded-2xl border border-white/5 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/[0.02] border-b border-white/5">
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">User</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Role</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Plan</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Last Active</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {Array.isArray(users) && users.map((user) => (
                <tr key={user.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center border border-white/5">
                        <span className="text-xs font-bold text-white">{user.name?.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-white">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-gray-300">
                      {user.role === 'ADMIN' && <Shield className="h-3.5 w-3.5 text-blue-500" />}
                      <span className="text-xs font-medium">{user.role}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-medium text-gray-300">{user.plan}</span>
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={user.status} />
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-xs text-gray-400">{user.lastLogin}</p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all" title="Send Email">
                        <Mail className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all" title="Suspend">
                        <Ban className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination placeholder */}
        <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between bg-white/[0.01]">
          <p className="text-xs text-gray-500">Showing 1-10 of {(users?.length || 0) * 12} users</p>
          <div className="flex gap-2">
            <button disabled className="px-3 py-1 rounded-lg bg-white/5 text-gray-500 text-xs disabled:opacity-50">Prev</button>
            <button className="px-3 py-1 rounded-lg bg-white/5 text-white text-xs hover:bg-white/10 transition-all">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
