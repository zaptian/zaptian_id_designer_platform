import { productFeatures } from "../../data/product_overview_data/features"

function FeatureCard({ item }) {
  return (
    <div className="bg-light-card1 dark:bg-dark-card1 border border-light-border dark:border-dark-border rounded-2xl p-6 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-button-primary cursor-pointer">

      {/* Title */}
      <h3 className="text-base font-bold text-light-text1 dark:text-dark-text1 font-dm">
        {item.title}
      </h3>

      {/* Thin divider */}
      <div className="h-px bg-light-border dark:border-dark-border" style={{ width: "90%" }} />

      {/* Content */}
      <p className="text-sm text-light-text2 dark:text-dark-text2 font-dm leading-relaxed">
        {item.content}
      </p>

    </div>
  )
}

function Section2() {
  return (
    <section className="bg-light-bg-secondary dark:bg-dark-bg-secondary py-16 px-6 font-dm">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-light-text1 dark:text-dark-text1 font-dm mb-3">
            Everything you need to manage IDs
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productFeatures.map((item) => (
            <FeatureCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Section2