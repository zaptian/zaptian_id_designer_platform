import React, { useState } from "react";
import { 
  Tag, Plus, Search, Filter, 
  Trash2, Edit3, Calendar, CheckCircle, 
  XCircle, TrendingUp
} from "lucide-react";
import { cn } from "@/lib/utils";

const mockCoupons = [
  { id: "WELCOME50", discount: "50%", type: "Percentage", usage: "1,240/5,000", status: "active", expires: "2024-12-31" },
  { id: "PARTNER20", discount: "20%", type: "Percentage", usage: "850/Unlimited", status: "active", expires: "2024-06-30" },
  { id: "SAVE10", discount: "$10", type: "Fixed Amount", usage: "3,000/3,000", status: "expired", expires: "2024-03-01" },
];

export default function Coupons() {
  return (
    <div className="space-y-6 animate-fadeInSimple">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Coupons</h1>
          <p className="text-gray-400 mt-1">Manage promotional discounts and campaigns</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/20 transition-all">
          <Plus className="h-4 w-4" /> Create Coupon
        </button>
      </div>

      <div className="bg-[#111827] rounded-2xl border border-white/5 overflow-hidden">
        <div className="p-4 border-b border-white/5 flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input type="text" placeholder="Search code..." className="w-full bg-[#0b0f1a] border border-white/5 rounded-xl pl-10 pr-4 py-2 text-sm text-white outline-none" />
          </div>
        </div>
        
        <table className="w-full text-left">
          <thead className="bg-white/[0.01] text-xs font-bold text-gray-500 uppercase tracking-widest border-b border-white/5">
            <tr>
              <th className="px-6 py-4">Code</th>
              <th className="px-6 py-4">Discount</th>
              <th className="px-6 py-4">Usage</th>
              <th className="px-6 py-4">Expiry</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm">
            {mockCoupons.map((coupon) => (
              <tr key={coupon.id} className="hover:bg-white/[0.01]">
                <td className="px-6 py-4 font-mono text-blue-400">{coupon.id}</td>
                <td className="px-6 py-4 font-bold text-white">{coupon.discount}</td>
                <td className="px-6 py-4 text-gray-400">{coupon.usage}</td>
                <td className="px-6 py-4 text-gray-500">{coupon.expires}</td>
                <td className="px-6 py-4">
                  <span className={cn(
                    "px-2.5 py-0.5 rounded-full text-[10px] font-bold border",
                    coupon.status === 'active' ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : "bg-red-500/10 text-red-500 border-red-500/20"
                  )}>
                    {coupon.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg"><Edit3 className="h-4 w-4" /></button>
                  <button className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg"><Trash2 className="h-4 w-4" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
