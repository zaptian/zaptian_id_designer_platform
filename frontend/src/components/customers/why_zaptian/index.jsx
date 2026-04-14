import { whyZaptianData as data } from "../../../data/customer_why_zaptian_data/data";
import {
  CheckCircle2,
  X,
  Target,
  Zap,
  MousePointer2,
  Workflow,
  Clock,
  Database,
  Compass,
  Layers,
  Layout,
  ArrowRight,
} from "lucide-react";

// Icons for the 6 differences
const diffIcons = [MousePointer2, Workflow, Clock, Database, Compass, Layers];

function Why_Zaptian() {
  return (
    <div className="w-full bg-light-bg dark:bg-dark-bg font-dm flex flex-col pt-16 pb-24 text-light-text1 dark:text-dark-text1 overflow-x-hidden">
      {/* ─── Hero ─── */}
      <section className="px-6 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-8 mb-24">
        {/* ─── LEFT: Content ───────────────────────── */}
        <div className="flex-[1.2] text-center lg:text-left flex flex-col items-center lg:items-start">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-button-primary/30 bg-button-primary/10 text-button-primary text-xs font-semibold uppercase tracking-widest mb-6">
            <Target size={14} />
            {data.hero.badge}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] font-black leading-tight tracking-tight max-w-2xl mb-6">
            {data.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-light-text2 dark:text-dark-text2 max-w-xl leading-relaxed mb-10">
            The ultimate platform engineered specifically for bulk ID card
            creation. Stop wrestling with disjointed tools and generic design
            software, start automating your identity management workflow today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="px-8 py-4 bg-button-primary hover:bg-button-primary-hover text-white rounded-xl font-bold shadow-lg shadow-button-primary/30 transition-transform hover:-translate-y-1 w-full sm:w-auto">
              Explore The Editor
            </button>
          </div>
        </div>

        {/* ─── RIGHT: Theme Animation Area ─────────── */}
        <div className="flex-1 relative flex items-center justify-center min-h-[460px] w-full mt-8 lg:mt-0 width_425px_hidden animate-floatCard drop-shadow-2xl text-left">
          <div className="absolute w-[400px] h-[400px] rounded-full bg-button-primary/10 blur-[100px] animate-pulseSlow" />

          {/* Central Anchor: Drag & Drop Editor Canvas */}
          <div className="relative z-10 w-[340px] h-[250px] rounded-[2rem] bg-light-card1/90 dark:bg-dark-card1/90 backdrop-blur-xl border border-light-border dark:border-dark-border shadow-2xl flex flex-col items-center p-6 group cursor-crosshair">
            <div className="absolute inset-0 bg-gradient-to-br from-button-primary/[0.02] to-transparent pointer-events-none rounded-[2rem]" />

            <div className="w-full flex justify-between items-center mb-4 opacity-70">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest opacity-50">
                Zaptian Studio
              </span>
            </div>

            <div className="w-full h-full border-2 border-dashed border-button-primary/30 rounded-xl flex items-center justify-center bg-button-primary/5 transition-all duration-300 group-hover:bg-button-primary/10 group-hover:border-button-primary/50 relative overflow-hidden">
              <div className="flex flex-col items-center gap-2 opacity-60">
                <MousePointer2
                  size={24}
                  className="text-button-primary animate-bounce"
                />
                <span className="text-xs font-bold text-light-text1 dark:text-white">
                  Drop template here
                </span>
              </div>
              {/* Visual parsing bar on hover */}
              <div className="absolute left-0 bottom-0 top-0 w-1 bg-button-primary/50 opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_2s_infinite]" />
            </div>
          </div>

          {/* Animated Floating Asset 1 - Template Widget */}
          <div
            className="absolute z-20 top-4 right-2 lg:right-6 p-4 rounded-2xl bg-white dark:bg-[#1a1a1e] border border-light-border dark:border-white/10 shadow-xl animate-floatCard w-[150px] rotate-6"
            style={{ animationDelay: "0ms" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 shadow-inner">
                <Layout size={16} />
              </div>
              <div>
                <div className="w-10 h-1.5 bg-light-border dark:bg-dark-border rounded-full mb-1.5" />
                <div className="w-6 h-1 bg-light-border dark:bg-dark-border rounded-full" />
              </div>
            </div>
            <div className="w-full h-20 bg-gradient-to-br from-light-bg to-light-border/50 dark:from-dark-bg dark:to-white/5 rounded-xl border border-light-border dark:border-dark-border" />
          </div>

          {/* Animated Floating Asset 2 - Completed Badge Slide */}
          <div
            className="absolute z-30 bottom-12 left-0 lg:left-4 p-3 rounded-2xl bg-gradient-to-br from-button-primary to-blue-600 shadow-[0_10px_40px_-5px_rgba(var(--button-primary),0.4)] animate-floatCard w-[160px] -rotate-6 flex items-center gap-4 text-white hover:scale-105 transition-transform"
            style={{ animationDelay: "1000ms" }}
          >
            <div className="w-12 h-12 rounded-[1rem] bg-white/20 border border-white/30 shadow-inner flex items-center justify-center backdrop-blur-sm shrink-0">
              <CheckCircle2 size={20} />
            </div>
            <div className="flex flex-col gap-1.5 w-full">
              <span className="text-[10px] font-black tracking-widest uppercase text-white/90">
                Batch Processed
              </span>
              <div className="w-full h-1.5 bg-white/50 rounded-full" />
              <div className="w-2/3 h-1.5 bg-white/30 rounded-full" />
            </div>
          </div>

          {/* Decorative dashed workflow ring */}
          <div className="absolute z-0 w-[400px] h-[400px] lg:w-[460px] lg:h-[460px] border border-dashed border-light-border dark:border-white/10 rounded-full animate-[spin_40s_linear_infinite] pointer-events-none opacity-40" />
          <div className="absolute z-0 w-[280px] h-[280px] border border-dashed border-button-primary/20 rounded-full animate-[spin_25s_linear_infinite_reverse] pointer-events-none opacity-60" />
        </div>
      </section>

      {/* ─── What Makes Zaptian Different (6 Feature Grid) ─── */}
      <section className="px-6 max-w-7xl mx-auto w-full mb-32 animate-slideUp">
        <div className="mb-12 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-black">
            {data.differences.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {/* Ambient Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(var(--button-primary),0.05)_0%,transparent_70%)] pointer-events-none" />

          {data.differences.features.map((feature, idx) => {
            const Icon = diffIcons[idx] || Zap;
            return (
              <div
                key={idx}
                className="p-8 rounded-[2rem] bg-white/80 dark:bg-[#0c0c0e]/80 backdrop-blur-xl border border-light-border dark:border-dark-border shadow-lg hover:shadow-2xl hover:shadow-button-primary/10 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4 group relative z-10 w-full font-dm"
              >
                <div className="w-14 h-14 rounded-[1rem] bg-button-primary/10 border border-button-primary/20 flex items-center justify-center text-button-primary transition-all duration-300 group-hover:bg-button-primary group-hover:text-white group-hover:scale-110 shadow-inner">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold mt-2 text-light-text1 dark:text-white tracking-tight">
                  {feature.name}
                </h3>
                <p className="text-light-text2 dark:text-gray-400 font-medium text-[0.95rem] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── Zaptian vs Alternatives ─── */}
      <section
        className="px-6 max-w-5xl mx-auto w-full animate-slideUp"
        style={{ animationDelay: "200ms" }}
      >
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black">
            {data.comparisons.title}
          </h2>
          <p className="text-light-text2 dark:text-dark-text2 mt-3 font-medium">
            Why upgrading to a dedicated system matters
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {data.comparisons.items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row rounded-[2rem] bg-light-card1 dark:bg-[#111] border border-light-border dark:border-white/5 shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Competitor Side (Left / Top) */}
              <div className="flex-1 p-8 md:p-10 bg-red-500/5 dark:bg-red-900/10 border-b md:border-b-0 md:border-r border-light-border dark:border-white/5 flex flex-col justify-center relative overflow-hidden transition-colors group-hover:bg-red-500/10">
                <div className="flex items-center gap-3 mb-2 opacity-60">
                  <X size={20} className="text-red-500" />
                  <span className="text-xs font-bold uppercase tracking-widest text-light-text2 dark:text-dark-text2">
                    The Old Way
                  </span>
                </div>
                <h4 className="text-xl font-bold text-light-text1 dark:text-gray-300 tracking-tight relative z-10">
                  {item.competitor}
                </h4>
              </div>

              {/* Zaptian Advantage Side (Right / Bottom) */}
              <div className="flex-[1.5] p-8 md:p-10 bg-button-primary/5 dark:bg-button-primary/10 flex flex-col justify-center relative overflow-hidden">
                {/* Deep Hover Glow FX */}
                <div className="absolute top-0 right-0 w-full h-full bg-button-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl" />

                <div className="flex items-center gap-3 mb-3 relative z-10">
                  <CheckCircle2 size={20} className="text-button-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest text-button-primary">
                    The Zaptian Way
                  </span>
                </div>
                <p className="text-[1.05rem] font-medium text-light-text1 dark:text-white leading-relaxed relative z-10">
                  {item.advantage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Immersive CTA Footer ─── */}
      <section className="px-6 max-w-5xl mx-auto w-full mt-32">
        <div className="p-12 md:p-16 rounded-[3rem] bg-gradient-to-br from-button-primary to-[#0f4c9c] text-white text-center shadow-[0_20px_60px_-15px_rgba(var(--button-primary),0.5)] relative overflow-hidden flex flex-col items-center">
          {/* Lighting Effects */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/20 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

          <h2 className="text-3xl md:text-5xl font-black mb-10 relative z-10 tracking-tight leading-tight max-w-2xl">
            Start replacing outdated tools with modern speed.
          </h2>
          <button className="px-10 py-5 bg-white text-button-primary border border-transparent rounded-[1.25rem] font-black text-[1.1rem] tracking-wide shadow-2xl hover:-translate-y-1 hover:border-white/50 transition-all duration-300 flex items-center gap-3 relative z-10 hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.4)]">
            Experience the Difference
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Why_Zaptian;
