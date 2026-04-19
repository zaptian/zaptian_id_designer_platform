import React from "react";
import { CreditCard, Download, ExternalLink, CheckCircle2 } from "lucide-react";

export default function UserBilling() {
  const currentPlan = {
    name: "Pro Tier",
    price: "$49",
    billingCycle: "monthly",
    status: "active",
    nextBillingDate: "May 15, 2026",
    features: [
      "Access to all ID Templates",
      "Export up to 500 IDs per month",
      "Priority Email Support",
      "Custom Logo Uploads"
    ]
  };

  const invoices = [
    { id: "INV-2026-004", date: "Apr 15, 2026", amount: "$49.00", status: "Paid" },
    { id: "INV-2026-003", date: "Mar 15, 2026", amount: "$49.00", status: "Paid" },
    { id: "INV-2026-002", date: "Feb 15, 2026", amount: "$49.00", status: "Paid" },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fadeInSimple">
      <div>
        <h1 className="text-3xl font-bold text-light-text1 dark:text-white tracking-tight">
          Billing & Plans
        </h1>
        <p className="text-light-text2 dark:text-gray-400 mt-1">Manage your subscription, payment methods, and billing history.</p>
      </div>

      {/* Subscription Card */}
      <div className="bg-light-card1 dark:bg-[#111827] rounded-3xl border border-light-border dark:border-white/5 shadow-xl overflow-hidden flex flex-col md:flex-row">
        <div className="p-8 md:w-2/3 border-b md:border-b-0 md:border-r border-light-border dark:border-white/5">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-black text-light-text1 dark:text-white">{currentPlan.name}</h2>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-bold rounded-full border border-emerald-500/20 uppercase tracking-wider">
                  {currentPlan.status}
                </span>
              </div>
              <p className="text-light-text2 dark:text-gray-400">Your plan renews on <span className="font-bold text-light-text1 dark:text-white">{currentPlan.nextBillingDate}</span></p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-black text-light-text1 dark:text-white">{currentPlan.price}</span>
              <span className="text-light-text2 dark:text-gray-400">/month</span>
            </div>
          </div>

          <div className="space-y-3 mt-8">
            {currentPlan.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-button-primary shrink-0" />
                <span className="text-sm font-medium text-light-text1 dark:text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-8 md:w-1/3 bg-gray-50/50 dark:bg-black/20 flex flex-col justify-center gap-4">
          <button className="w-full py-3 bg-button-primary text-white rounded-xl font-bold shadow-lg shadow-button-primary/20 hover:-translate-y-0.5 transition-transform active:scale-95">
            Upgrade Plan
          </button>
          <button className="w-full py-3 border border-light-border dark:border-white/10 text-light-text1 dark:text-white rounded-xl font-bold hover:bg-light-hover dark:hover:bg-white/5 transition-colors">
            Cancel Subscription
          </button>
        </div>
      </div>

      {/* Payment Method & Invoices */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Payment Method */}
        <div className="bg-light-card1 dark:bg-[#111827] rounded-3xl border border-light-border dark:border-white/5 shadow-xl p-8">
          <h2 className="text-xl font-bold text-light-text1 dark:text-white mb-6">Payment Method</h2>
          
          <div className="flex items-center justify-between p-4 border border-light-border dark:border-white/10 rounded-2xl mb-6 bg-white dark:bg-[#14151a]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded flex items-center justify-center shrink-0">
                <CreditCard size={20} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-light-text1 dark:text-white">Visa ending in 4242</p>
                <p className="text-xs text-light-text2 dark:text-gray-400">Expires 12/28</p>
              </div>
            </div>
            <span className="text-xs font-bold text-gray-500 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded">Default</span>
          </div>

          <button className="text-sm font-bold text-button-primary hover:text-button-primary-hover flex items-center gap-2 transition-colors">
            + Add new payment method
          </button>
        </div>

        {/* Invoice History */}
        <div className="bg-light-card1 dark:bg-[#111827] rounded-3xl border border-light-border dark:border-white/5 shadow-xl p-8">
           <h2 className="text-xl font-bold text-light-text1 dark:text-white mb-6">Invoice History</h2>
           <div className="space-y-4">
             {invoices.map((inv) => (
               <div key={inv.id} className="flex flex-wrap items-center justify-between p-4 border border-light-border dark:border-white/5 rounded-2xl hover:border-light-border-hover dark:hover:border-white/10 transition-colors">
                 <div>
                   <p className="text-sm font-bold text-light-text1 dark:text-white">{inv.date}</p>
                   <p className="text-xs text-light-text2 dark:text-gray-400">{inv.id}</p>
                 </div>
                 <div className="flex items-center gap-4 mt-2 sm:mt-0">
                    <span className="text-sm font-medium text-light-text1 dark:text-white">{inv.amount}</span>
                    <button className="p-2 text-light-text2 dark:text-gray-400 hover:text-button-primary hover:bg-button-primary/10 rounded-lg transition-colors" title="Download Invoice">
                      <Download size={16} />
                    </button>
                 </div>
               </div>
             ))}
           </div>
        </div>

      </div>
    </div>
  );
}
