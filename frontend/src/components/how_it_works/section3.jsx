import { useRef, useEffect, useState } from "react"
import { Layers, Upload, Eye, Printer } from "../../assets/icons"
import { howItWorksSteps } from "../../data/how_it_works_data/steps_data"

const stepIcons = [Layers, Upload, Eye, Printer]

function Section3() {
  const circleRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]
  const containerRef = useRef(null)
  const [path, setPath] = useState("")

  useEffect(() => {
    const updatePath = () => {
      if (!containerRef.current) return
      const containerRect = containerRef.current.getBoundingClientRect()

      const points = circleRefs.map(ref => {
        if (!ref.current) return null
        const rect = ref.current.getBoundingClientRect()
        return {
          x: rect.left - containerRect.left + rect.width / 2,
          y: rect.top - containerRect.top + rect.height / 2,
        }
      })

      if (points.some(p => !p)) return

      const [p1, p2, p3, p4] = points
      const curveOffset = 60

      const d = `
        M ${p1.x} ${p1.y}
        L ${p2.x} ${p2.y}
        Q ${p2.x + curveOffset} ${p2.y} ${p2.x + curveOffset} ${p2.y + (p3.y - p2.y) / 2}
        Q ${p2.x + curveOffset} ${p3.y} ${p3.x} ${p3.y}
        L ${p4.x} ${p4.y}
      `
      setPath(d)
    }

    updatePath()
    window.addEventListener("resize", updatePath)
    return () => window.removeEventListener("resize", updatePath)
  }, [])

  return (
    <section className="bg-light-bg dark:bg-dark-bg py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-light-text1 dark:text-dark-text1 font-dm mb-3">
            How It Works
          </h2>
          <div className="w-16 h-1 bg-button-primary rounded-full mx-auto" />
        </div>

        {/* Steps container */}
        <div ref={containerRef} className="relative">

          {/* SVG connector path */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            style={{ overflow: "visible" }}
          >
            <path
              d={path}
              fill="none"
              stroke="#0369a1"
              strokeWidth="2"
              strokeDasharray="6 4"
            />
          </svg>

          {/* Row 1 - Step 1 and Step 2 */}
          <div className="flex justify-between mb-20">
            {[0, 1].map((i) => {
              const Icon = stepIcons[i]
              const step = howItWorksSteps[i]
              return (
                <div key={step.id} className="flex flex-col items-center gap-4 w-64">
                  <div
                    ref={circleRefs[i]}
                    className={`w-20 h-20 rounded-full flex items-center justify-center border-2 z-10 relative
                      ${i === 0
                        ? "border-button-primary bg-icon-selected dark:bg-icon-dark-selected"
                        : "border-light-border dark:border-dark-border bg-light-card1 dark:bg-dark-card1"
                      }`}
                  >
                    <Icon size={30} className={i === 0 ? "text-button-primary" : "text-light-text-muted dark:text-dark-text-muted"} />
                  </div>
                  <span className="text-xs font-bold text-button-primary font-dm uppercase tracking-wider">
                    Step {step.id}
                  </span>
                  <h3 className="text-base font-bold text-light-text1 dark:text-dark-text1 font-dm text-center">
                    {step.title}
                  </h3>
                  <p className="text-sm text-light-text2 dark:text-dark-text2 font-dm leading-relaxed text-center">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Row 2 - Step 3 and Step 4 (reversed) */}
          <div className="flex justify-between flex-row-reverse">
            {[2, 3].map((i) => {
              const Icon = stepIcons[i]
              const step = howItWorksSteps[i]
              return (
                <div key={step.id} className="flex flex-col items-center gap-4 w-64">
                  <div
                    ref={circleRefs[i]}
                    className="w-20 h-20 rounded-full flex items-center justify-center border-2 border-light-border dark:border-dark-border bg-light-card1 dark:bg-dark-card1 z-10 relative"
                  >
                    <Icon size={30} className="text-light-text-muted dark:text-dark-text-muted" />
                  </div>
                  <span className="text-xs font-bold text-button-primary font-dm uppercase tracking-wider">
                    Step {step.id}
                  </span>
                  <h3 className="text-base font-bold text-light-text1 dark:text-dark-text1 font-dm text-center">
                    {step.title}
                  </h3>
                  <p className="text-sm text-light-text2 dark:text-dark-text2 font-dm leading-relaxed text-center">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Section3