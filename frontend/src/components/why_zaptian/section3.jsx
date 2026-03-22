import { whyChooseZaptian } from "../../data/whyzaptian_data/features"

function FeatureCard({ item }) {
  const Icon = item.icon
  return (
    <div className="flex flex-col gap-4 justify-center bg-light-card1 dark:bg-dark-card1 border border-light-border dark:border-dark-border rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300" style={{ minHeight: "250px" }}>

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-icon-selected dark:bg-icon-dark-selected flex items-center justify-center">
        <Icon size={24} className="text-button-primary" />
      </div>

      {/* Title */}
      <h3 className="text-base font-bold text-light-text1 dark:text-dark-text1 font-dm">
        {item.title}
      </h3>

      {/* Content */}
      <p className="text-sm text-light-text2 dark:text-dark-text2 font-dm leading-relaxed">
        {item.content}
      </p>

    </div>
  )
}


function Section3() {
  return (
    <section className="py-20 px-6 bg-icon-50 dark:bg-icon-dark-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* First item - Title card */}
          <div className="flex items-center justify-start p-6">
            <h2 className="text-4xl font-black text-button-primary font-dm leading-tight">
              Why do customers choose Zaptian?
            </h2>
          </div>

          {/* Remaining 5 feature cards */}
          {whyChooseZaptian.map((item) => (
            <FeatureCard key={item.id} item={item} />
          ))}

        </div>

        {/* Customer Stories Banner Card */}
        <div className="mt-5 flex flex-col gap-6  justify-center bg-light-card1 dark:bg-dark-card1 border border-light-border dark:border-dark-border rounded-2xl p-8 md:p-10 " style={{ minHeight: "350px" }}>
        
        {/* Quote */}
        <p className="text-2xl md:text-3xl font-black text-light-text1 dark:text-dark-text1 font-dm leading-snug max-w-2xl">
            "See how real organizations transformed their ID management with Zaptian."
        </p>

        {/* Button */}
        <div>
            <button className="inline-flex items-center gap-2 bg-button-primary hover:bg-button-primary-hover active:bg-button-primary-active text-button-primary-text font-dm font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200">
            View Customer Stories
            </button>
        </div>

        </div>
      </div>
    </section>
  )
}

export default Section3