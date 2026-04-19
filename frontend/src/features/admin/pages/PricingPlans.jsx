import React, { useState } from "react";
import { 
  Tag, Layers, History, CheckCircle2, 
  Settings2, Plus, ArrowRight, AlertTriangle 
} from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    id: "free",
    name: "Free",
    price: 0,
    version: "1.2.0",
    active: true,
    features: ["10 Cards/mo", "Basic Templates", "Community Support"],
    subscribers: 4200
  },
  {
    id: "pro",
    name: "Pro",
    price: 49,
    version: "2.4.1",
    active: true,
    features: ["Unlimited Cards", "Premium Templates", "API Access", "Priority Support"],
    subscribers: 3850
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 299,
    version: "1.0.5",
    active: true,
    features: ["Custom Branding", "dedicated Manager", "SLA Guarantee"],
    subscribers: 370
  }
];

export default function PricingPlans() {
  const [activePlan, setActivePlan] = useState("pro");

  return (
    <div className="space-y-8 animate-fadeInSimple">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Pricing & Plans</h1>
          <p className="text-gray-400 mt-1">Manage subscription tiers and feature mapping</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/20 transition-all">
          <Plus className="h-4 w-4" /> Create New Plan
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div 
            key={plan.id}
            onClick={() => setActivePlan(plan.id)}
            className={cn(
              "bg-[#111827] rounded-3xl border p-8 space-y-6 cursor-pointer transition-all hover:translate-y-[-4px]",
              activePlan === plan.id 
                ? "border-blue-500 ring-4 ring-blue-500/10 shadow-2xl shadow-blue-500/10" 
                : "border-white/5 hover:border-white/10"
            )}
          >
            <div className="flex justify-between items-start">
              <div className={cn(
                "p-3 rounded-2xl",
                activePlan === plan.id ? "bg-blue-500 text-white" : "bg-white/5 text-blue-500"
              )}>
                <Layers className="h-6 w-6" />
              </div>
              <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-white/5 text-[10px] font-bold text-gray-400">
                <History className="h-3 w-3" /> v{plan.version}
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-white">{plan.name} Plan</h3>
              <p className="text-gray-400 text-sm">{plan.subscribers.toLocaleString()} active subscribers</p>
            </div>

            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-white">${plan.price}</span>
              <span className="text-gray-500 font-medium">/month</span>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/5">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <button className={cn(
              "w-full py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2",
              activePlan === plan.id 
                ? "bg-blue-600 text-white" 
                : "bg-white/5 text-gray-400 hover:text-white"
            )}>
              Manage Configuration <Settings2 className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="bg-amber-500/5 border border-amber-500/10 rounded-2xl p-6 flex gap-4">
        <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0" />
        <div>
          <h4 className="font-bold text-amber-500">Professional Tip: Plan Versioning</h4>
          <p className="text-sm text-amber-200/70 mt-1">
            When updating prices or features, always create a "New Version" rather than editing the current one. This preserves billing history for existing subscribers while applying new terms to new signups.
          </p>
        </div>
      </div>
    </div>
  );
}
