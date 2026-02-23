import { Link } from "react-router-dom"

function Section3() {
  return (
    <section className="bg-light-bg dark:bg-dark-bg py-16 px-6 font-dm">
      <div className="max-w-7xl mx-auto">

        <div className="relative bg-button-primary rounded-2xl px-12 py-16 overflow-hidden">

          {/* Decorative circles */}
          <div className="hidden md:block absolute right-10 top-1/2 -translate-y-1/2 w-64 h-64 border-2 border-white opacity-20 rounded-full" />
          <div className="hidden md:block absolute right-32 top-1/2 -translate-y-1/2 w-40 h-40 border-2 border-white opacity-20 rounded-full" />

          {/* Decorative grid lines */}
          <div className="hidden md:block absolute inset-0 opacity-10"
            style={{
              backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "40px 40px"
            }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-2xl">

            {/* Title */}
            <h2 className="text-4xl font-bold text-white font-dm leading-tight mb-4">
              Ready to write your own success story?
            </h2>

            {/* Quote */}
            <p className="text-white opacity-80 font-dm text-base leading-relaxed mb-8">
              Join thousands of forward-thinking organizations that have cut admin time, improved security, and enhanced their professional brand with Zaptian.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4 flex-wrap">
              <Link
                to="/request-demo"
                className="px-6 py-2.5 bg-white text-button-primary text-sm font-semibold font-dm rounded-md hover:opacity-90 transition-opacity"
              >
                Request Free Demo
              </Link>
              <Link
                to="/company/contact"
                className="px-6 py-2.5 border-2 border-white text-white text-sm font-semibold font-dm rounded-md hover:bg-white hover:text-button-primary transition-colors"
              >
                Contact Sales
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Section3