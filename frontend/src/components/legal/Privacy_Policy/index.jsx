import React, { useState, useEffect } from "react";
import { privacyData as data } from "../../../data/legal_privacy_data/data";
import { Lock, ChevronRight } from "lucide-react";

function Privacy() {
  const [activeSection, setActiveSection] = useState(data.sections[0].id);

  // Advanced IntersectionObserver Logic to update active sidebar link based on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = activeSection;
      data.sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            current = section.id;
          }
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Fixed header bypass offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="w-full min-h-screen bg-light-bg dark:bg-dark-bg font-dm text-light-text1 dark:text-dark-text1">
      
      {/* ─── HERO HEADER ─── */}
      <div className="w-full bg-light-card1 dark:bg-[#0c0c0e] border-b border-light-border dark:border-dark-border py-16 md:py-24 relative overflow-hidden">
        {/* Glow Ambient Layer */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-button-primary/5 blur-[100px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-button-primary/10 blur-[120px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-button-primary/10 flex flex-col items-center justify-center mb-6 text-button-primary shadow-[0_0_30px_-5px_rgba(var(--button-primary),0.3)]">
            <Lock size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            {data.header.title}
          </h1>
          <p className="text-lg md:text-xl text-light-text2 dark:text-dark-text2 max-w-2xl font-medium">
            {data.header.description}
          </p>
          <div className="mt-8 px-5 py-2 rounded-full border border-light-border dark:border-dark-border bg-white dark:bg-[#14151a] shadow-sm text-sm font-bold text-light-text2 dark:text-gray-400">
            Last Updated: <span className="text-light-text1 dark:text-white">{data.header.lastUpdated}</span>
          </div>
        </div>
      </div>

      {/* ─── MAIN DOCUMENT CONTAINER ─── */}
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12">
        
        {/* Sticky Table of Contents Navigation (Left Sidebar) */}
        <div className="hidden lg:block w-72 shrink-0">
          <div className="sticky top-28 flex flex-col gap-2 p-6 rounded-3xl bg-white dark:bg-[#0c0c0e]/80 backdrop-blur-md border border-light-border dark:border-white/5 shadow-xl">
            <h3 className="font-bold text-sm tracking-widest uppercase mb-4 text-light-text1 dark:text-white flex items-center gap-2">
               <Lock size={16} className="text-button-primary" />
               Contents
            </h3>
            <ul className="flex flex-col gap-1.5 h-[calc(100vh-250px)] overflow-y-auto pr-2 custom-scrollbar">
              {data.sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-between group ${
                      activeSection === section.id
                        ? "bg-gradient-to-r from-button-primary to-[#0f4c9c] text-white shadow-md scale-[1.02]"
                        : "text-light-text2 dark:text-gray-400 hover:bg-light-hover dark:hover:bg-white/5 hover:text-light-text1 dark:hover:text-white"
                    }`}
                  >
                    <span className="truncate pr-2">{section.title}</span>
                    <ChevronRight size={16} className={`transition-transform duration-300 ${activeSection === section.id ? "opacity-100 translate-x-1" : "opacity-0 -translate-x-2 group-hover:opacity-50"}`} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal Text Body (Right Col) */}
        <div className="flex-1 max-w-4xl lg:pl-4">
          <div className="flex flex-col gap-12 animate-slideUp">
            {data.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-32">
                <h2 className="text-2xl font-black mb-5 text-light-text1 dark:text-white flex items-center gap-3">
                   <div className="w-1.5 h-8 rounded-full bg-button-primary shadow-[0_0_10px_rgba(var(--button-primary),0.5)] block" />
                   {section.title}
                </h2>
                
                <div className="flex flex-col gap-5 text-base md:text-[17px] leading-relaxed text-light-text2 dark:text-gray-300 font-medium">
                  {/* Paragraph */}
                  {section.content && <p className="opacity-90">{section.content}</p>}
                  
                  {/* Structured List Blocks */}
                  {section.list && section.list.length > 0 && (
                    <ul className="flex flex-col gap-3 pl-1 mt-1">
                      {section.list.map((item, i) => (
                        <li key={i} className="flex flex-row gap-4 items-start bg-white dark:bg-[#111216] p-4 rounded-xl border border-light-border dark:border-white/5 shadow-sm hover:shadow-md transition-shadow group">
                          <div className="w-2 h-2 rounded-full bg-button-primary mt-2 shrink-0 group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(var(--button-primary),0.8)]" />
                          <span className="leading-snug opacity-90 group-hover:opacity-100 transition-opacity">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Clarification Suffix */}
                  {section.suffix && (
                     <div className="mt-3 p-4 rounded-xl bg-button-primary/5 border border-button-primary/10 text-light-text1 dark:text-white font-semibold flex flex-col sm:flex-row sm:items-center gap-2">
                        <span className="italic mr-1 font-black text-button-primary opacity-80 whitespace-nowrap">Notice:</span>
                        <span>{section.suffix}</span>
                     </div>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Privacy;