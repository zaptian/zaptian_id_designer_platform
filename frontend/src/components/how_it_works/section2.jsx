import { Layers, Upload, Eye, Printer } from "../../assets/icons"
import { howItWorksSteps } from "../../data/how_it_works_data/steps_data"

const stepIcons = [Layers, Upload, Eye, Printer]

function StepCircle({ step, icon: Icon, active }) {
  return (
    <div className="flex flex-col items-center gap-4">

      {/* Circle */}
      <div className={`w-20 h-20 rounded-full flex items-center justify-center border-2 transition-all
        ${active
          ? "border-button-primary bg-icon-selected dark:bg-icon-dark-selected"
          : "border-light-border dark:border-dark-border bg-light-card1 dark:bg-dark-card1"
        }`}
      >
        <Icon
          size={32}
          className={active ? "text-button-primary" : "text-light-text-muted dark:text-dark-text-muted"}
        />
      </div>

      {/* Step number */}
      <span className="text-xs font-bold text-button-primary font-dm uppercase tracking-wider">
        Step {step.id}
      </span>

      {/* Title */}
      <h3 className="text-base font-bold text-light-text1 dark:text-dark-text1 font-dm text-center">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-light-text2 dark:text-dark-text2 font-dm leading-relaxed text-center max-w-xs">
        {step.description}
      </p>

    </div>
  )
}

function Section2() {
  return (
    <section className="bg-light-bg dark:bg-dark-bg py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Row 1 - Step 1 and Step 2 (left to right) */}
        <div className="flex items-start gap-0">

          {/* Step 1 */}
          <div className="flex-1">
            <StepCircle step={howItWorksSteps[0]} icon={stepIcons[0]} active={true} />
          </div>

          {/* Connector line + curve */}
          <div className="flex flex-col items-center" style={{ marginTop: "40px" }}>
            {/* Horizontal line */}
            <div className="w-24 h-0.5 bg-button-primary" />
          </div>

          {/* Step 2 */}
          <div className="flex-1">
            <StepCircle step={howItWorksSteps[1]} icon={stepIcons[1]} active={false} />
          </div>

        </div>

        {/* Curve connector - right side going down */}
        <div className="flex justify-end pr-10">
          <div
            className="w-16 h-16 border-r-2 border-b-2 border-button-primary rounded-br-full"
          />
        </div>

        {/* Row 2 - Step 3 and Step 4 (right to left) */}
        <div className="flex items-start gap-0 flex-row-reverse">

          {/* Step 3 */}
          <div className="flex-1">
            <StepCircle step={howItWorksSteps[2]} icon={stepIcons[2]} active={false} />
          </div>

          {/* Connector line */}
          <div className="flex flex-col items-center" style={{ marginTop: "40px" }}>
            <div className="w-24 h-0.5 bg-button-primary" />
          </div>

          {/* Step 4 */}
          <div className="flex-1">
            <StepCircle step={howItWorksSteps[3]} icon={stepIcons[3]} active={false} />
          </div>

        </div>

        {/* Curve connector - left side */}
        <div className="flex justify-start pl-10">
          <div
            className="w-16 h-16 border-l-2 border-b-2 border-button-primary rounded-bl-full"
          />
        </div>

      </div>
    </section>
  )
}

export default Section2