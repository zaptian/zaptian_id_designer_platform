import { Building2, CircleAlert, Lightbulb, TrendingUp } from "../../assets/icons"
import { customerStories } from "../../data/customerstories_data"

function StoryCard({ story }) {
  return (
    <div className="bg-light-card1 dark:bg-dark-card1 border border-light-border dark:border-dark-border rounded-2xl p-6 flex flex-col gap-5 hover:border-button-primary transition-colors">

      {/* Row 1 - Org */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-icon-sub-selected dark:bg-icon-dark-sub-selected flex items-center justify-center shrink-0">
          <Building2 size={20} className="text-button-primary" />
        </div>
        <div>
          <p className="text-sm font-bold text-light-text1 dark:text-dark-text1 font-dm">
            {story.org}
          </p>
          <p className="text-xs text-light-text-muted dark:text-dark-text-muted font-dm">
            {story.strength}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-light-border dark:border-dark-border" />

      {/* Row 2 - Challenge */}
      <div className="flex items-start gap-3">
        <div className="w-7 h-7 rounded-md bg-light-card2 dark:bg-dark-card2 flex items-center justify-center shrink-0 mt-0.5">
          <CircleAlert size={15} className="text-button-danger" />
        </div>
        <div>
          <p className="text-xs font-semibold text-light-label1 dark:text-dark-label1 font-dm uppercase tracking-wider mb-1">
            Challenge
          </p>
          <p className="text-sm text-light-text2 dark:text-dark-text2 font-dm leading-relaxed">
            {story.challenge}
          </p>
        </div>
      </div>

      {/* Row 3 - Solution */}
      <div className="flex items-start gap-3">
        <div className="w-7 h-7 rounded-md bg-light-card2 dark:bg-dark-card2 flex items-center justify-center shrink-0 mt-0.5">
          <Lightbulb size={15} className="text-button-primary" />
        </div>
        <div>
          <p className="text-xs font-semibold text-light-label1 dark:text-dark-label1 font-dm uppercase tracking-wider mb-1">
            Solution
          </p>
          <p className="text-sm text-light-text2 dark:text-dark-text2 font-dm leading-relaxed">
            {story.solution}
          </p>
        </div>
      </div>

      {/* Row 4 - Result */}
      <div className="flex items-start gap-3">
        <div className="w-7 h-7 rounded-md bg-light-card2 dark:bg-dark-card2 flex items-center justify-center shrink-0 mt-0.5">
          <TrendingUp size={15} className="text-button-success" />
        </div>
        <div>
          <p className="text-xs font-semibold text-light-label1 dark:text-dark-label1 font-dm uppercase tracking-wider mb-1">
            Result
          </p>
          <p className="text-sm text-light-text2 dark:text-dark-text2 font-dm leading-relaxed">
            {story.result}
          </p>
        </div>
      </div>

    </div>
  )
}

function Section2() {
  return (
    <section className="bg-light-bg dark:bg-dark-bg py-16 px-6 font-dm">
      <div className="max-w-7xl mx-auto">

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {customerStories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Section2