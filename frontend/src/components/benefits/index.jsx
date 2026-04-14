import { benefitsData as data } from "../../data/benefits_data/data";
import { ArrowRight, TrendingUp, Sparkles, Clock } from "../../assets/icons";
import { useNavigate } from "react-router-dom";

function Benefits() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-light-bg dark:bg-dark-bg font-dm flex flex-col gap-24 pt-16 pb-24 text-light-text1 dark:text-dark-text1 overflow-x-hidden">
      
      {/* ─── 1. Hero ─────────────────────────────── */}
      <section className="px-6 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* ─── LEFT: Content ───────────────────────── */}
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start gap-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-button-primary/30 bg-button-primary/10 text-button-primary text-xs font-semibold uppercase tracking-widest">
            {data.hero.badge}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-black leading-tight tracking-tight max-w-xl">
            {data.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-light-text2 dark:text-dark-text2 mt-2 max-w-lg">
            {data.hero.subtitle}
          </p>
        </div>

        {/* ─── RIGHT: Theme Animation Area ─────────── */}
        <div className="flex-1 relative flex items-center justify-center min-h-[460px] w-full">
          {/* Subtle background glow */}
          <div className="absolute w-[280px] h-[280px] rounded-full bg-emerald-500/10 blur-[100px] animate-pulseSlow" />
          
          {/* Central Benefits Hub */}
          <div className="relative z-10 p-8 rounded-[32px] bg-linear-to-br from-light-card1/90 to-light-bg/50 dark:from-dark-card1/90 dark:to-dark-bg/50 backdrop-blur-md border border-light-border dark:border-dark-border shadow-2xl animate-floatCard w-full max-w-sm">
             
             {/* Sparkle decoration */}
             <div className="absolute -top-6 -right-6 text-yellow-400 opacity-80 animate-pulse">
               <Sparkles size={48} strokeWidth={1.5} />
             </div>
             
             <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                 <TrendingUp size={24} />
               </div>
               <div>
                  <h3 className="font-bold text-lg">Value Delivered</h3>
                  <p className="text-xs text-light-text2 dark:text-dark-text2 mt-0.5">Optimized Performance</p>
               </div>
             </div>

             <div className="space-y-4">
               {/* Metric Bar 1 */}
               <div className="flex items-center justify-between p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-emerald-400/20 flex items-center justify-center">
                     <TrendingUp size={14} className="text-emerald-500" />
                   </div>
                   <span className="font-semibold text-sm">Efficiency</span>
                 </div>
                 <span className="font-bold text-emerald-500">+120%</span>
               </div>
               
               {/* Metric Bar 2 */}
               <div className="flex items-center justify-between p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-purple-400/20 flex items-center justify-center">
                     <Clock size={14} className="text-purple-500" />
                   </div>
                   <span className="font-semibold text-sm">Time Saved</span>
                 </div>
                 <span className="font-bold text-purple-500">40 hrs</span>
               </div>
               
               {/* Decorative Abstract Graph */}
               <div className="h-12 w-full mt-4 flex items-end gap-2 px-2">
                 <div className="w-1/5 bg-button-primary/20 rounded-t-md h-[30%] animate-pulse" style={{ animationDelay: '0ms' }}></div>
                 <div className="w-1/5 bg-button-primary/40 rounded-t-md h-[50%] animate-pulse" style={{ animationDelay: '150ms' }}></div>
                 <div className="w-1/5 bg-button-primary/60 rounded-t-md h-[70%] animate-pulse" style={{ animationDelay: '300ms' }}></div>
                 <div className="w-1/5 bg-button-primary/80 rounded-t-md h-[85%] animate-pulse" style={{ animationDelay: '450ms' }}></div>
                 <div className="w-1/5 bg-button-primary rounded-t-md h-[100%] animate-pulse" style={{ animationDelay: '600ms' }}></div>
               </div>
             </div>
          </div>

          {/* Floating Action Chips */}
          <div className="absolute bottom-[0%] right-[5%] md:right-[0%] bg-light-card1 dark:bg-dark-card1 p-3 rounded-2xl shadow-xl border border-emerald-500/30 flex items-center gap-2 animate-floatCard" style={{ animationDelay: '1s' }}>
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
             <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wide pr-1">ROI Focused</span>
          </div>
          
          <div className="absolute top-[0%] left-[5%] md:left-[0%] bg-light-card1 dark:bg-dark-card1 px-4 py-2 rounded-2xl shadow-xl border border-purple-500/30 font-bold text-sm text-purple-600 dark:text-purple-400 animate-floatCard" style={{ animationDelay: '2.5s' }}>
             Scale Rapidly
          </div>
        </div>
      </section>

      {/* ─── 2. Benefits Grid (Bento Style) ──────── */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.benefitsList.map((benefit, index) => (
            <div 
              key={index}
              className="group relative bg-light-card1 dark:bg-dark-card1 border border-light-border dark:border-dark-border p-8 rounded-3xl flex flex-col items-start gap-5 transition-all duration-300 hover:-translate-y-1 hover:border-button-primary/40 hover:shadow-xl overflow-hidden"
            >
              {/* Subtle hover background glow */}
              <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-button-primary/5 rounded-full blur-[40px] group-hover:bg-button-primary/15 transition-colors duration-500" />
              
              <div className="p-3.5 rounded-2xl bg-button-primary/10 transition-colors group-hover:bg-button-primary/20 shrink-0">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mt-2">{benefit.title}</h3>
              <p className="text-light-text2 dark:text-dark-text2 leading-relaxed text-[0.95rem]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 3. Before vs After ──────────────────── */}
      <section className="px-6 max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
           <h2 className="text-3xl font-bold tracking-tight">{data.comparison.title}</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-6 lg:gap-10">
           {/* Without Zaptian */}
           <div className="flex-1 p-8 rounded-[2rem] bg-red-50/50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 flex flex-col gap-6">
              <h3 className="text-xl font-bold text-red-600 dark:text-red-400">
                {data.comparison.without.title}
              </h3>
              <div className="flex flex-col gap-4">
                {data.comparison.without.items.map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    {data.comparison.without.icon}
                    <span className="text-light-text2 dark:text-dark-text2 font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
           </div>

           {/* With Zaptian */}
           <div className="flex-1 p-8 rounded-[2rem] bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 flex flex-col gap-6 relative overflow-hidden shadow-lg shadow-emerald-500/5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -z-10" />
              <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                {data.comparison.with.title}
              </h3>
              <div className="flex flex-col gap-4">
                {data.comparison.with.items.map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    {data.comparison.with.icon}
                    <span className="font-semibold leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* ─── 4. How It Works ─────────────────────── */}
      <section className="px-6 max-w-6xl mx-auto w-full mb-8">
        <div className="text-center mb-14">
           <h2 className="text-3xl font-bold tracking-tight">{data.howItWorks.title}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
           {/* Connecting line for desktop */}
           <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-button-primary/30 to-transparent -z-10" />
           
           {data.howItWorks.steps.map((step, idx) => (
             <div key={idx} className="flex flex-col items-center text-center gap-5 relative group">
                <div className="w-24 h-24 rounded-[2rem] bg-light-card1 dark:bg-dark-card1 border border-light-border dark:border-dark-border shadow-sm flex items-center justify-center relative group-hover:-translate-y-2 group-hover:border-button-primary/40 group-hover:shadow-lg transition-all duration-300">
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-button-primary text-white flex items-center justify-center font-bold text-sm shadow-md">
                        {idx + 1}
                    </div>
                    {step.icon}
                </div>
                <div>
                   <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                   <p className="text-light-text2 dark:text-dark-text2 text-sm max-w-[200px] leading-relaxed mx-auto">{step.description}</p>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* ─── 5. Final CTA ────────────────────────── */}
      <section className="px-6">
        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-[2.5rem] border border-button-primary/20 dark:border-button-primary/30 p-12 md:p-16 text-center flex flex-col items-center gap-8 shadow-2xl">
          {/* Gradients */}
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,color-mix(in_srgb,var(--color-button-primary,#2563eb)_8%,transparent)_0%,color-mix(in_srgb,#60a5fa_8%,transparent)_100%)] dark:hidden" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 hidden dark:block bg-[linear-gradient(135deg,color-mix(in_srgb,var(--color-button-primary,#2563eb)_15%,transparent)_0%,color-mix(in_srgb,#3b82f6_12%,transparent)_100%)]" />

          <h2 className="text-3xl md:text-5xl font-black tracking-tight max-w-xl leading-tight">
            {data.finalCta.headline}
          </h2>
          <p className="text-lg md:text-xl text-light-text2 dark:text-dark-text2 max-w-lg leading-relaxed">
            {data.finalCta.subtext}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mt-2">
            <button
              onClick={() => navigate(data.finalCta.primaryCta.path)}
              className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-button-primary hover:bg-button-primary-hover active:bg-button-primary-active text-white font-semibold text-base transition-all shadow-lg hover:shadow-button-primary/40 hover:-translate-y-0.5"
            >
              {data.finalCta.primaryCta.label}
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => navigate(data.finalCta.secondaryCta.path)}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-light-border dark:border-dark-border bg-light-card1/60 dark:bg-dark-card1/60 backdrop-blur-sm hover:bg-light-card1 dark:hover:bg-dark-card1 font-semibold text-base transition-all"
            >
              {data.finalCta.secondaryCta.label}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Benefits;
