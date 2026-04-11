import { howItWorksData as data } from "../../data/how_it_works_data/data";
import { ArrowRight, CheckCircle2 } from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../../assets/anime/Profile Card.json";

function HowItWorks() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-light-bg dark:bg-dark-bg font-dm flex flex-col gap-24 pt-16 pb-24 text-light-text1 dark:text-dark-text1 overflow-x-hidden">
      {/* ─── 1. Hero Section ───────────────────────── */}
      <section className="px-6 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start gap-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-button-primary/30 bg-button-primary/10 text-button-primary text-xs font-semibold uppercase tracking-widest">
            {data.hero.badge}
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-[3.2rem] font-black leading-tight tracking-tight max-w-2xl">
            {data.hero.title}
          </h1>

          <p className="text-lg text-light-text2 dark:text-dark-text2 leading-relaxed max-w-xl">
            {data.hero.subtitle}
          </p>

          <div className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
            <button
              onClick={() => navigate("/sign_up")}
              className="px-8 py-3.5 bg-button-primary hover:bg-button-primary-hover text-white rounded-xl font-bold transition-all shadow-lg shadow-button-primary/20 flex items-center gap-2 group"
            >
              Get Started for Free
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center relative ">
          <div className="absolute w-80 h-80 rounded-full bg-button-primary/10 blur-[100px] animate-pulseSlow -z-10" />
          <div className="relative w-full max-w-[500px]">
            <Lottie
              animationData={animationData}
              loop={true}
              className="w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ─── 2. Step-by-Step Process ───────────────────────── */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {data.processHeadline.title}
          </h2>

          <p className="text-light-text2 dark:text-dark-text2 text-lg max-w-2xl mx-auto">
            {data.processHeadline.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/4 left-[10%] right-[10%] h-0.5 bg-linear-to-r from-transparent via-button-primary/20 to-transparent -z-10" />

          {data.steps.map((step, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center gap-6 p-8 rounded-3xl bg-light-card1 dark:bg-dark-card1 border border-light-border dark:border-dark-border hover:border-button-primary/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-button-primary/10 text-button-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-button-primary transition-all duration-500 shadow-sm">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-button-primary text-white text-xs font-bold flex items-center justify-center border-4 border-light-bg dark:border-dark-bg">
                  {step.id}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold group-hover:text-button-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-light-text2 dark:text-dark-text2 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 3. Optional Feature Section ───────────────────────── */}
      <section className="px-6 max-w-5xl mx-auto w-full">
        <div className="relative p-8 md:p-12 rounded-[2.5rem] bg-linear-to-br from-button-primary/5 to-transparent border border-button-primary/20 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-button-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-20 h-20 shrink-0 rounded-2xl bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center text-button-primary border border-light-border dark:border-dark-border">
              {data.optional.icon}
            </div>
            <div className="flex-1 text-center md:text-left space-y-4">
              <h3 className="text-2xl font-bold text-button-primary">
                {data.optional.title}
              </h3>
              <p className="text-lg text-light-text2 dark:text-dark-text2 leading-relaxed">
                {data.optional.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. Supported Workflows ───────────────────────── */}
      <section className="px-6 max-w-7xl mx-auto w-full mb-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {data.workflows.title}
          </h2>
          <div className="w-20 h-1.5 bg-button-primary rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.workflows.items.map((workflow, index) => (
            <div
              key={index}
              className="group flex items-start gap-6 p-8 rounded-4xl bg-light-card1 dark:bg-dark-card1 border border-light-border dark:border-dark-border hover:border-button-primary/40 hover:bg-button-primary/2 transition-all duration-300"
            >
              <div className="p-4 rounded-2xl bg-button-primary/10 text-button-primary group-hover:scale-110 transition-transform">
                {workflow.icon}
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-xl font-bold">{workflow.title}</h3>
                <p className="text-base text-light-text2 dark:text-dark-text2 leading-relaxed">
                  {workflow.description}
                </p>
                <div className="pt-2 flex items-center gap-2 text-button-primary font-semibold text-sm">
                  <CheckCircle2 size={16} />
                  Fully Automated
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HowItWorks;
