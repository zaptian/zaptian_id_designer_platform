import Lottie from "lottie-react"
import animationData from "../../assets/anime/Testimonials.json"

function Section1() {
  return (
    <section className="bg-light-bg dark:bg-dark-bg py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Left - Text */}
        <div className="flex-1 flex flex-col gap-5">

          {/* Label */}
          <span className="text-xs font-bold font-dm text-button-primary uppercase tracking-widest">
            What Our Users Say
          </span>

          {/* Title */}
          <h2 className="text-4xl font-black text-light-text1 dark:text-dark-text1 font-dm leading-tight">
            Testimonials
          </h2>

          {/* Divider
          <div className="w-16 h-1 bg-button-primary rounded-full" /> */}

          {/* Quote */}
          <p className="text-base text-light-text2 dark:text-dark-text2 font-dm leading-relaxed">
            Straight from the people who use Zaptian every day.
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