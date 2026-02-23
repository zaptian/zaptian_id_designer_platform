import bgImage from "../../assets/images/testimonials_bg.png"

function Section1() {
  return (
    <section
      className="relative w-full min-h-96 flex items-center px-6 py-20"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-2 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">

        {/* Left side */}
        <div className="max-w-xl flex flex-col gap-4">

          {/* Title */}
          <h1 className="text-4xl font-bold text-white font-dm leading-tight">
            Testimonials
          </h1>

          {/* Divider */}
          <div className="w-16 h-1 bg-button-primary rounded-full" />

          {/* Quote */}
          <p className="text-white opacity-80 font-dm text-base leading-relaxed">
            Straight from the people who use Zaptian every day.
          </p>

        </div>
      </div>
    </section>
  )
}

export default Section1