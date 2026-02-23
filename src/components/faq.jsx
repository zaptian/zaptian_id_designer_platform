import { useState } from "react"
import { ChevronDown } from "../assets/icons"
import { faqData } from "../data/faqdata"

function FAQItem({ item }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`border rounded-xl overflow-hidden transition-all duration-200 ${
      open
        ? "border-button-primary"
        : "border-light-border dark:border-dark-border"
    }`}>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-6 py-4 transition-colors text-left ${
          open
            ? "bg-icon-selected dark:bg-icon-dark-selected"
            : "bg-light-card1 dark:bg-dark-card1 hover:bg-light-hover dark:hover:bg-dark-hover"
        }`}
      >
        <span className={`text-sm font-medium font-dm ${
          open
            ? "text-icon-selected-text dark:text-icon-dark-selected-text"
            : "text-light-text1 dark:text-dark-text1"
        }`}>
          {item.question}
        </span>
        <ChevronDown
          size={18}
          className={`transition-transform duration-200 shrink-0 ml-4 ${
            open
              ? "rotate-180 text-button-primary"
              : "text-light-text2 dark:text-dark-text2"
          }`}
        />
      </button>

      {open && (
        <div className="px-6 py-4 bg-light-card2 dark:bg-dark-card2 border-t border-light-border dark:border-dark-border">
          <p className="text-sm text-light-text2 dark:text-dark-text2 leading-relaxed font-dm">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  )
}

function FAQ() {
  return (
    <section className="bg-light-bg dark:bg-dark-bg py-20 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Part 1 - Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-light-text1 dark:text-dark-text1 font-dm mb-3">
            FAQ
          </h2>
          <div className="w-16 h-1 bg-button-primary mx-auto mb-4 rounded-full" />
          <p className="text-light-text2 dark:text-dark-text2 text-base font-dm">
            Quick answers to the questions we hear most.
          </p>
        </div>

        {/* Part 2 - Questions */}
        <div className="flex flex-col gap-3">
          {faqData.map((item) => (
            <FAQItem key={item.question} item={item} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default FAQ