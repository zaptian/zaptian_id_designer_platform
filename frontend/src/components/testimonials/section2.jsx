import { Quote } from "../../assets/icons"
import { testimonialsData } from "../../data/testimonials_data"

function TestimonialCard({ item }) {
  return (
    <div className="bg-light-card1 dark:bg-dark-card1 border border-light-border dark:border-dark-border rounded-2xl p-6 flex flex-col gap-4 hover:border-button-primary transition-colors relative">

      {/* Quote Icon */}
      <Quote
        size={32}
        className="text-button-primary fill-button-primary opacity-50"
      />

      {/* Feedback */}
      <p className="text-sm text-light-text2 dark:text-dark-text2 font-dm leading-relaxed flex-1">
        {item.feedback}
      </p>

      {/* Thin divider - 3/4 width */}
      <div className="h-px bg-light-border dark:border-dark-border" style={{ width: "90%" }} />

      {/* Person */}
      <div>
        <p className="text-sm font-semibold text-light-text1 dark:text-dark-text1 font-dm">
          {item.name}
        </p>
        <p className="text-xs text-light-text-muted dark:text-dark-text-muted font-dm">
          {item.position}
        </p>
      </div>

      {/* Left accent border */}
      <div className="absolute top-0 left-0 w-1 h-full bg-button-primary rounded-l-2xl" />

    </div>
  )
}

function Section2() {
  return (
    <section className="bg-light-bg dark:bg-dark-bg py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section2