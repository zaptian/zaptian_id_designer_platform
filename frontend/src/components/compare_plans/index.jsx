import { comparePlansData as data } from "../../data/compare_plan_data/data";
import { Scale, CheckCircle2, Layers, ArrowRight } from "../../assets/icons";

function ComparePlans() {
  return (
    <div className="w-full bg-light-bg dark:bg-dark-bg font-dm flex flex-col gap-16 pt-16 pb-24 text-light-text1 dark:text-dark-text1 overflow-x-hidden">
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
          {data.hero.subtitle && (
            <p className="text-lg md:text-xl text-light-text2 dark:text-dark-text2 mt-2 max-w-lg">
              {data.hero.subtitle}
            </p>
          )}
        </div>

        {/* ─── RIGHT: Theme Animation Area (Dynamic Feature Matrix) ─────────── */}
        <div className="flex-1 relative flex items-center justify-center min-h-[460px] w-full mt-8 lg:mt-0 width_425px_hidden">
          {/* Subtle background glow */}
          <div className="absolute w-[320px] h-[320px] rounded-full bg-blue-500/10 blur-[100px] animate-pulseSlow" />

          {/* Dashboard Matrix Element */}
          <div className="relative z-20 w-full max-w-[340px] p-6 rounded-[2rem] bg-light-card1/90 dark:bg-dark-card1/90 backdrop-blur-xl border border-light-border dark:border-dark-border shadow-2xl overflow-hidden group">
            {/* Sweeping Scanner Effect */}
            <div className="absolute top-0 left-0 w-[200%] h-[150%] bg-gradient-to-br from-transparent via-button-primary/[0.08] to-transparent -translate-x-[100%] group-hover:animate-[shimmer_3s_infinite]" />

            <div className="flex justify-between items-center mb-8 border-b border-light-border dark:border-dark-border pb-4 relative z-10">
              <div>
                <h3 className="font-bold text-lg text-light-text1 dark:text-dark-text1 flex items-center gap-2">
                  <Layers size={18} className="text-button-primary" /> Matrix
                  Analysis
                </h3>
              </div>
              <span className="px-3 py-1 bg-gradient-to-r from-button-primary to-blue-500 text-white text-[0.65rem] font-bold uppercase tracking-wider rounded-full shadow-lg shadow-button-primary/20 animate-pulse">
                Pro Tier
              </span>
            </div>

            <div className="relative z-10">
              {/* Animated Row 1 */}
              <div className="flex items-center justify-between p-3 rounded-xl mb-3 border border-button-primary/20 bg-button-primary/5 transition-all duration-500 hover:scale-[1.02]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-button-primary/10 flex items-center justify-center text-button-primary">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="h-2 w-24 bg-button-primary/40 rounded-full" />
                </div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-button-primary animate-ping" />
                </div>
              </div>

              {/* Animated Row 2 */}
              <div
                className="flex items-center justify-between p-3 rounded-xl mb-3 border border-button-primary/20 bg-button-primary/5 transition-all duration-500 hover:scale-[1.02]"
                style={{ transitionDelay: "100ms" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-button-primary/10 flex items-center justify-center text-button-primary">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="h-2 w-16 bg-button-primary/40 rounded-full" />
                </div>
                <span className="text-[0.65rem] font-bold text-button-primary uppercase tracking-widest">
                  Active
                </span>
              </div>

              {/* Animated Locked Row (Unlocks on Hover) */}
              <div
                className="flex items-center justify-between p-3 rounded-xl mb-3 border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg opacity-50 grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:border-button-primary/20 group-hover:bg-button-primary/5 hover:scale-[1.02]"
                style={{ transitionDelay: "300ms" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-light-border dark:bg-dark-border flex items-center justify-center text-light-text2 dark:text-dark-text2 group-hover:bg-button-primary/10 group-hover:text-button-primary transition-colors duration-500">
                    <Scale size={16} />
                  </div>
                  <div className="h-2 w-20 bg-light-border dark:bg-dark-border rounded-full group-hover:bg-button-primary/40 transition-colors duration-500" />
                </div>
                <span className="text-[0.65rem] font-bold text-light-text2 dark:text-dark-text2 group-hover:text-button-primary transition-colors duration-500 uppercase tracking-widest">
                  Unlock
                </span>
              </div>
            </div>

            {/* Progress / Upgrade tracking */}
            <div className="mt-8 pt-4 border-t border-light-border dark:border-dark-border relative z-10">
              <div className="flex justify-between text-[10px] font-bold text-light-text2 dark:text-dark-text2 uppercase tracking-widest mb-2">
                <span>Capacity Value</span>
                <span className="text-button-primary transition-all duration-1000 group-hover:opacity-100 opacity-60">
                  Maximum
                </span>
              </div>
              <div className="h-1.5 w-full bg-light-border dark:bg-dark-border rounded-full overflow-hidden">
                <div className="h-full w-[15%] bg-button-primary rounded-full group-hover:w-full transition-all duration-[1200ms] ease-out" />
              </div>
            </div>
          </div>

          {/* Floating Floating Stat Component */}
          <div
            className="absolute bottom-[0%] right-[0%] lg:-right-[10%] z-30 flex items-center gap-3 p-3 bg-light-card1 dark:bg-dark-card1 rounded-2xl shadow-xl border border-light-border dark:border-dark-border animate-floatCard"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <ArrowRight size={20} className="-rotate-45" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-light-text2 dark:text-dark-text2 uppercase tracking-wide">
                ROI Potential
              </p>
              <p className="text-sm font-black text-light-text1 dark:text-dark-text1">
                300%
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Comparison Table ──────────────────── */}
      <section className="px-6 max-w-6xl mx-auto w-full">
        <div className="w-full overflow-x-auto pb-6 custom-scrollbar">
          <div className="min-w-[850px] border border-light-border dark:border-dark-border rounded-3xl bg-light-card1 dark:bg-dark-card1 overflow-hidden shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-light-bg dark:bg-dark-bg border-b border-light-border dark:border-dark-border">
                  {data.table.headers.map((header, idx) => (
                    <th
                      key={idx}
                      className={`py-6 px-6 font-bold text-lg md:text-xl ${idx === 0 ? "w-1/4" : "w-[18.75%] text-center"} ${idx === 2 ? "text-button-primary" : ""}`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-light-border dark:divide-dark-border">
                {data.table.rows.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className={`transition-colors hover:bg-light-hover dark:hover:bg-dark-hover ${row.isPriceRow ? "bg-button-primary/5 dark:bg-button-primary/10 border-t-2 border-button-primary/20" : ""}`}
                  >
                    <td
                      className={`py-5 px-6 text-light-text1 dark:text-dark-text1 ${row.isPriceRow ? "font-black text-xl hover:text-button-primary" : "font-semibold"}`}
                    >
                      {row.feature}
                    </td>
                    <td
                      className={`py-5 px-6 text-center ${row.isPriceRow ? "font-bold text-lg" : "text-[0.95rem] text-light-text2 dark:text-dark-text2"}`}
                    >
                      {row.starter === "—" ? (
                        <span className="opacity-40">{row.starter}</span>
                      ) : (
                        row.starter
                      )}
                    </td>
                    <td
                      className={`py-5 px-6 text-center font-medium bg-button-primary/[0.03] ${row.isPriceRow ? "text-button-primary font-black text-xl" : "text-button-primary text-[0.95rem]"}`}
                    >
                      {row.standard === "—" ? (
                        <span className="opacity-40">{row.standard}</span>
                      ) : (
                        row.standard
                      )}
                    </td>
                    <td
                      className={`py-5 px-6 text-center ${row.isPriceRow ? "font-bold text-lg" : "text-[0.95rem] text-light-text2 dark:text-dark-text2"}`}
                    >
                      {row.pro === "—" ? (
                        <span className="opacity-40">{row.pro}</span>
                      ) : (
                        row.pro
                      )}
                    </td>
                    <td
                      className={`py-5 px-6 text-center ${row.isPriceRow ? "font-bold text-lg" : "text-[0.95rem] text-light-text2 dark:text-dark-text2"}`}
                    >
                      {row.business === "—" ? (
                        <span className="opacity-40">{row.business}</span>
                      ) : (
                        row.business
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ComparePlans;
