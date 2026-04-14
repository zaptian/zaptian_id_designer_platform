import { securityData as data } from "../../../data/customer_security_data/data";
import { 
  ShieldCheck, 
  Lock, 
  FileLock2, 
  EyeOff, 
  Server, 
  CheckCircle2, 
  FolderKey, 
  Key
} from "../../../assets/icons";

// Icons for overview grid
const overviewIcons = [FileLock2, EyeOff, FolderKey, Server, ShieldCheck, Lock];

function Security() {
  return (
    <div className="w-full bg-light-bg dark:bg-dark-bg font-dm flex flex-col pt-16 pb-24 text-light-text1 dark:text-dark-text1 overflow-x-hidden">
      
      {/* ─── Hero ─── */}
      <section className="px-6 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-8 mb-24">
        
        {/* ─── LEFT: Content ───────────────────────── */}
        <div className="flex-[1.2] text-center lg:text-left flex flex-col items-center lg:items-start">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-widest mb-6">
            <ShieldCheck size={14} />
            {data.hero.badge}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] font-black leading-tight tracking-tight max-w-2xl mb-6">
            {data.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-light-text2 dark:text-dark-text2 max-w-xl leading-relaxed mb-10">
            {data.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
             <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-500/30 transition-transform hover:-translate-y-1 w-full sm:w-auto">
                Read Privacy Policy
             </button>
          </div>
        </div>

        {/* ─── RIGHT: Theme Animation Area ─────────── */}
        <div className="flex-1 relative flex items-center justify-center min-h-[460px] w-full mt-8 lg:mt-0 width_425px_hidden animate-floatCard drop-shadow-2xl">
           <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[100px] animate-pulseSlow" />

           {/* Central Anchor: The Shield Vault */}
           <div className="relative z-10 w-[280px] h-[340px] rounded-[2.5rem] bg-light-card1/90 dark:bg-[#0c0f1a]/90 backdrop-blur-xl border border-light-border dark:border-blue-500/20 shadow-2xl flex flex-col items-center justify-center p-6 group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] to-transparent pointer-events-none rounded-[2.5rem]" />
              
              {/* Inner animated shield glow */}
              <div className="w-24 h-24 mb-6 relative flex items-center justify-center">
                 <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/40 transition-colors duration-500" />
                 <ShieldCheck size={56} className="text-blue-500 relative z-10" />
              </div>
              
              <h3 className="text-xl font-black mb-2 dark:text-white">Encrypted Node</h3>
              <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-[10px] font-bold uppercase tracking-widest border border-emerald-500/20">
                 <Lock size={10} /> Active
              </div>
              
              <div className="w-full h-1 bg-light-border dark:bg-white/5 rounded-full mt-8 relative overflow-hidden">
                 <div className="absolute top-0 left-0 bottom-0 w-1/3 bg-blue-500 rounded-full animate-[shimmer_2s_infinite]" />
              </div>
           </div>

           {/* Animated Floating Asset 1 - CSV Upload */}
           <div className="absolute z-20 top-8 right-2 lg:right-6 p-3 rounded-2xl bg-white dark:bg-[#1a1c23] border border-light-border dark:border-white/10 shadow-xl animate-floatCard w-[140px] rotate-12 flex flex-col items-center gap-3" style={{ animationDelay: '0ms' }}>
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 shadow-inner">
                 <FileLock2 size={20} />
              </div>
              <div className="flex flex-col items-center gap-1.5 w-full">
                 <span className="text-[9px] font-black tracking-widest uppercase text-light-text1 dark:text-white">data.csv</span>
                 <div className="w-full h-1 bg-light-border dark:bg-white/10 rounded-full" />
                 <div className="w-1/2 h-1 bg-light-border dark:bg-white/10 rounded-full" />
              </div>
           </div>

           {/* Animated Floating Asset 2 - Secure Database */}
           <div className="absolute z-30 bottom-16 left-0 lg:left-6 p-4 rounded-2xl bg-gradient-to-br from-[#0c0f1a] to-[#121626] border border-blue-500/30 shadow-[0_10px_40px_-5px_rgba(59,130,246,0.3)] animate-floatCard w-[160px] -rotate-6" style={{ animationDelay: '1000ms' }}>
              <div className="flex items-center gap-3 mb-3">
                 <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 shadow-inner flex items-center justify-center text-blue-400">
                    <Server size={14} />
                 </div>
                 <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-bold tracking-widest text-blue-300">SERVER ACCESS</span>
                    <span className="text-[10px] font-black text-white">RESTRICTED</span>
                 </div>
              </div>
           </div>

           {/* Outer orbital protection rings */}
           <div className="absolute z-0 w-[420px] h-[420px] border border-dashed border-light-border dark:border-blue-500/20 rounded-full animate-[spin_30s_linear_infinite] pointer-events-none opacity-60" />
           <div className="absolute z-0 w-[300px] h-[300px] border-2 border-solid border-blue-500/5 rounded-full pointer-events-none opacity-60" />
        </div>
      </section>

      {/* ─── Security Framework Grids (6 Overview Tiles) ─── */}
      <section className="px-6 max-w-7xl mx-auto w-full mb-32 animate-slideUp">
         <div className="mb-12 text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-black">{data.overview.title}</h2>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] pointer-events-none" />

            {data.overview.groups.map((group, idx) => {
               const Icon = overviewIcons[idx] || ShieldCheck;
               return (
                  <div key={idx} className="p-8 rounded-[2rem] bg-light-card1 dark:bg-[#11141d] border border-light-border dark:border-blue-500/10 shadow-lg hover:border-blue-500/30 transition-all duration-300 flex flex-col group relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-[100%]" />
                     
                     <div className="w-12 h-12 rounded-[1rem] bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6">
                        <Icon size={20} />
                     </div>
                     <h3 className="text-xl font-bold mb-4 dark:text-white tracking-tight">{group.title}</h3>
                     <ul className="space-y-3">
                        {group.items.map((item, itemIdx) => (
                           <li key={itemIdx} className="flex items-start gap-3">
                              <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                              <span className="text-[0.95rem] text-light-text2 dark:text-gray-400 font-medium leading-relaxed">{item}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               )
            })}
         </div>
      </section>

      {/* ─── Deep Dive Details Stacked Cards ─── */}
      <section className="px-6 max-w-5xl mx-auto w-full animate-slideUp" style={{ animationDelay: '200ms' }}>
         <div className="mb-12 text-center text-light-text2 dark:text-dark-text2 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-light-border dark:bg-white/20" />
            Platform Implementation Details
            <div className="h-px w-8 bg-light-border dark:bg-white/20" />
         </div>

         <div className="flex flex-col gap-16">
            {data.detailedSections.map((section, idx) => (
               <div key={idx} className="relative group">
                  {/* Vertical connecting line (skip for last) */}
                  {idx !== data.detailedSections.length - 1 && (
                     <div className="absolute left-6 top-24 bottom-[-64px] w-px bg-light-border dark:bg-white/10 hidden md:block" />
                  )}

                  <div className="flex flex-col md:flex-row gap-8 lg:gap-12 relative z-10 w-full">
                     {/* Left Pillar */}
                     <div className="w-full md:w-1/3 flex flex-col md:items-end md:text-right pt-2 md:pt-4">
                        <div className="w-12 h-12 rounded-full bg-light-card1 dark:bg-[#11141d] border border-light-border dark:border-blue-500/20 shadow-lg flex items-center justify-center text-blue-500 mb-4 md:absolute md:left-[24px] md:-translate-x-1/2">
                           <Key size={18} />
                        </div>
                        <h3 className="text-2xl font-black dark:text-white mb-2">{section.title}</h3>
                        <div className="h-1 w-12 bg-blue-500 md:ml-auto md:mr-0 inline-block mb-2 md:mb-0" />
                     </div>

                     {/* Right Content Stream */}
                     <div className="w-full md:w-2/3 flex flex-col gap-5 bg-light-card1 dark:bg-[#0c0f1a] p-8 md:p-10 rounded-[2rem] border border-light-border dark:border-white/5 shadow-md">
                        {section.features.map((feature, fIdx) => (
                           <div key={fIdx} className="flex flex-col gap-2 bg-white/50 dark:bg-white/5 p-5 rounded-xl border border-light-border dark:border-white/5 hover:border-blue-500/30 transition-colors">
                              <h4 className="text-lg font-bold text-light-text1 dark:text-gray-200">
                                 {feature.name}
                              </h4>
                              <p className="text-[0.95rem] text-light-text2 dark:text-gray-400 font-medium leading-relaxed">
                                 {feature.description}
                              </p>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>

    </div>
  );
}

export default Security;
