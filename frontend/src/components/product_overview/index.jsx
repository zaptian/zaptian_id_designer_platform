import { productOverviewData as data } from "../../data/product_overview_data/data";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  GitMerge,
  BarChart3,
} from "../../assets/icons";
import { useNavigate } from "react-router-dom";

function Product_Overview() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-light-bg dark:bg-dark-bg font-dm flex flex-col gap-24 pt-16 pb-24 text-light-text1 dark:text-dark-text1 overflow-x-hidden">
      {/* ─── 1. Hero & Intro ("What is Zaptian") ───────────────────────── */}
      <section className="px-6 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        {/* ─── LEFT: Content ───────────────────────── */}
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start gap-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-button-primary/30 bg-button-primary/10 text-button-primary text-xs font-semibold uppercase tracking-widest">
            {data.hero.badge}
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-[3.2rem] font-black leading-tight tracking-tight max-w-xl">
            {data.hero.title}
          </h1>

          <div className="mt-6 p-6 md:p-8 rounded-2xl bg-light-card1 dark:bg-dark-card1 border border-light-border dark:border-dark-border shadow-lg w-full max-w-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-52 h-52 bg-button-primary/10 rounded-full blur-[70px] -z-10" />

            <h2 className="text-xl font-bold tracking-tight text-button-primary mb-2">
              {data.whatIsZaptian.headline}
            </h2>

            <p className="text-base text-light-text2 dark:text-dark-text2 leading-relaxed">
              {data.whatIsZaptian.description}
            </p>

            <div className="pt-4">
              <button
                onClick={() => navigate("/sign_up")}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-button-primary hover:text-button-primary-hover transition-colors"
              >
                Start designing now
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>

        {/* ─── RIGHT: Animation Area ───────────────────────── */}
        <div className="flex-1 relative flex items-center justify-center min-h-[460px]">
          {/* Soft background glow */}
          <div className="absolute w-80 h-80 rounded-full bg-blue-500/10 blur-[120px] animate-pulseSlow" />

          {/* Product Overview Card */}
          <div className="relative w-full max-w-md rounded-2xl bg-linear-to-br from-white/95 to-white/90 dark:from-slate-900/95 dark:to-slate-800/95 backdrop-blur-sm border border-light-border dark:border-dark-border shadow-2xl animate-floatCard overflow-hidden">
            {/* Subtle animated shine */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />

            {/* Card content */}
            <div className="relative p-6 space-y-5">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-transparent" style={{ background: "linear-gradient(90deg, #1d4ed8, #3b82f6, #60a5fa)", WebkitBackgroundClip: "text" }}>
                  Product Overview
                </h3>
                <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    v3.0
                  </span>
                </div>
              </div>

              {/* Key Features Grid */}
              <div className="grid gap-4">
                {/* Feature 1 */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-button-primary/5 transition-colors group">
                  <div className="p-2 rounded-lg bg-button-primary/10 text-button-primary group-hover:scale-110 transition-transform">
                    <Zap size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Lightning Fast</h4>
                    <p className="text-xs text-light-text2 dark:text-dark-text2 mt-0.5">
                      Optimized workflows with sub-second response
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-button-primary/5 transition-colors group">
                  <div className="p-2 rounded-lg bg-button-primary/10 text-button-primary group-hover:scale-110 transition-transform">
                    <GitMerge size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">
                      Smart Integrations
                    </h4>
                    <p className="text-xs text-light-text2 dark:text-dark-text2 mt-0.5">
                      Connect with 50+ tools & APIs seamlessly
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-button-primary/5 transition-colors group">
                  <div className="p-2 rounded-lg bg-button-primary/10 text-button-primary group-hover:scale-110 transition-transform">
                    <BarChart3 size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">
                      Advanced Analytics
                    </h4>
                    <p className="text-xs text-light-text2 dark:text-dark-text2 mt-0.5">
                      Real-time insights & custom dashboards
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider with metric */}
              <div className="relative pt-2">
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-button-primary/30 to-transparent" />
                <div className="flex justify-between items-center pt-3">
                  <div className="text-center">
                    <div className="text-2xl font-black text-button-primary">
                      10k+
                    </div>
                    <div className="text-[11px] uppercase tracking-wider text-light-text3 dark:text-dark-text3">
                      Active users
                    </div>
                  </div>
                  <div className="w-px h-8 bg-button-primary/20" />
                  <div className="text-center">
                    <div className="text-2xl font-black text-button-primary">
                      99.9%
                    </div>
                    <div className="text-[11px] uppercase tracking-wider text-light-text3 dark:text-dark-text3">
                      Uptime SLA
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. Core Product Modules (Bento Grid) ────────────────────── */}
      <section className="px-6 max-w-6xl mx-auto w-full">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">
            {data.coreModules.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
          {data.coreModules.items.map((module, index) => (
            <div
              key={index}
              className={`${module.colSpan} group relative bg-light-card1 dark:bg-dark-card1 border border-light-border dark:border-dark-border p-8 rounded-3xl flex flex-col items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-button-primary/40 hover:shadow-lg overflow-hidden`}
            >
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-button-primary/5 rounded-full blur-2xl group-hover:bg-button-primary/15 transition-colors duration-500" />

              <div className="p-3.5 rounded-xl bg-button-primary/10 transition-colors group-hover:bg-button-primary/20">
                {module.icon}
              </div>
              <h3 className="text-xl font-bold mt-2">{module.title}</h3>
              <p className="text-light-text2 dark:text-dark-text2 text-[0.95rem] leading-relaxed">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 3. Split Layout: Who is it for & Differentiators ────────────── */}
      <section className="px-6 max-w-6xl mx-auto w-full mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* LEFT: Who Is It For */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-3">
                {data.whoIsItFor.title}
              </h2>
              <p className="text-light-text2 dark:text-dark-text2 text-lg">
                {data.whoIsItFor.subtitle}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {data.whoIsItFor.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-light-hover dark:bg-dark-hover border border-transparent transition-colors hover:border-light-border dark:hover:border-dark-border"
                >
                  <div className="p-2.5 rounded-lg bg-light-card1 dark:bg-dark-card1 shadow-sm border border-light-border dark:border-dark-border">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-[0.95rem]">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Key Differentiators */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-3">
                {data.differentiators.title}
              </h2>
              <p className="text-light-text2 dark:text-dark-text2 text-lg">
                Why choose Zaptian ID Designer?
              </p>
            </div>
            <div className="flex flex-col gap-6">
              {data.differentiators.items.map((diff, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="mt-1 shrink-0 p-1.5 rounded-full bg-button-primary/10">
                    <CheckCircle2 size={18} className="text-button-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-1 group-hover:text-button-primary transition-colors">
                      {diff.title}
                    </h4>
                    <p className="text-sm text-light-text2 dark:text-dark-text2 leading-relaxed">
                      {diff.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Product_Overview;
