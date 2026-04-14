import React, { useState } from 'react';
import { faqData as data } from "../../../data/resource_faq_data/data";
import { 
  Palette, 
  Database, 
  Printer, 
  Briefcase, 
  CreditCard, 
  ShieldCheck, 
  Zap,
  ChevronDown,
  MessageCircleQuestion
} from "../../../assets/icons";

// Map string icon names from data to actual lucide components
const iconMap = {
  Palette,
  Database,
  Printer,
  Briefcase,
  CreditCard,
  ShieldCheck,
  Zap
};

function FAQ() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (idx) => {
    if (activeQuestion === idx) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(idx);
    }
  };

  // Switch tab and fully reset question state
  const handleTabChange = (idx) => {
    setActiveTab(idx);
    setActiveQuestion(null);
  };

  const activeCategory = data.categories[activeTab];

  return (
    <div className="w-full bg-light-bg dark:bg-dark-bg font-dm flex flex-col pt-16 pb-32 text-light-text1 dark:text-dark-text1 min-h-screen">
      
      {/* ─── Hero ─── */}
      <section className="px-6 max-w-5xl mx-auto w-full text-center flex flex-col items-center mb-16">
        <div className="w-16 h-16 rounded-2xl bg-button-primary/10 flex items-center justify-center text-button-primary mb-6 shadow-inner">
           <MessageCircleQuestion size={32} />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-black leading-tight tracking-tight mb-6">
          {data.hero.title}
        </h1>
        <p className="text-xl text-light-text2 dark:text-dark-text2 max-w-2xl leading-relaxed">
          {data.hero.subtitle}
        </p>
      </section>

      {/* ─── FAQ Interactive Layout ─── */}
      <section className="px-6 max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-8 lg:gap-12">
         
         {/* LEFT: Category Sidebar */}
         <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col gap-2">
            {data.categories.map((category, idx) => {
               const Icon = iconMap[category.icon] || Zap;
               const isActive = activeTab === idx;
               return (
                  <button
                    key={idx}
                    onClick={() => handleTabChange(idx)}
                    className={`flex items-center gap-3 px-5 py-4 rounded-xl text-left font-semibold transition-all duration-300 w-full ${
                       isActive 
                         ? "bg-button-primary text-white shadow-lg shadow-button-primary/30 translate-x-2" 
                         : "bg-light-card1 dark:bg-dark-card1 text-light-text2 dark:text-gray-400 hover:bg-light-hover dark:hover:bg-white/5 border border-transparent dark:border-white/5 hover:translate-x-1"
                    }`}
                  >
                     <Icon size={18} className={isActive ? "text-white" : "text-button-primary"} />
                     <span className="text-[0.95rem]">{category.name}</span>
                  </button>
               );
            })}
         </div>

         {/* RIGHT: Questions Accordion */}
         <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col">
            <div className="p-8 md:p-10 rounded-[2rem] bg-light-card1 dark:bg-[#0c0c0e] border border-light-border dark:border-dark-border shadow-xl min-h-[500px]">
               <h2 className="text-2xl font-black mb-8 pb-4 border-b border-light-border dark:border-white/10 flex items-center gap-3 dark:text-white">
                  {activeCategory.name}
               </h2>
               
               <div className="flex flex-col gap-4">
                  {activeCategory.questions.map((item, idx) => {
                     const isExpanded = activeQuestion === idx;
                     return (
                        <div 
                           key={idx} 
                           className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                              isExpanded 
                                ? "bg-button-primary/5 border-button-primary/30 shadow-md" 
                                : "bg-white/50 dark:bg-white/5 border-light-border dark:border-white/5 hover:border-button-primary/40"
                           }`}
                        >
                           <button
                             onClick={() => toggleQuestion(idx)}
                             className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                           >
                              <span className="font-bold text-[1.05rem] text-light-text1 dark:text-gray-200">
                                 {item.q}
                              </span>
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                                 isExpanded ? "bg-button-primary text-white rotate-180" : "bg-button-primary/10 text-button-primary"
                              }`}>
                                 <ChevronDown size={18} />
                              </div>
                           </button>
                           
                           {/* Accordion Content */}
                           <div 
                              className={`grid transition-all duration-300 ease-in-out ${
                                 isExpanded ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                              }`}
                           >
                              <div className="overflow-hidden px-6">
                                 <p className="text-[0.95rem] text-light-text2 dark:text-gray-400 leading-relaxed pt-2 border-t border-button-primary/10 dark:border-white/5">
                                    {item.a}
                                 </p>
                              </div>
                           </div>
                        </div>
                     )
                  })}
               </div>
            </div>
         </div>
         
      </section>

      {/* ─── Still Have Questions CTA ─── */}
      <section className="px-6 max-w-4xl mx-auto w-full mt-24">
         <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-button-primary to-[#0f4c9c] text-white text-center shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="absolute top-0 left-0 w-full h-full bg-black/10 pointer-events-none" />
            <div className="relative z-10 text-left">
               <h3 className="text-2xl font-black mb-2">Still have questions?</h3>
               <p className="text-white/80 font-medium">Our support team is ready to help you get moving.</p>
            </div>
            <button className="px-8 py-4 bg-white text-button-primary rounded-xl font-bold hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)] transition-all hover:-translate-y-1 relative z-10 whitespace-nowrap">
               Contact Support
            </button>
         </div>
      </section>

    </div>
  );
}

export default FAQ;
