import React, { useState, useRef, useEffect } from "react";
import { partnerData as data } from "../../../data/company_partner_data/data";
import {
  Users,
  Handshake,
  Briefcase,
  Settings,
  CheckCircle2,
  Target,
  ArrowRight,
  Send,
  ChevronDown,
} from "lucide-react";

// Map static strings to components
const iconMap = {
  Briefcase,
  Settings,
  Users,
};

const CustomSelect = ({ field }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <input type="hidden" name={field.name} value={selected} required={field.required} />
      
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-4 rounded-xl bg-white dark:bg-[#14151a] border ${isOpen ? 'border-button-primary ring-1 ring-button-primary' : 'border-light-border dark:border-white/10'} flex items-center justify-between cursor-pointer transition-all shadow-inner`}
      >
        <span className={selected ? 'text-light-text1 dark:text-white font-medium' : 'text-gray-400 font-normal'}>
          {selected || field.placeholder || 'Select an option'}
        </span>
        <ChevronDown size={18} className={`text-button-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      <div className={`absolute z-[60] w-full mt-2 rounded-xl bg-white dark:bg-[#1a1c23] border border-light-border dark:border-white/10 shadow-2xl overflow-hidden transition-all duration-300 origin-top flex flex-col ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-95 opacity-0 pointer-events-none'}`}>
        <div className="max-h-[220px] overflow-y-auto py-2">
          {field.options.map((opt, idx) => (
             <div 
               key={idx}
               onClick={() => {
                 setSelected(opt);
                 setIsOpen(false);
               }}
               className={`px-5 py-3 cursor-pointer transition-all ${selected === opt ? 'bg-button-primary/10 text-button-primary font-bold' : 'text-light-text1 dark:text-gray-300 hover:bg-light-bg dark:hover:bg-white/5 hover:ml-1 font-medium'}`}
             >
                {opt}
             </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Partners() {
  return (
    <div className="w-full bg-light-bg dark:bg-dark-bg font-dm flex flex-col pt-16 pb-32 text-light-text1 dark:text-dark-text1 min-h-screen overflow-x-hidden">
      {/* ─── Hero ─── */}
      <section className="px-6 max-w-5xl mx-auto w-full text-center flex flex-col items-center mb-24">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-button-primary/30 bg-button-primary/10 text-button-primary text-xs font-semibold uppercase tracking-widest mb-6">
          <Handshake size={16} />
          {data.hero.badge}
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-[4rem] font-black leading-tight tracking-tight mb-6">
          {data.hero.title}
        </h1>
        <p className="text-xl text-light-text2 dark:text-dark-text2 max-w-2xl leading-relaxed">
          {data.hero.subtitle}
        </p>
      </section>

      {/* ─── Opportunities (Grid) ─── */}
      <section className="px-6 max-w-7xl mx-auto w-full mb-32 animate-slideUp">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black">
            {data.opportunities.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-button-primary/5 blur-[100px] pointer-events-none rounded-full" />

          {data.opportunities.items.map((item, idx) => {
            const Icon = iconMap[item.icon] || Briefcase;
            return (
              <div
                key={idx}
                className="p-8 md:p-10 rounded-[2rem] bg-light-card1 dark:bg-[#111] border border-light-border dark:border-white/5 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center gap-4 group relative z-10 w-full overflow-hidden"
              >
                <div className="w-16 h-16 rounded-2xl bg-button-primary/10 border border-button-primary/20 flex items-center justify-center text-button-primary transition-all duration-300 group-hover:bg-button-primary group-hover:text-white group-hover:scale-110 shadow-inner mb-2">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-light-text1 dark:text-white tracking-tight">
                  {item.name}
                </h3>
                <p className="text-[0.95rem] text-light-text2 dark:text-gray-400 font-medium leading-relaxed max-w-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── Audience & Benefits (Split View) ─── */}
      <section
        className="px-6 max-w-6xl mx-auto w-full mb-32 animate-slideUp"
        style={{ animationDelay: "150ms" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Target Audience */}
          <div className="p-10 md:p-14 rounded-[2.5rem] bg-[#0c0c0e] border border-white/5 shadow-2xl relative overflow-hidden flex flex-col group text-white">
            <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-700 text-button-primary">
              <Target size={140} />
            </div>
            <h3 className="text-3xl font-black mb-4 relative z-10">
              {data.audience.title}
            </h3>
            <div className="w-12 h-1 bg-button-primary mb-10 rounded-full relative z-10" />
            <div className="flex flex-col gap-6 relative z-10">
              {data.audience.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-button-primary/20 flex items-center justify-center shrink-0 border border-button-primary/30">
                    <ArrowRight size={16} className="text-button-primary" />
                  </div>
                  <span className="font-semibold text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="p-10 md:p-14 rounded-[2.5rem] bg-white dark:bg-[#15171e] border border-light-border dark:border-white/5 shadow-xl relative overflow-hidden flex flex-col group">
            <h3 className="text-3xl font-black mb-4 relative z-10 dark:text-white">
              {data.benefits.title}
            </h3>
            <div className="w-12 h-1 bg-emerald-500 mb-10 rounded-full relative z-10" />
            <div className="flex flex-col gap-6 relative z-10">
              {data.benefits.items.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="font-semibold text-light-text1 dark:text-gray-200 text-lg leading-snug">
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── How It Works (Timeline) ─── */}
      <section
        className="px-6 max-w-5xl mx-auto w-full mb-32 animate-slideUp"
        style={{ animationDelay: "200ms" }}
      >
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-black">{data.howItWorks.title}</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 relative w-full px-4">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-light-border dark:bg-white/10 -translate-y-1/2 hidden md:block" />

          {data.howItWorks.steps.map((step, idx) => (
            <div
              key={idx}
              className="relative z-10 flex-1 flex flex-col items-center text-center group cursor-default w-full md:w-auto"
            >
              <div className="w-16 h-16 rounded-full bg-light-bg dark:bg-dark-bg border-[3px] border-light-border dark:border-[#333] flex items-center justify-center text-xl font-black text-light-text2 dark:text-gray-400 group-hover:border-button-primary group-hover:text-button-primary group-hover:scale-110 transition-all duration-300 shadow-md">
                {step.id}
              </div>
              <h4 className="mt-6 font-bold text-light-text1 dark:text-white text-lg max-w-[200px] leading-snug">
                {step.text}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Massive Form Application Portal ─── */}
      <section
        className="px-6 max-w-4xl mx-auto w-full animate-slideUp"
        style={{ animationDelay: "300ms" }}
      >
        <div className="p-8 md:p-14 rounded-[3rem] bg-light-card1 dark:bg-[#0c0c0e]/80 backdrop-blur-3xl border border-light-border dark:border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] relative w-full flex flex-col overflow-hidden">
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-button-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="mb-10 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-4 dark:text-white tracking-tight">
              {data.form.title}
            </h2>
            <p className="text-light-text2 dark:text-gray-400 font-medium">
              {data.form.subtitle}
            </p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full relative z-10">
            {data.form.fields.map((field, idx) => {
              const isFullWidth =
                field.type === "textarea" ||
                field.name === "organization" ||
                field.name === "plan" ||
                field.name === "notes";

              return (
                <div
                  key={idx}
                  className={`flex flex-col gap-2 ${isFullWidth ? "md:col-span-2" : "md:col-span-1"}`}
                >
                  <label
                    htmlFor={field.name}
                    className="text-sm font-bold text-light-text1 dark:text-gray-300 ml-1"
                  >
                    {field.label}{" "}
                    {field.required && <span className="text-red-500">*</span>}
                  </label>

                  {field.type === "textarea" ? (
                    <textarea
                      id={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      rows={4}
                      className="w-full p-4 rounded-xl bg-white dark:bg-[#14151a] border border-light-border dark:border-white/10 placeholder:text-gray-400 focus:outline-none focus:border-button-primary focus:ring-1 focus:ring-button-primary text-light-text1 dark:text-white resize-y transition-all shadow-inner"
                    />
                  ) : field.type === "select" ? (
                    <CustomSelect field={field} />
                  ) : (
                    <input
                      type={field.type}
                      id={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      className="w-full p-4 rounded-xl bg-white dark:bg-[#14151a] border border-light-border dark:border-white/10 placeholder:text-gray-400 focus:outline-none focus:border-button-primary focus:ring-1 focus:ring-button-primary text-light-text1 dark:text-white transition-all shadow-inner"
                    />
                  )}
                </div>
              );
            })}

            <div className="md:col-span-2 mt-8">
              <button
                type="button"
                className="w-full py-5 bg-gradient-to-r from-button-primary to-[#0f4c9c] text-white font-black rounded-xl hover:shadow-[0_0_30px_-5px_rgba(var(--button-primary),0.5)] transition-all hover:-translate-y-1 flex items-center justify-center gap-3 text-lg active:scale-95 group uppercase tracking-widest"
              >
                {data.form.submitText}
                <Send
                  size={20}
                  className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Partners;
