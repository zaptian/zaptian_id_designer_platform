import { Link } from "react-router-dom"
import { Quote } from "../../assets/icons"

function TestimonialCard() {
  return (
    <div className="bg-light-card1 dark:bg-dark-card1 border border-light-border dark:border-dark-border rounded-2xl p-8 shadow-md relative">
      
      {/* Quote mark */}
      {/* <div className="text-6xl font-bold text-button-primary opacity-70 leading-none mb-4">
         
      </div> */}
      <Quote size={20} className = "font-bold text-button-primary fill-button-primary opacity-80 leading-none mb-4" />

      {/* Testimonial text */}
      <p className="text-light-text1 dark:text-dark-text1 font-dm text-base leading-relaxed mb-6">
        Zaptian is the most intuitive ID design platform I have used. Our team was up and running in under an hour.
      </p>

      {/* Divider */}
      <div className="w-10 h-1 bg-button-primary rounded-full mb-4" />

      {/* Author */}
      <div>
        <p className="text-sm font-semibold text-light-text1 dark:text-dark-text1 font-dm">
          Anjali R.
        </p>
        <p className="text-sm text-light-text2 dark:text-dark-text2 font-dm">
          HR Manager, Pharma Co
        </p>
      </div>

      {/* Decorative border accent */}
      <div className="absolute top-0 left-0 w-1 h-full bg-button-primary rounded-l-2xl" />
    </div>
  )
}

function section1() {
  return (
    <section className="bg-light-bg dark:bg-dark-bg py-20 px-6 font-dm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-6">

          {/* Title */}
          <div>
            <h1 className="text-4xl font-bold text-light-text1 dark:text-dark-text1 font-dm mb-4">
              Customer Stories
            </h1>
            <div className="w-16 h-1 bg-button-primary rounded-full mb-6" />
            <p className="text-light-text2 dark:text-dark-text2 font-dm text-base leading-relaxed">
              Real results from real organizations. Discover how industry leaders leverage Zaptian to transform their identity management and operational efficiency.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            <Link
              to="/request-demo"
              className="px-6 py-2.5 bg-button-primary text-button-primary-text text-sm font-medium font-dm rounded-md hover:bg-button-primary-hover active:bg-button-primary-active transition-colors"
            >
              Request Demo
            </Link>
            <Link
              to="/customers/testimonials"
              className="px-6 py-2.5 border border-button-outline-border text-button-outline-text text-sm font-medium font-dm rounded-md hover:bg-button-outline-hover active:bg-button-outline-active transition-colors"
            >
              View Testimonials
            </Link>
          </div>

          {/* Stats Row */}
            <div className="flex items-center gap-8 mt-2">
            
            <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-light-text1 dark:text-dark-text1 font-dm">
                99.9%
                </span>
                <span className="text-xs font-semibold text-light-text-muted dark:text-dark-text-muted font-dm uppercase tracking-wider">
                Uptime Reliability
                </span>
            </div>

            {/* Divider */}
            <div className="w-px h-10 bg-light-border dark:border-dark-border" />

            <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-light-text1 dark:text-dark-text1 font-dm">
                1000+
                </span>
                <span className="text-xs font-semibold text-light-text-muted dark:text-dark-text-muted font-dm uppercase tracking-wider">
                Trusted Clients Worldwide
                </span>
            </div>

            {/* Divider */}
            <div className="w-px h-10 bg-light-border dark:border-dark-border" />

            <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-light-text1 dark:text-dark-text1 font-dm">
                50M+
                </span>
                <span className="text-xs font-semibold text-light-text-muted dark:text-dark-text-muted font-dm uppercase tracking-wider">
                IDs Generated
                </span>
            </div>

            </div>

        </div>

        {/* Right Section - Testimonial Card */}
        <div className="flex-1 w-full font-dm">
          <TestimonialCard />
        </div>

      </div>
    </section>
  )
}

export default section1