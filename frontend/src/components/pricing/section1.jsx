import { useState } from "react"
import { Link } from "react-router-dom"
import { CircleCheckBig } from "../../assets/icons"
import { pricingPlans } from "../../data/pricing_data/pricingData"

function PlanCard({ plan, isYearly }) {
    const displayPrice = isYearly && plan.yearlyPrice ? plan.yearlyPrice : plan.price
  return (
    <div
      className={`relative flex flex-col h-full rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2
        ${plan.popular
          ? "bg-button-primary border-button-primary shadow-xl"
          : "bg-light-card1 dark:bg-dark-card1 border-light-border dark:border-dark-border hover:border-button-primary hover:shadow-lg"
        }`}
    >

      {/* Most Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-white text-button-primary text-xs font-bold font-dm px-4 py-1.5 rounded-full shadow">
            Most Popular
          </span>
        </div>
      )}

      {/* Plan Name */}
      <h3 className={`text-lg font-bold font-dm mb-1 ${plan.popular ? "text-white" : "text-light-text1 dark:text-dark-text1"}`}>
        {plan.name}
      </h3>

      {/* Price */}
      <div className="flex items-end gap-1 mb-1">
        <span className={`text-4xl font-black font-dm ${plan.popular ? "text-white" : "text-button-primary"}`}>
          {displayPrice}
        </span>
        {plan.period && (
          <span className={`text-sm font-dm mb-1 ${plan.popular ? "text-white opacity-80" : "text-light-text2 dark:text-dark-text2"}`}>
            {plan.period}
          </span>
        )}
      </div>

      {/* Tagline */}
      <p className={`text-xs font-dm mb-6 ${plan.popular ? "text-white opacity-70" : "text-light-text-muted dark:text-dark-text-muted"}`}>
        {plan.tagline}
      </p>

      {/* Divider */}
      <div className={`w-full h-px mb-6 ${plan.popular ? "bg-white opacity-20" : "bg-light-border dark:border-dark-border"}`} />

      {/* Features */}
      <ul className="flex flex-col gap-3 flex-1 mb-8">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <CircleCheckBig
              size={16}
              className={plan.popular ? "text-white" : "text-button-success"}
            />
            <span className={`text-sm font-dm ${plan.popular ? "text-white opacity-90" : "text-light-text2 dark:text-dark-text2"}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Link
        to={plan.path}
        className={`w-full text-center py-2.5 rounded-xl text-sm font-semibold font-dm transition-colors
          ${plan.popular
            ? "bg-white text-button-primary hover:opacity-90"
            : "bg-button-primary text-white hover:bg-button-primary-hover"
          }`}
      >
        {plan.cta}
      </Link>

    </div>
  )
}

function Section1() {
    const [isYearly, setIsYearly] = useState(false)
  return (
    <section className="bg-light-bg dark:bg-dark-bg py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">

          {/* Label */}
          <span className="text-xs font-bold font-dm text-button-primary uppercase tracking-widest mb-3 block">
            Pricing
          </span>

          {/* Title */}
          <h1 className="text-4xl font-black text-light-text1 dark:text-dark-text1 font-dm mb-4">
            Pick a Plan. Start Building.
          </h1>

          {/* Subtitle */}
          <p className="text-base text-light-text2 dark:text-dark-text2 font-dm max-w-xl mx-auto">
            From solo admins to enterprise teams — Zaptian has a plan that fits.
          </p>

          {/* Toggle */}
        {/* <div className="flex items-center justify-center mt-6">
        <div className="flex items-center bg-light-card2 dark:bg-dark-card2 border border-light-border dark:border-dark-border rounded-full p-1">
            
            <button
            onClick={() => setIsYearly(false)}
            className={`px-6 py-2 rounded-full text-sm font-semibold font-dm transition-all duration-200
                ${!isYearly
                ? "bg-button-primary text-white shadow"
                : "text-light-text2 dark:text-dark-text2 hover:text-button-primary"
                }`}
            >
            Monthly
            </button>

            <button
            onClick={() => setIsYearly(true)}
            className={`px-6 py-2 rounded-full text-sm font-semibold font-dm transition-all duration-200
                ${isYearly
                ? "bg-button-primary text-white shadow"
                : "text-light-text2 dark:text-dark-text2 hover:text-button-primary"
                }`}
            >
            Yearly
            <span className="ml-1.5 text-xs bg-button-success text-white px-2 py-0.5 rounded-full">
                Save 20%
            </span>
            </button>

        </div>
        </div> */}

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mt-6">

        {/* Monthly label */}
        <span className={`text-sm font-semibold font-dm transition-colors ${!isYearly ? "text-button-primary" : "text-light-text2 dark:text-dark-text2"}`}>
            Monthly
        </span>

        {/* Toggle button */}
        <div
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-12 h-6 rounded-full cursor-pointer transition-colors duration-300 border ${isYearly ? "bg-button-primary border-button-primary" : "bg-light-card2 dark:bg-dark-card2 border-light-border dark:border-dark-border"}`}
        >
            <div
            className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${isYearly ? "translate-x-6" : "translate-x-0.5"}`}
            />
        </div>

        {/* Yearly label + badge */}
        <div className="flex items-center gap-2">
            <span className={`text-sm font-semibold font-dm transition-colors ${isYearly ? "text-button-primary" : "text-light-text2 dark:text-dark-text2"}`}>
            Yearly
            </span>
            <span className="text-xs font-bold bg-button-success text-white px-2 py-0.5 rounded-full">
            Save 20%
            </span>
        </div>

        </div>

        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} isYearly={isYearly} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Section1