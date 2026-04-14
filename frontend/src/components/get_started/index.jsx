import { getStartedData as data } from "../../data/get_started_data/data";
import { 
  Rocket, 
  ArrowRight, 
  CheckCircle2, 
  UserPlus, 
  LayoutTemplate, 
  FileSpreadsheet, 
  Palette, 
  Eye, 
  Download,
  CreditCard,
  TrendingUp,
  BookOpen,
  Sparkles
} from "../../assets/icons";

// Array of icons mapping perfectly to the 6 steps
const stepIcons = [
  UserPlus, LayoutTemplate, FileSpreadsheet, Palette, Eye, Download
];

function GetStarted() {
  return (
    <div className="w-full bg-light-bg dark:bg-dark-bg font-dm flex flex-col pt-16 pb-24 text-light-text1 dark:text-dark-text1">
      {/* ─── Header ─── */}
      <div className="px-6 max-w-5xl mx-auto w-full text-center flex flex-col items-center mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-button-primary/30 bg-button-primary/10 text-button-primary text-xs font-semibold uppercase tracking-widest mb-6">
          <Rocket size={14} />
          {data.hero.badge}
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-black leading-tight tracking-tight max-w-3xl">
          {data.hero.title}
        </h1>
      </div>

      {/* ─── Main Content Base ─── */}
      <section className="px-6 max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-8 lg:gap-12 mb-20">
        
        {/* LEFT: Quick Start Timeline */}
        <div className="flex-[3] flex flex-col p-8 md:p-10 rounded-[2rem] bg-light-card1 dark:bg-dark-card1 border border-light-border dark:border-dark-border shadow-xl relative overflow-hidden">
           {/* Glow decoration */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-button-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
           
           <h3 className="text-2xl font-bold mb-10 relative z-10 flex items-center gap-3">
              <Sparkles size={24} className="text-button-primary" />
              {data.quickStart.title}
           </h3>
           
           <div className="relative z-10 space-y-2">
             {data.quickStart.steps.map((step, idx) => {
               const Icon = stepIcons[idx] || Sparkles;
               return (
                 <div key={idx} className="flex gap-5 group">
                    <div className="flex flex-col items-center">
                       <div className="w-12 h-12 rounded-full bg-light-bg dark:bg-dark-bg border-[3px] border-button-primary/20 flex items-center justify-center text-button-primary shadow-sm transition-all duration-300 group-hover:bg-button-primary group-hover:text-white group-hover:border-button-primary group-hover:scale-110">
                          <Icon size={20} />
                       </div>
                       {idx !== data.quickStart.steps.length - 1 && (
                         <div className="w-[3px] h-full min-h-[40px] bg-button-primary/10 rounded-full mt-2" />
                       )}
                    </div>
                    <div className="pb-8 pt-2.5">
                       <span className="text-[0.7rem] font-black uppercase text-button-primary tracking-widest mb-1.5 block">Step {idx + 1}</span>
                       <p className="text-[1.1rem] font-medium text-light-text1 dark:text-dark-text1 transition-colors group-hover:text-button-primary">{step}</p>
                    </div>
                 </div>
               );
             })}
           </div>
        </div>

        {/* RIGHT: Options & Resources Stack */}
        <div className="flex-[2] flex flex-col gap-6">
           {/* Getting Started Options Card */}
           <div className="p-8 rounded-[2rem] bg-gradient-to-br from-button-primary/10 to-transparent border border-button-primary/20 shadow-lg relative overflow-hidden">
             {/* Micro-glow */}
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-button-primary/20 rounded-full blur-2xl" />
             
             <h3 className="text-xl font-bold mb-6 flex items-center gap-2 relative z-10">
                {data.options.title}
             </h3>
             <div className="space-y-4 relative z-10">
               {data.options.items.map((opt, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white/60 dark:bg-[#1a1a1e]/60 backdrop-blur-xl border border-light-border dark:border-dark-border transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-button-primary/10">
                     <h4 className="font-bold text-[1.1rem] mb-2 flex items-center gap-2">
                        {idx === 0 ? <CreditCard size={18} className="text-emerald-500" /> : <TrendingUp size={18} className="text-button-primary" />}
                        {opt.name}
                     </h4>
                     <p className="text-sm font-medium text-light-text2 dark:text-dark-text2 leading-relaxed">{opt.description}</p>
                  </div>
               ))}
             </div>
           </div>

           {/* Helpful Resources Card */}
           <div className="p-8 rounded-[2rem] bg-light-card1 dark:bg-dark-card1 border border-light-border dark:border-dark-border shadow-sm flex-1">
             <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <BookOpen className="text-button-primary" size={20} />
                {data.resources.title}
             </h3>
             <ul className="space-y-4">
                {data.resources.items.map((item, idx) => (
                   <li key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-light-bg dark:hover:bg-dark-bg transition-colors border border-transparent hover:border-light-border dark:hover:border-dark-border">
                     <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                     <span className="text-[0.95rem] font-medium text-light-text1 dark:text-dark-text1 leading-relaxed">{item}</span>
                   </li>
                ))}
             </ul>
           </div>
        </div>
      </section>

      {/* ─── Final CTA (Modern Asymmetric Design) ─── */}
      <section className="px-6 max-w-7xl mx-auto w-full mt-10">
         <div className="rounded-[2.5rem] bg-light-card1 dark:bg-[#0c0c0e] border border-button-primary/20 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between p-10 lg:p-16 gap-12 group">
            
            {/* Animated Ambient Backgrounds */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-button-primary/20 via-blue-500/5 to-transparent rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 pointer-events-none group-hover:bg-button-primary/30 transition-colors duration-700" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[60px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
            
            {/* Left Content Area */}
            <div className="relative z-10 flex-1 text-center lg:text-left">
               <div className="inline-flex items-center justify-center lg:justify-start gap-2 px-3 py-1 rounded-full bg-button-primary/10 border border-button-primary/20 text-button-primary text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                  <Sparkles size={14} /> Ready to dive in?
               </div>
               <h2 className="text-4xl md:text-5xl font-black mb-5 text-light-text1 dark:text-white leading-tight tracking-tight">
                  {data.cta.title}
               </h2>
               <p className="text-light-text2 dark:text-gray-400 text-lg md:text-xl font-medium max-w-xl mx-auto lg:mx-0">
                  {data.cta.subtitle}
               </p>
            </div>
            
            {/* Right Interactive Area */}
            <div className="relative z-10 flex flex-col sm:flex-row md:flex-row md:items-center md:justify-center xl:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
               <button className="px-8 py-4 bg-button-primary hover:bg-button-primary-hover text-white rounded-2xl font-bold text-[1.05rem] shadow-[0_0_40px_-10px_rgba(var(--button-primary),0.5)] hover:shadow-[0_0_60px_-15px_rgba(var(--button-primary),0.7)] transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto hover:-translate-y-1">
                  {data.cta.primaryButton}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
               </button>
               <button className="px-8 py-4 bg-light-bg dark:bg-white/5 border border-light-border dark:border-white/10 text-light-text1 dark:text-white hover:bg-light-hover dark:hover:bg-white/10 rounded-2xl font-bold text-[1.05rem] transition-all duration-300 flex items-center justify-center w-full sm:w-auto backdrop-blur-sm">
                  {data.cta.secondaryButton}
               </button>
            </div>
         </div>
      </section>

    </div>
  );
}

export default GetStarted;
