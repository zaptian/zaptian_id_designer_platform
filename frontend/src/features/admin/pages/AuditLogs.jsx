import React, { useEffect, useState } from "react";
import { 
  History, Search, Filter, 
  RotateCcw, Info, User, 
  Settings, CreditCard, Tag 
} from "lucide-react";
import { api } from "@/lib/api";
import { cn } from "@/lib/utils";

const ActionIcon = ({ type }) => {
  if (type.includes("User")) return <User className="h-4 w-4 text-blue-500" />;
  if (type.includes("Payment")) return <CreditCard className="h-4 w-4 text-emerald-500" />;
  if (type.includes("Pricing")) return <Tag className="h-4 w-4 text-amber-500" />;
  return <Settings className="h-4 w-4 text-gray-400" />;
};

export default function AuditLogs() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/admin/logs").then((data) => {
      setLogs(Array.isArray(data) ? data : []);
      setLoading(false);
    }).catch(() => {
      setLogs([]);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="text-white">Loading logs...</div>;

  return (
    <div className="space-y-6 animate-fadeInSimple">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Audit Logs</h1>
          <p className="text-gray-400 mt-1">Immutable history of all administrative actions</p>
        </div>
      </div>

      <div className="bg-[#111827] rounded-2xl border border-white/5 overflow-hidden shadow-xl">
        <div className="p-4 border-b border-white/5 flex gap-4 bg-white/[0.01]">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Filter by admin, action, or date..."
              className="w-full bg-[#0b0f1a] border border-white/5 rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:outline-none"
            />
          </div>
          <button className="px-4 py-2 bg-[#0b0f1a] border border-white/5 rounded-xl text-sm text-gray-400 hover:text-white transition-all">
            <Filter className="h-4 w-4" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/[0.02] text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-white/5">
              <tr>
                <th className="px-6 py-4">Action</th>
                <th className="px-6 py-4">Administrator</th>
                <th className="px-6 py-4">Target</th>
                <th className="px-6 py-4">Timestamp</th>
                <th className="px-6 py-4 text-right">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {Array.isArray(logs) && logs.map((log) => (
                <tr key={log.id} className="hover:bg-white/[0.01] transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                       <div className="p-2 bg-white/5 rounded-lg">
                         <ActionIcon type={log.action} />
                       </div>
                       <span className="font-semibold text-white">{log.action}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-300">{log.admin}</td>
                  <td className="px-6 py-4 text-gray-400">{log.target}</td>
                  <td className="px-6 py-4 text-xs text-gray-500 font-mono">{log.timestamp}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                      <Info className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
