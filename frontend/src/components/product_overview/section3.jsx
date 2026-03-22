import { useNavigate } from "react-router-dom"
import { ArrowRight } from "../../assets/icons"
import { Solutions } from "../../data/product_overview_data/solutions"

function ShowcaseCard({ item }) {
  const navigate = useNavigate()

  return (
    <div className="relative shrink-0 w-120 h-80 rounded-2xl overflow-hidden border border-light-border dark:border-dark-border group cursor-pointer">

      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient overlay */}
      {/* Gradient overlay */}
      <div
      className="absolute inset-0"
      style={{ background: "linear-gradient(to top, black 25%, rgba(0,0,0,0.3) 60%, transparent 100%)" }}
      />

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 px-7 py-6 flex items-center justify-between">
        <h3 className="text-white font-dm font-semibold text-lg">
          {item.title}
        </h3>
        <button
          onClick={() => navigate(item.path)}
          className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-button-primary transition-colors group/btn"
        >
          <ArrowRight size={16} className="text-button-primary group-hover/btn:text-white transition-colors" />
        </button>
      </div>

    </div>
  )
}

function Section3() {

  return (
    <section className="bg-light-bg-secondary dark:bg-dark-bg-secondary py-16 overflow-hidden font-dm">

      {/* Section Title */}
      <div className="px-6 max-w-7xl mx-auto mb-17">
        <h2 className="text-3xl font-bold text-light-text1 dark:text-dark-text1 font-dm mb-3">
          Solution Highlights
        </h2>
      </div>

      {/* Scrolling Row */}
      <div className="relative">

        {/* Fade left */}
        <div
        className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none dark:opacity-0"
        style={{ background: "linear-gradient(to right, var(--color-light-bg), transparent)" }}
        />
        <div
        className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none opacity-0 dark:opacity-100"
        style={{ background: "linear-gradient(to right, var(--color-dark-bg), transparent)" }}
        />

        {/* Fade right */}
        <div
        className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none dark:opacity-0"
        style={{ background: "linear-gradient(to left, var(--color-light-bg), transparent)" }}
        />
        <div
        className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none opacity-0 dark:opacity-100"
        style={{ background: "linear-gradient(to left, var(--color-dark-bg), transparent)" }}
        />

        {/* Cards wrapper */}
        <div className="flex overflow-hidden">
            <div className="flex gap-5 animate-scroll-left">
                {[...Solutions, ...Solutions].map((item, index) => (
                <ShowcaseCard key={index} item={item} />
                ))}
            </div>
        </div>

      </div>

      {/* Auto scroll */}
      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>

    </section>
  )
}

export default Section3