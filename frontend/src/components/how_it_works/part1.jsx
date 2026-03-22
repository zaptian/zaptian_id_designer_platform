import { Layers, Upload, Eye, Printer, ArrowRight, ArrowDown, ArrowLeft } from "../../assets/icons"
import { howItWorksSteps } from "../../data/how_it_works_data/steps_data"

const stepIcons = [Layers, Upload, Eye, Printer]

function StepCard({ step, icon: Icon }) {
  return (
    <div
    className="flex flex-col items-center gap-3 bg-light-card1 dark:bg-dark-card1 border border-light-border dark:border-dark-border rounded-2xl p-8 hover:border-button-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-full md:w-80 lg:w-96"
    >
      {/* Icon Circle */}
      <div className="w-14 h-14 rounded-full flex items-center justify-center bg-icon-selected dark:bg-icon-dark-selected border-2 border-button-primary">
        <Icon size={26} className="text-button-primary" />
      </div>

      {/* Step number */}
      <span className="text-xs font-bold text-button-primary font-dm uppercase tracking-wider">
        Step {step.id}
      </span>

      {/* Title */}
      <h3 className="text-base font-bold text-light-text1 dark:text-dark-text1 font-dm text-center">
        {step.title}
      </h3>

      {/* Divider */}
      <div className="h-px bg-light-border dark:border-dark-border w-3/4" />

      {/* Description */}
      <p className="text-sm text-light-text2 dark:text-dark-text2 font-dm leading-relaxed text-center">
        {step.description}
      </p>

    </div>
  )
}

function Part1() {
  return (
    <section className="bg-light-bg dark:bg-dark-bg py-16 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-light-text1 dark:text-dark-text1 font-dm mb-3">
            Four Simple Steps
          </h2>
          <div className="w-16 h-1 bg-button-primary rounded-full mx-auto" />
        </div>

        {/* Desktop */}
        {/* Desktop */}
        <div className="hidden md:flex flex-col gap-6">

        {/* Row 1 - Step 1 → Step 2 */}
        <div className="flex items-center justify-center gap-8">
            <StepCard step={howItWorksSteps[0]} icon={stepIcons[0]} />
            <div className="flex items-center shrink-0" style={{ width: "200px" }}>
                <div className="flex-1 h-0.5 bg-button-primary" />
                <ArrowRight size={24} className="text-button-primary -ml-1" />
            </div>
            <StepCard step={howItWorksSteps[1]} icon={stepIcons[1]} />
        </div>

        {/* Down arrow - aligned to right side (under card 2) */}
        {/* Down arrow - under card 2 (right side) */}
        <div className="flex justify-center gap-0" style={{ paddingLeft: "600px" }}>
        <div className="flex flex-col items-center" style={{ height: "90px" }}>
            <div className="flex-1 w-0.5 bg-button-primary" />
            <ArrowDown size={24} className="text-button-primary -mt-1" />
        </div>
        </div>

        {/* Row 2 - Step 4 ← Step 3 */}
        <div className="flex items-center justify-center gap-8">
            <StepCard step={howItWorksSteps[3]} icon={stepIcons[3]} />
            {/* Long arrow right to left */}
            <div className="flex items-center shrink-0" style={{ width: "200px" }}>
                <ArrowLeft size={24} className="text-button-primary -mr-1" />
                <div className="flex-1 h-0.5 bg-button-primary" />
            </div>
            <StepCard step={howItWorksSteps[2]} icon={stepIcons[2]} />
        </div>

        </div>

        {/* Mobile - vertical stack */}
        {/* Mobile - vertical stack */}
        <div className="flex md:hidden flex-col items-center gap-0">
        {howItWorksSteps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center w-full">

            {/* Card */}
            <StepCard step={step} icon={stepIcons[index]} />

            {/* Down arrow between cards */}
            {index < howItWorksSteps.length - 1 && (
                <div className="flex flex-col items-center" style={{ height: "70px" }}>
                <div className="flex-1 w-0.5 bg-button-primary" />
                <ArrowDown size={24} className="text-button-primary -mt-1" />
                </div>
            )}

            </div>
        ))}
        </div>

      </div>
    </section>
  )
}

export default Part1