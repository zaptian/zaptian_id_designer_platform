import React, { useEffect, useState } from "react";
import { 
  CreditCard, Search, Download, Filter, 
  ExternalLink, RotateCcw, CheckCircle2, 
  XCircle, Clock, Info
} from "lucide-react";
import { api } from "@/lib/api";
import { cn } from "@/lib/utils";

const GatewayBadge = ({ gateway }) => (
  <span className={cn(
    "px-2 py-0.5 rounded-md text-[10px] font-bold border flex items-center gap-1 w-fit",
    gateway === "Stripe" ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" : "bg-blue-500/10 text-blue-400 border-blue-500/20"
  )}>
    <div className={cn("h-1.5 w-1.5 rounded-full", gateway === "Stripe" ? "bg-indigo-400" : "bg-blue-400")} />
    {gateway}
  </span>
);

export default function PaymentList() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/admin/payments").then((data) => {
      setPayments(Array.isArray(data) ? data : []);
      setLoading(false);
    }).catch(() => {
      setPayments([]);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="text-white">Loading payments...</div>;

  return (
    <div className="space-y-6 animate-fadeInSimple">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Payments</h1>
          <p className="text-gray-400 mt-1">Transaction history and refunds</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-sm font-medium rounded-xl border border-white/5 transition-all">
            <Download className="h-4 w-4" /> Reconciliation
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#111827] p-5 rounded-2xl border border-white/5">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Total Volume</p>
          <p className="text-2xl font-bold text-white">$42,500.00</p>
        </div>
        <div className="bg-[#111827] p-5 rounded-2xl border border-white/5">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Active Refunds</p>
          <p className="text-2xl font-bold text-amber-500">12 Pending</p>
        </div>
        <div className="bg-[#111827] p-5 rounded-2xl border border-white/5 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Success Rate</p>
            <p className="text-2xl font-bold text-emerald-500">98.4%</p>
          </div>
          <CheckCircle2 className="h-8 w-8 text-emerald-500/20" />
        </div>
      </div>

      <div className="bg-[#111827] rounded-2xl border border-white/5 overflow-hidden shadow-xl">
        <div className="p-4 border-b border-white/5 flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Filter by txn ID or user email..."
              className="w-full bg-[#0b0f1a] border border-white/5 rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:outline-none"
            />
          </div>
          <button className="px-4 py-2 bg-[#0b0f1a] border border-white/5 rounded-xl text-sm text-gray-400 hover:text-white transition-all">
            <Filter className="h-4 w-4" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-white/[0.01] text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-white/5">
              <tr>
                <th className="px-6 py-4">Transaction ID</th>
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Gateway</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {Array.isArray(payments) && payments.map((txn) => (
                <tr key={txn.id} className="hover:bg-white/[0.01] transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-mono text-xs text-blue-400">{txn.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-white">{txn.userName}</p>
                    <p className="text-[10px] text-gray-500">{txn.userId}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-white">{txn.currency} {txn.amount.toLocaleString()}</p>
                  </td>
                  <td className="px-6 py-4">
                    <GatewayBadge gateway={txn.gateway} />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                       {txn.status === 'success' ? <CheckCircle2 className="h-4 w-4 text-emerald-500" /> : <Clock className="h-4 w-4 text-amber-500" />}
                       <span className={cn(
                         "text-xs font-medium",
                         txn.status === 'success' ? "text-emerald-500" : "text-amber-500"
                       )}>
                         {txn.status}
                       </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs text-gray-500">{txn.date}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all" title="View Logs">
                        <Info className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all" title="External Link">
                        <ExternalLink className="h-4 w-4" />
                      </button>
                      <button 
                        className="p-2 text-amber-500/50 hover:text-amber-500 hover:bg-amber-500/10 rounded-lg transition-all" 
                        title="Initiate Refund"
                        onClick={() => confirm("Are you sure you want to initiate a refund for " + txn.id + "?")}
                      >
                        <RotateCcw className="h-4 w-4" />
                      </button>
                    </div>
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
