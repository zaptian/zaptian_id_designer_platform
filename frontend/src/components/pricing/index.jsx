import { useState } from "react";
import { pricingData as data } from "../../data/pricing_data/data";
import { Check, Info, CreditCard, Zap, CheckCircle2 } from "../../assets/icons";
import { useNavigate } from "react-router-dom";

function Pricing() {
  const navigate = useNavigate();
  const [currency, setCurrency] = useState("INR");

  return (
    <div className="w-full bg-light-bg dark:bg-dark-bg font-dm flex flex-col gap-20 pt-16 pb-24 text-light-text1 dark:text-dark-text1 overflow-x-hidden">
      {/* ─── Hero ─────────────────────────────── */}
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
        <div className="flex-1 relative flex items-center justify-center width_425px_hidden min-h-[460px] w-full">
          {/* Subtle background glow */}
          <div className="absolute w-[280px] h-[280px] rounded-full bg-purple-500/10 blur-[100px] animate-pulseSlow" />

          {/* Central Pricing Hub */}
          <div className="relative z-10 p-8 rounded-[2rem] bg-gradient-to-br from-light-card1/90 to-light-bg/50 dark:from-dark-card1/90 dark:to-dark-bg/50 backdrop-blur-md border border-light-border dark:border-dark-border shadow-2xl animate-floatCard w-full max-w-sm">
            {/* Premium Sparkle decoration */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-purple-500/20 rounded-full blur-xl" />

            <div className="flex items-center gap-4 mb-6 relative">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                <CreditCard size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Pro Plan</h3>
                <p className="text-xs text-light-text2 dark:text-dark-text2 mt-0.5">
                  Unlocked Features
                </p>
              </div>
              {/* Badge */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 px-2 py-1 bg-button-primary/10 text-button-primary text-[0.6rem] font-bold uppercase rounded-md tracking-wider">
                Active
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-light-border dark:border-dark-border">
              {/* Animated Feature Check 1 */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-400/20 flex items-center justify-center">
                  <CheckCircle2 size={12} className="text-emerald-500" />
                </div>
                <div className="h-2 w-24 rounded-full bg-light-border dark:bg-dark-border overflow-hidden relative">
                  <div className="absolute top-0 left-0 h-full w-full bg-emerald-500 rounded-full animate-[shimmer_2s_infinite]" />
                </div>
              </div>

              {/* Animated Feature Check 2 */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-400/20 flex items-center justify-center delay-75">
                  <CheckCircle2 size={12} className="text-emerald-500" />
                </div>
                <div className="h-2 w-32 rounded-full bg-light-border dark:bg-dark-border overflow-hidden relative">
                  <div className="absolute top-0 left-0 h-full w-full bg-emerald-500 rounded-full animate-[shimmer_2s_infinite] delay-75" />
                </div>
              </div>

              {/* Animated Feature Check 3 */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-400/20 flex items-center justify-center delay-150">
                  <CheckCircle2 size={12} className="text-emerald-500" />
                </div>
                <div className="h-2 w-20 rounded-full bg-light-border dark:bg-dark-border overflow-hidden relative">
                  <div className="absolute top-0 left-0 h-full w-full bg-emerald-500 rounded-full animate-[shimmer_2s_infinite] delay-150" />
                </div>
              </div>
            </div>

            {/* Progress / Limits */}
            <div className="mt-8">
              <div className="flex justify-between text-xs mb-2 font-semibold">
                <span className="text-light-text2 dark:text-dark-text2">
                  Generation Limit
                </span>
                <span className="text-purple-500">85%</span>
              </div>
              <div className="h-1.5 w-full bg-light-border dark:bg-dark-border rounded-full overflow-hidden">
                <div className="h-full w-[85%] bg-purple-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Floating Action Chips */}
          <div
            className="absolute top-[0%] right-[5%] md:right-[5%] bg-light-card1 dark:bg-dark-card1 p-3.5 rounded-2xl shadow-xl border border-light-border dark:border-dark-border flex items-center gap-2 animate-floatCard"
            style={{ animationDelay: "1s" }}
          >
            <Zap size={18} className="text-amber-500" />
            <span className="text-xs font-bold tracking-wide pr-1">
              Instant Upgrade
            </span>
          </div>

          <div
            className="absolute bottom-[0%] left-[5%] md:left-[10%] bg-light-card1 dark:bg-dark-card1 p-3.5 rounded-2xl shadow-xl border border-light-border dark:border-dark-border flex items-center gap-2 animate-floatCard"
            style={{ animationDelay: "2.5s" }}
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-bold text-light-text2 dark:text-dark-text2 tracking-wide pr-1">
              Scalable Pricing
            </span>
          </div>
        </div>
      </section>

      {/* ─── Currency Switcher ────────────────── */}
      <section className="px-6 flex justify-center -mt-8 mb-4">
        <div className="bg-light-card1 dark:bg-dark-card1 p-1.5 rounded-3xl border border-light-border dark:border-dark-border flex items-center gap-1 shadow-2xl backdrop-blur-sm">
          {[
            { code: "INR", symbol: "₹" },
            { code: "USD", symbol: "$" },
            { code: "EUR", symbol: "€" },
          ].map((curr) => (
            <button
              key={curr.code}
              onClick={() => setCurrency(curr.code)}
              className={`px-6 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 flex items-center gap-2
                ${
                  currency === curr.code
                    ? "bg-button-primary text-white shadow-lg shadow-button-primary/30 scale-105"
                    : "text-light-text2 dark:text-dark-text2 hover:bg-light-hover dark:hover:bg-dark-hover"
                }`}
            >
              <span className="text-[10px] tracking-wider uppercase opacity-80">{curr.code}</span>
              <span className="text-base">{curr.symbol}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ─── Pricing Grid ──────────────────────── */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-6">
          {data.plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-8 rounded-[2rem] border transition-all duration-300 hover:shadow-xl ${
                plan.isPopular
                  ? "bg-light-card1 dark:bg-dark-card1 border-button-primary shadow-lg shadow-button-primary/10 lg:-translate-y-4"
                  : "bg-light-bg dark:bg-dark-bg border-light-border dark:border-dark-border hover:-translate-y-2"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-button-primary text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-md whitespace-nowrap">
                  {plan.popular_text}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm font-medium text-button-primary h-5 flex items-center">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8 flex flex-col justify-end min-h-[64px]">
                {plan.originalPrices?.[currency] && (
                  <div className="flex items-center mb-1">
                    <span className="text-sm font-bold text-light-text2/40 dark:text-dark-text2/40 line-through">
                      {plan.originalPrices[currency]}
                    </span>
                    {plan.discount && (
                      <span className="text-xs font-bold text-button-danger ml-2 px-1.5 py-0.5 bg-button-danger/10 rounded">
                        {plan.discount}
                      </span>
                    )}
                  </div>
                )}
                <div className="flex items-baseline gap-1">
                  <span className="font-black tracking-tight text-4xl">
                    {plan.prices[currency]}
                  </span>
                  {plan.period && (
                    <span className="text-light-text2 dark:text-dark-text2 font-medium">
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={() =>
                  navigate(plan.name === "Business" ? "/contact" : "/sign_up")
                }
                className={`w-full py-3.5 rounded-full font-bold text-sm transition-all duration-300 mb-8 ${
                  plan.isPopular
                    ? "bg-button-primary hover:bg-button-primary-hover text-white shadow-md hover:shadow-button-primary/40"
                    : "bg-button-primary/10 text-button-primary hover:bg-button-primary hover:text-white"
                }`}
              >
                {plan.buttonLabel}
              </button>

              <div className="flex flex-col gap-4 flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-light-text2 dark:text-dark-text2 mb-1">
                  {plan.whats_include}
                </p>
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className="text-button-primary shrink-0 mt-0.5"
                      strokeWidth={3}
                    />
                    <span className="text-[0.95rem] font-medium leading-tight text-light-text1 dark:text-dark-text1">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Billing Notes ──────────────────────── */}
      <section className="px-6 max-w-4xl mx-auto w-full mb-10">
        <div className="p-8 md:p-10 rounded-[2rem] bg-light-card1 dark:bg-dark-card1 border border-light-border dark:border-dark-border flex flex-col md:flex-row gap-8 items-start md:items-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-button-primary/10 shrink-0 text-button-primary">
            <Info size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">
              {data.billingNotes.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {data.billingNotes.notes.map((note, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-light-text2 dark:text-dark-text2"
                >
                  <span className="text-button-primary mt-0.5">&bull;</span>
                  <span className="text-sm font-medium leading-relaxed">
                    {note}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
