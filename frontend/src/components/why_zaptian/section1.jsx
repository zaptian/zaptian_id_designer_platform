import Lottie from "lottie-react"
import animationData from "../../assets/anime/whyzaptian.json"

function Section1() {
  return (
    <section className="py-20 px-6 bg-icon-50 dark:bg-icon-dark-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Left - Text */}
        <div className="flex-1 flex flex-col gap-5">

            <h1 className="text-4xl font-black text-button-primary font-dm leading-tight">
            Why Zaptian ?
            </h1>

            {/* Description */}
            <p className="text-2xl text-light-text2 dark:text-dark-text2 font-dm leading-relaxed">
            Thousands of organizations trust Zaptian to eliminate manual ID processes, reduce errors, and deliver professional results in minutes — not weeks.
            </p>

        </div>

        {/* Right - Lottie Animation */}
        <div className="flex-1 flex items-center justify-center">
          <Lottie
            animationData={animationData}
            loop={true}
            style={{ width: "100%", maxWidth: "450px" }}
          />
        </div>

      </div>
    </section>
  )
}

export default Section1