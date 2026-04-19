import React, { useEffect, useState } from "react";
import { 
  Handshake, Users, TrendingUp, Search, 
  ExternalLink, Plus, MapPin, Building 
} from "lucide-react";
import { api } from "@/lib/api";
import { cn } from "@/lib/utils";

export default function PartnerList() {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/admin/partners").then((data) => {
      setPartners(Array.isArray(data) ? data : []);
      setLoading(false);
    }).catch(() => {
      setPartners([]);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="text-white">Loading partners...</div>;

  return (
    <div className="space-y-6 animate-fadeInSimple">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Partner Ecosystem</h1>
          <p className="text-gray-400 mt-1">Manage institutional and corporate partners</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/20 transition-all">
          <Plus className="h-4 w-4" /> Add Partner
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {Array.isArray(partners) && partners.map((partner) => (
          <div key={partner.id} className="bg-[#111827] rounded-2xl border border-white/5 p-6 space-y-6 hover:border-white/10 transition-all group overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute -right-4 -top-4 h-24 w-24 bg-blue-600/5 rounded-full blur-2xl group-hover:bg-blue-600/10 transition-all" />
            
            <div className="flex justify-between items-start">
              <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5">
                <Building className="h-7 w-7 text-blue-500" />
              </div>
              <div className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-bold uppercase tracking-wider">
                {partner.status}
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white tracking-tight">{partner.name}</h3>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <MapPin className="h-3.5 w-3.5" />
                <span>Global Region</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="h-3.5 w-3.5 text-gray-400" />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Users</span>
                </div>
                <p className="text-lg font-bold text-white">{partner.userCount.toLocaleString()}</p>
              </div>
              <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="h-3.5 w-3.5 text-gray-400" />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Revenue</span>
                </div>
                <p className="text-lg font-bold text-white">${partner.totalRevenue.toLocaleString()}</p>
              </div>
            </div>

            <div className="pt-2">
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="text-gray-400">Commission Rate</span>
                <span className="text-blue-400 font-bold">{partner.commission}</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full rounded-full w-[15%]" />
              </div>
            </div>

            <button className="w-full py-2.5 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold rounded-xl border border-white/5 transition-all flex items-center justify-center gap-2">
              View Performance <ExternalLink className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
