import React from "react";
import { 
  GitBranch, Github, CheckCircle2, 
  ExternalLink, Clock, GitCommit 
} from "lucide-react";

const mockUpdates = [
  { id: "rel-128", version: "v2.4.2", type: "Release", status: "stable", message: "Enhanced dark mode and layout optimization", date: "2 hours ago" },
  { id: "com-921", version: "8a2f1c", type: "Commit", status: "pending", message: "Integrated Razorpay refund webhook logic", date: "5 hours ago" },
  { id: "rel-127", version: "v2.4.1", type: "Release", status: "stable", message: "Initial release of Admin Console v2", date: "Yesterday" },
];

export default function Updates() {
  return (
    <div className="space-y-8 animate-fadeInSimple">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">System Updates</h1>
          <p className="text-gray-400 mt-1">Live tracking of GitHub releases and commits</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/5 transition-all">
          <Github className="h-4 w-4" /> View Repository
        </button>
      </div>

      <div className="bg-[#111827] rounded-3xl border border-white/5 shadow-xl overflow-hidden">
        <div className="p-6 border-b border-white/5 bg-white/[0.01] flex items-center justify-between">
          <div className="flex items-center gap-3">
             <GitBranch className="h-5 w-5 text-blue-500" />
             <span className="font-bold text-white tracking-tight">Production Branch: main</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs text-emerald-500 font-bold uppercase tracking-widest">System Healthy</span>
          </div>
        </div>

        <div className="divide-y divide-white/5">
          {Array.isArray(mockUpdates) && mockUpdates.map((update) => (
            <div key={update.id} className="p-6 hover:bg-white/[0.01] transition-all group flex items-start gap-6">
              <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-colors">
                {update.type === 'Release' ? <CheckCircle2 className="h-6 w-6 text-blue-500" /> : <GitCommit className="h-6 w-6 text-gray-400" />}
              </div>
              
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-white">{update.version}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest ${update.type === 'Release' ? 'bg-blue-500/10 text-blue-500' : 'bg-gray-500/10 text-gray-500'}`}>
                    {update.type}
                  </span>
                </div>
                <p className="text-gray-300 text-sm">{update.message}</p>
                <div className="flex items-center gap-4 pt-1">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Clock className="h-3 w-3" />
                    {update.date}
                  </div>
                  <button className="text-xs text-blue-500 hover:text-blue-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Diff <ExternalLink className="h-3 w-3" />
                  </button>
                </div>
              </div>

              {update.type === 'Release' && (
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all h-fit">
                   Mark Stable
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
