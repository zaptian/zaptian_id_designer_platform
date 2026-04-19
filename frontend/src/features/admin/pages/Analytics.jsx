import React from "react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, LineChart, Line 
} from "recharts";
import { TrendingUp, Users, Clock, MousePointer2 } from "lucide-react";

const data = [
  { name: 'Mon', active: 4000, new: 2400 },
  { name: 'Tue', active: 3000, new: 1398 },
  { name: 'Wed', active: 2000, new: 9800 },
  { name: 'Thu', active: 2780, new: 3908 },
  { name: 'Fri', active: 1890, new: 4800 },
  { name: 'Sat', active: 2390, new: 3800 },
  { name: 'Sun', active: 3490, new: 4300 },
];

export default function Analytics() {
  return (
    <div className="space-y-8 animate-fadeInSimple">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Analytics</h1>
          <p className="text-gray-400 mt-1">Deep-dive into platform usage metrics</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Avg Session", value: "8m 42s", icon: Clock, color: "text-blue-500" },
          { label: "DAU/MAU", value: "42.5%", icon: Users, color: "text-emerald-500" },
          { label: "Click Rate", value: "12.2%", icon: MousePointer2, color: "text-amber-500" },
          { label: "Growth", value: "+18%", icon: TrendingUp, color: "text-purple-500" },
        ].map((item, i) => (
          <div key={i} className="bg-[#111827] p-6 rounded-2xl border border-white/5">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-xl"><item.icon className={`h-6 w-6 ${item.color}`} /></div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{item.label}</p>
                <p className="text-xl font-bold text-white">{item.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#111827] p-8 rounded-2xl border border-white/5 shadow-xl">
        <h3 className="text-lg font-bold text-white mb-8">User Engagement (Weekly)</h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1f2937" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af'}} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af'}} />
              <Tooltip contentStyle={{backgroundColor: '#1f2937', border: 'none', borderRadius: '12px'}} />
              <Line type="monotone" dataKey="active" stroke="#3b82f6" strokeWidth={3} dot={{r: 4, fill: '#3b82f6'}} />
              <Line type="monotone" dataKey="new" stroke="#10b981" strokeWidth={3} dot={{r: 4, fill: '#10b981'}} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
