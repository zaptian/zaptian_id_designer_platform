import { productStats } from "../../data/product_overview_data/differentiators"

function StatCard({ item }) {
  return (
    <div
      className="relative flex flex-col items-center justify-center p-8 rounded-2xl border-2 border-dashed border-icon-200 dark:border-icon-dark-200 bg-light-bg dark:bg-dark-bg"
      style={{ minHeight: "220px" }}
    >
      {/* Decorative tilted card top */}
      <div
        className="absolute left-1/2 w-14 h-22 opacity-80 bg-icon-50 dark:bg-icon-dark-50 border border-icon-50 dark:border-icon-dark-200"
        style={{ transform: "translateX(-50%) rotate(-6deg)" ,top: "-45px" }}
      />

      {/* Value */}
      <h3 className="text-lg font-black text-button-primary font-dm leading-none mb-3">
        {item.value}
      </h3>

      {/* Label */}
      <p className="text-sm text-light-text2 dark:text-dark-text2 font-dm leading-snug">
        {item.label}
      </p>
    </div>
  )
}

function Section4() {
  return (
    <section className="bg-light-bg-secondary dark:bg-dark-bg-secondary py-20 px-6 font-dm ">
      <div className="max-w-7xl mx-auto">

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-12">
          {productStats.map((item) => (
            <StatCard key={item.id} item={item} />
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="text-center">
          <p
            className="text-button-primary font-dm font-semibold text-lg uppercase tracking-widest"
            style={{ fontStyle: "italic" }}
          >
            engineered to always have your back
          </p>
        </div>

      </div>
    </section>
  )
}

export default Section4