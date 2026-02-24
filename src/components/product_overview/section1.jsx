import { productOverview } from "../../data/product_overview_data/overview"
import logoLight from "../../assets/logo/logo_light.png"
import logoDark from "../../assets/logo/logo_dark.png"

function Section1() {
  return (
    <section className="bg-light-bg-secondary dark:bg-dark-bg-secondary py-20 px-6 font-dm">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">

        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-5">

          {/* Quote */}
          <p className="text-2xl font-semibold text-light-text1 dark:text-dark-text1 font-dm leading-snug">
            {productOverview.quote}
          </p>

          {/* Divider */}
          {/* <div className="w-50 h-0.5 bg-button-primary rounded-full" /> */}

          {/* Content */}
          <p className="text-base text-light-text2 dark:text-dark-text2 font-dm leading-relaxed">
            {productOverview.content}
          </p>

        </div>

        {/* Right Section - Logo */}
        <div className="flex-1 flex items-center justify-center w-full">
          {/* Light mode logo */}
          <img
            src={logoLight}
            alt="Zaptian Logo"
            className="w-full max-w-sm block dark:hidden"
          />
          {/* Dark mode logo */}
          <img
            src={logoDark}
            alt="Zaptian Logo"
            className="w-full max-w-sm hidden dark:block"
          />
        </div>

      </div>
    </section>
  )
}

export default Section1