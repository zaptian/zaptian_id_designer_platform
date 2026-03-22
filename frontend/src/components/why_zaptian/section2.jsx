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


function Section2() {
  return (
    <section className="bg-light-bg dark:bg-dark-bg py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* Left - Quote + Description */}
          <div className="flex-1 flex flex-col gap-8">

            {/* Big Quote */}
            <h2 className="text-4xl font-black text-light-text1 dark:text-dark-text1 font-dm leading-tight">
              We didn't just build an ID tool.{" "}
              <span className="text-button-primary">
                We rethought the entire ID lifecycle.
              </span>
            </h2>

            {/* Description */}
            <p className="text-base text-light-text2 dark:text-dark-text2 font-dm leading-relaxed">
              <span className="font-bold text-light-text1 dark:text-dark-text1">
                Zaptian (ID Designer)
              </span>{" "}
              is a cloud-based ID card management platform that empowers organizations to design custom ID card templates, issue cards in bulk, embed verification technologies (QR codes, barcodes, RFID), and manage the full ID lifecycle — all from a single dashboard.
            </p>

          </div>

          {/* Right - Customer Story Card (starts from middle of quote) */}
          <div className="flex-1 w-full font-dm">
            <TestimonialCard />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Section2