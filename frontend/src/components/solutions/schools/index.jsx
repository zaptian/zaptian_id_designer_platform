import { schoolSolutionsData as data } from "../../../data/solutions_schools_data/data";
import { 
  GraduationCap, 
  XSquare, 
  Layout, 
  Users, 
  Palette, 
  RefreshCcw,
  Shield,
  Zap,
  TrendingUp,
  Layers,
  Sparkles,
  Library,
  ClipboardList,
  School,
} from "../../../assets/icons";

// Solution icons mapped to feature properties
const solutionIcons = [Zap, Palette, Layout, Shield, RefreshCcw];

// Benefits icons
const benefitIcons = [TrendingUp, Users, Palette, Layers];

// Use case icons
const useCaseIcons = [GraduationCap, Users, Library, ClipboardList];

function Schools() {
  return (
    <div className="w-full bg-light-bg dark:bg-dark-bg font-dm flex flex-col pt-16 pb-24 text-light-text1 dark:text-dark-text1 overflow-x-hidden">
      
      {/* ─── Hero ─── */}
      <section className="px-6 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-8 mb-20">
        
        {/* ─── LEFT: Content ───────────────────────── */}
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-6">
            <School size={14} />
            {data.hero.badge}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-black leading-tight tracking-tight max-w-xl">
            {data.hero.title}
          </h1>
          <p className="text-light-text2 dark:text-dark-text2 text-lg mt-6 max-w-lg leading-relaxed">
             Equip your students, faculty, and administrative staff with professional, securely-identifiable ID cards ready for the high demands of the academic year.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
             <button className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold shadow-lg shadow-emerald-500/30 transition-transform hover:-translate-y-1">
                Start for Free
             </button>
             <button className="px-8 py-3.5 bg-light-card1 dark:bg-dark-card1 border border-light-border dark:border-dark-border rounded-xl font-bold transition-colors hover:bg-light-hover dark:hover:bg-dark-hover">
                Book demo
             </button>
          </div>
        </div>

        {/* ─── RIGHT: Theme Animation Area ─────────── */}
        <div className="flex-1 relative flex items-center justify-center min-h-[460px] w-full mt-8 lg:mt-0 width_425px_hidden animate-floatCard drop-shadow-2xl">
           <div className="absolute w-[350px] h-[350px] rounded-full bg-emerald-500/10 blur-[100px] animate-pulseSlow" />

           {/* Education Dashboard */}
           <div className="relative z-10 w-[300px] h-[220px] rounded-[2rem] bg-light-card1/90 dark:bg-dark-card1/90 backdrop-blur-xl border border-light-border dark:border-dark-border shadow-2xl flex flex-col items-center justify-center gap-4 group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.02] to-transparent pointer-events-none rounded-[2rem] group-hover:bg-emerald-500/[0.05] transition-colors duration-500" />
              <div className="flex items-center gap-3 mb-2 opacity-80">
                 <School size={24} className="text-emerald-500" />
                 <span className="font-bold text-lg tracking-widest text-light-text1 dark:text-white uppercase transition-all duration-300 group-hover:tracking-[0.2em]">University</span>
              </div>
              <div className="w-16 h-2 bg-light-border dark:bg-dark-border rounded-full transition-all duration-300 group-hover:w-20" />
              <div className="w-24 h-2 bg-light-border dark:bg-dark-border rounded-full opacity-50 transition-all duration-300 group-hover:w-16" />
           </div>

           {/* Animated Floating ID 1 - Student Info */}
           <div className="absolute z-20 top-4 right-4 lg:right-12 p-3 rounded-2xl bg-white dark:bg-[#1a1a1e] border border-light-border dark:border-white/10 shadow-xl animate-floatCard w-[140px] rotate-12" style={{ animationDelay: '0ms' }}>
              <div className="w-full aspect-[3/4] bg-gradient-to-b from-blue-500/20 to-transparent rounded-xl flex flex-col items-center p-3 relative overflow-hidden text-blue-500 border border-blue-500/20">
                 <GraduationCap size={20} className="mt-2" />
                 <div className="w-full h-1.5 bg-blue-500/30 rounded-full mt-4" />
                 <div className="w-2/3 h-1 bg-blue-500/20 rounded-full mt-2" />
                 <span className="absolute bottom-2 text-[8px] font-black tracking-widest uppercase">Student ID</span>
              </div>
           </div>

           {/* Animated Floating ID 2 - Faculty/Staff */}
           <div className="absolute z-30 bottom-12 left-4 lg:left-8 p-3 rounded-2xl bg-white dark:bg-[#1a1a1e] border border-emerald-500/40 shadow-[0_10px_40px_-5px_rgba(16,185,129,0.3)] animate-floatCard w-[140px] -rotate-6" style={{ animationDelay: '1000ms' }}>
              <div className="w-full aspect-[3/4] bg-gradient-to-b from-emerald-600 to-teal-600 rounded-xl flex flex-col items-center p-3 text-white">
                 <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 mt-2 shadow-sm flex items-center justify-center backdrop-blur-sm">
                    <Users size={16} />
                 </div>
                 <div className="w-12 h-1.5 bg-white/50 rounded-full mt-4" />
                 <div className="w-8 h-1 bg-white/30 rounded-full mt-2" />
                 <span className="absolute bottom-5 text-[8px] font-black tracking-widest uppercase text-white/90">Faculty</span>
              </div>
           </div>

           {/* Spin trackers representing yearly batches */}
           <div className="absolute z-0 flex items-center justify-center opacity-30 pointer-events-none">
              <div className="w-[300px] h-[300px] border-2 border-dashed border-emerald-500/20 rounded-full animate-[spin_30s_linear_infinite]" />
              <div className="absolute w-[200px] h-[200px] border-2 border-dashed border-blue-500/30 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
           </div>
        </div>
      </section>

      {/* ─── The Challenge vs Use Cases (Split Row) ─── */}
      <section className="px-6 max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-8 mb-24 animate-slideUp">
         
         {/* The Challenge Card */}
         <div className="flex-[3] p-10 rounded-[2.5rem] bg-rose-500/5 border border-rose-500/10 shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rose-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none transition-colors duration-700 group-hover:bg-rose-500/10" />
            <h3 className="text-2xl font-black mb-2 text-light-text1 dark:text-white flex items-center gap-3 relative z-10 w-full mb-3">
               {data.challenge.title}
            </h3>
            <p className="text-light-text2 dark:text-gray-400 font-medium mb-8 relative z-10 max-w-lg">
               {data.challenge.subtitle}
            </p>
            
            <div className="space-y-4 relative z-10">
               {data.challenge.items.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-center p-4 rounded-2xl bg-white/50 dark:bg-black/20 backdrop-blur-md border border-light-border dark:border-white/5 transition-transform duration-300 hover:-translate-y-1">
                     <div className="w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 shrink-0 shadow-inner">
                        <XSquare size={14} />
                     </div>
                     <span className="font-medium text-[0.95rem] text-light-text1 dark:text-gray-300 leading-relaxed">{item}</span>
                  </div>
               ))}
            </div>
         </div>

         {/* Common Use Cases Card */}
         <div className="flex-[2] flex flex-col gap-8">
            <div className="p-10 rounded-[2.5rem] bg-light-card1 dark:bg-dark-card1 border border-light-border dark:border-dark-border shadow-lg h-full flex flex-col justify-center relative overflow-hidden">
               <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none" />
               <h3 className="text-2xl font-bold mb-8 relative z-10 flex items-center gap-3">
                  {data.useCases.title}
               </h3>
               <div className="flex flex-col gap-4 relative z-10">
                  {data.useCases.items.map((item, idx) => {
                     const Icon = useCaseIcons[idx] || GraduationCap;
                     return (
                        <div key={idx} className="flex items-center gap-4 bg-light-bg dark:bg-[#151515] p-5 rounded-2xl border border-light-border dark:border-white/5 shadow-sm transition-all hover:border-emerald-500/30 cursor-default hover:scale-[1.02]">
                           <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                              <Icon size={18} />
                           </div>
                           <span className="font-semibold text-[0.95rem]">{item}</span>
                        </div>
                     )
                  })}
               </div>
            </div>
         </div>
      </section>

      {/* ─── Zaptian Solution (Bento Grid) ─── */}
      <section className="px-6 max-w-7xl mx-auto w-full mb-32 animate-slideUp" style={{ animationDelay: '150ms' }}>
         <div className="mb-12 text-center md:text-left flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center hidden md:flex">
               <Sparkles size={20} className="text-emerald-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black">{data.solution.title}</h2>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {data.solution.features.map((feature, idx) => {
               const Icon = solutionIcons[idx] || Sparkles;
               
               // Tailored 12-col grid logic for 5 items: [6,6] and [4,4,4]
               let spanClass = "col-span-1 md:col-span-1";
               if (idx === 0 || idx === 1) {
                  spanClass += " lg:col-span-6";
               } else {
                  spanClass += " lg:col-span-4";
               }
               if (idx === 4) {
                  spanClass += " md:col-span-2 lg:col-span-4"; // center final row element if wrapped
               }
               
               return (
                  <div key={idx} className={`p-8 rounded-[2.5rem] bg-gradient-to-br from-light-card1 to-light-bg dark:from-dark-card1 dark:to-[#0f0f12] border border-light-border dark:border-dark-border shadow-md hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4 group ${spanClass}`}>
                     <div className="w-14 h-14 rounded-[1rem] bg-emerald-500/10 border border-emerald-500/10 flex items-center justify-center text-emerald-500 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white group-hover:scale-110 shadow-inner">
                        <Icon size={24} />
                     </div>
                     <h3 className="text-xl font-bold mt-2">{feature.name}</h3>
                     <p className="text-light-text2 dark:text-gray-400 font-medium text-[0.95rem] leading-relaxed max-w-[90%]">
                        {feature.description}
                     </p>
                  </div>
               )
            })}
         </div>
      </section>

      {/* ─── Key Educational Benefits ─── */}
      <section className="px-6 max-w-7xl mx-auto w-full animate-slideUp" style={{ animationDelay: '300ms' }}>
         <div className="p-10 xl:p-16 rounded-[3rem] bg-[#0A0A0B] border border-white/10 shadow-2xl relative overflow-hidden">
            {/* Dark Mode Ambient Radial Mesh Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="text-center mb-16 relative z-10 flex flex-col items-center">
               <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-gray-300 text-[10px] font-bold uppercase tracking-widest mb-4">
                  Academic Yield
               </span>
               <h2 className="text-3xl md:text-5xl font-black text-white max-w-3xl leading-tight">{data.benefits.title}</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
               {data.benefits.items.map((benefit, idx) => {
                  const Icon = benefitIcons[idx] || Sparkles;
                  return (
                     <div key={idx} className="flex flex-col items-center text-center gap-5 group">
                        <div className="w-[72px] h-[72px] rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 backdrop-blur-xl group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_-5px_rgba(16,185,129,0.2)]">
                           <Icon size={28} />
                        </div>
                        <h4 className="text-white font-bold text-[1.1rem] px-2">{benefit.name}</h4>
                        <p className="text-gray-400 text-[0.85rem] font-medium leading-relaxed max-w-xs">
                           {benefit.description}
                        </p>
                     </div>
                  )
               })}
            </div>
         </div>
      </section>

    </div>
  );
}

export default Schools;
