import React, { useState, useRef, useEffect } from "react";
import { contactData as data } from "../../../data/company_contact_data/data";
import { 
  MessageSquare, 
  LifeBuoy, 
  Briefcase, 
  MapPin, 
  Send,
  Mail,
  ChevronDown
} from "lucide-react";

// Map static strings to components
const iconMap = {
  MessageSquare,
  Headset: LifeBuoy,
  Briefcase,
  MapPin
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

function Contact() {
  return (
    <div className="w-full bg-light-bg dark:bg-dark-bg font-dm flex flex-col pt-16 pb-32 text-light-text1 dark:text-dark-text1 min-h-screen overflow-x-hidden">
      
      {/* ─── Hero ─── */}
      <section className="px-6 max-w-6xl mx-auto w-full mb-16 text-center md:text-left flex flex-col items-center md:items-start">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-button-primary/30 bg-button-primary/10 text-button-primary text-xs font-semibold uppercase tracking-widest mb-6">
          <Mail size={14} />
          {data.hero.badge}
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] font-black leading-tight tracking-tight">
          {data.hero.title}
        </h1>
      </section>

      {/* ─── Split Hub: Information (Left) vs Form (Right) ─── */}
      <section className="px-6 max-w-6xl mx-auto w-full animate-slideUp">
         <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
            
            {/* Left: Communication Channels & Info */}
            <div className="w-full lg:w-[40%] flex flex-col gap-10 pt-4 relative z-10">
               <div>
                  <h2 className="text-3xl font-black mb-4 dark:text-white">{data.intro.title}</h2>
                  <p className="text-[1.1rem] text-light-text2 dark:text-gray-400 leading-relaxed font-medium">
                     {data.intro.description}
                  </p>
               </div>
               
               <div className="w-full h-px bg-light-border dark:bg-white/10" />

               {/* Channel List */}
               <div className="flex flex-col gap-8">
                  {data.channels.map((channel, idx) => {
                     const Icon = iconMap[channel.icon] || Mail;
                     return (
                        <div key={idx} className="flex gap-5 group items-start cursor-default">
                           <div className="w-14 h-14 rounded-2xl bg-light-card1 dark:bg-[#111] border border-light-border dark:border-white/5 flex items-center justify-center text-button-primary group-hover:bg-button-primary group-hover:text-white transition-all shadow-sm shrink-0 duration-300">
                              <Icon size={24} />
                           </div>
                           <div className="flex flex-col justify-center pt-1">
                              <h3 className="text-[1.1rem] font-bold dark:text-white mb-1 tracking-tight">{channel.name}</h3>
                              <div className="flex flex-col gap-1 mt-1">
                                 {channel.details.map((detail, dIdx) => (
                                    <span key={dIdx} className="text-[0.95rem] text-light-text2 dark:text-gray-400 font-medium">
                                       {detail}
                                    </span>
                                 ))}
                              </div>
                           </div>
                        </div>
                     )
                  })}
               </div>

               <div className="w-full h-px bg-light-border dark:bg-white/10" />

               {/* Location Block */}
               <div className="flex gap-5 group items-start pb-8 lg:pb-0 cursor-default">
                  <div className="w-14 h-14 rounded-2xl bg-light-card1 dark:bg-[#111] border border-light-border dark:border-white/5 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-sm shrink-0 duration-300">
                     <MapPin size={24} />
                  </div>
                  <div className="flex flex-col justify-center pt-1">
                     <h3 className="text-[1.1rem] font-bold dark:text-white mb-1 tracking-tight">{data.location.title}</h3>
                     <div className="flex flex-col gap-1 mt-1">
                        {data.location.details.map((detail, dIdx) => (
                           <span key={dIdx} className="text-[0.95rem] text-light-text2 dark:text-gray-400 font-medium">
                              {detail}
                           </span>
                        ))}
                     </div>
                  </div>
               </div>

            </div>

            {/* Right: Premium Interactive Form */}
            <div className="w-full lg:w-[60%] relative">
               {/* Ambient Glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-button-primary/10 blur-[100px] pointer-events-none rounded-full" />
               
               <div className="p-8 md:p-12 rounded-[2.5rem] bg-light-card1 dark:bg-[#0c0c0e]/90 backdrop-blur-2xl border border-light-border dark:border-white/5 shadow-2xl relative z-10 w-full flex flex-col">
                  
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                     {data.form.fields.map((field, idx) => {
                        const isFullWidth = field.type === "textarea" || field.name === "organization" || field.name === "subject";
                        
                        return (
                           <div key={idx} className={`flex flex-col gap-2 ${isFullWidth ? 'md:col-span-2' : 'md:col-span-1'}`}>
                              <label htmlFor={field.name} className="text-sm font-bold text-light-text1 dark:text-gray-300 ml-1">
                                 {field.label}
                                 {field.type === "textarea" && <span className="text-xs text-gray-400 ml-2 font-normal">({field.maxLength} max)</span>}
                              </label>
                              
                              {field.type === "textarea" ? (
                                 <textarea 
                                    id={field.name}
                                    placeholder={field.placeholder}
                                    maxLength={field.maxLength}
                                    rows={5}
                                    className="w-full p-4 rounded-xl bg-white dark:bg-[#14151a] border border-light-border dark:border-white/10 placeholder:text-gray-400 focus:outline-none focus:border-button-primary focus:ring-1 focus:ring-button-primary text-light-text1 dark:text-white resize-none transition-all shadow-inner"
                                 />
                              ) : field.type === "select" ? (
                                 <CustomSelect field={field} />
                              ) : (
                                 <input 
                                    type={field.type}
                                    id={field.name}
                                    placeholder={field.placeholder}
                                    className="w-full p-4 rounded-xl bg-white dark:bg-[#14151a] border border-light-border dark:border-white/10 placeholder:text-gray-400 focus:outline-none focus:border-button-primary focus:ring-1 focus:ring-button-primary text-light-text1 dark:text-white transition-all shadow-inner"
                                 />
                              )}
                           </div>
                        );
                     })}
                     
                     <div className="md:col-span-2 mt-4">
                        <button type="button" className="w-full py-4 bg-button-primary text-white font-black rounded-xl hover:bg-button-primary-hover shadow-lg hover:shadow-[0_0_20px_-5px_rgba(var(--button-primary),0.5)] transition-all hover:-translate-y-1 flex items-center justify-center gap-2 text-lg active:scale-95 group">
                           {data.form.submitText}
                           <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                     </div>
                  </form>
               </div>
            </div>

         </div>
      </section>

    </div>
  );
}

export default Contact;
