import { aboutData as data } from "../../../data/company_about_data/data";
import { 
  Building, 
  CheckCircle2, 
  Zap, 
  Layers, 
  Target,
  Users,
  Compass,
  Lightbulb,
  ArrowRight
} from "lucide-react";

const focusIcons = {
  CheckCircle2,
  Zap,
  Layers,
  Target
};

function About() {
  return (
    <div className="w-full bg-light-bg dark:bg-dark-bg font-dm flex flex-col pt-16 pb-32 text-light-text1 dark:text-dark-text1 overflow-x-hidden">
      
      {/* ─── Hero ─── */}
      <section className="px-6 max-w-5xl mx-auto w-full text-center flex flex-col items-center mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-button-primary/30 bg-button-primary/10 text-button-primary text-xs font-semibold uppercase tracking-widest mb-6">
          <Building size={14} />
          {data.hero.badge}
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] font-black leading-tight tracking-tight mb-8">
          {data.hero.title}
        </h1>
      </section>

      {/* ─── Our Story (Asymmetric Text Block) ─── */}
      <section className="px-6 max-w-6xl mx-auto w-full mb-32 animate-slideUp" style={{ animationDelay: '100ms' }}>
         <div className="flex flex-col md:flex-row gap-12 lg:gap-24 relative p-8 md:p-16 rounded-[3rem] bg-light-card1 dark:bg-[#0c0c0e] border border-light-border dark:border-white/5 shadow-xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-button-primary/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-button-primary/20 transition-all duration-700" />
            
            <div className="w-full md:w-1/3 relative z-10">
               <h2 className="text-3xl lg:text-4xl font-black sticky top-32">
                  {data.story.title}.
               </h2>
               <div className="w-16 h-1.5 bg-button-primary mt-6 rounded-full" />
            </div>
            
            <div className="w-full md:w-2/3 flex flex-col gap-6 relative z-10 text-lg md:text-[1.15rem] leading-relaxed text-light-text2 dark:text-gray-300 font-medium tracking-wide">
               {data.story.paragraphs.map((p, idx) => (
                  <p key={idx} className={idx === 0 ? "text-xl md:text-2xl font-semibold text-light-text1 dark:text-white mb-2" : ""}>
                     {p}
                  </p>
               ))}
            </div>
         </div>
      </section>

      {/* ─── What We Focus On (Bento Grid) ─── */}
      <section className="px-6 max-w-6xl mx-auto w-full mb-32 animate-slideUp" style={{ animationDelay: '200ms' }}>
         <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-black">{data.focus.title}</h2>
         </div>
         
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.focus.items.map((item, idx) => {
               const Icon = focusIcons[item.icon] || Lightbulb;
               return (
                  <div key={idx} className="p-8 md:p-10 rounded-[2rem] bg-light-card1 dark:bg-[#111] border border-light-border dark:border-white/5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-5 group cursor-pointer relative overflow-hidden">
                     {/* Hover gradient sweep */}
                     <div className="absolute inset-0 bg-gradient-to-br from-button-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                     
                     <div className="w-14 h-14 rounded-2xl bg-button-primary/10 text-button-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-button-primary group-hover:text-white transition-all shadow-inner relative z-10">
                        <Icon size={24} />
                     </div>
                     <h3 className="text-2xl font-bold dark:text-white relative z-10">{item.name}</h3>
                     <p className="text-light-text2 dark:text-gray-400 font-medium leading-relaxed relative z-10">
                        {item.description}
                     </p>
                  </div>
               )
            })}
         </div>
      </section>

      {/* ─── Approach & Audience Split Block ─── */}
      <section className="px-6 max-w-6xl mx-auto w-full mb-32 animate-slideUp" style={{ animationDelay: '300ms' }}>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Who We Build For */}
            <div className="p-10 md:p-12 rounded-[2.5rem] bg-white dark:bg-[#15171e] border border-light-border dark:border-white/5 shadow-lg relative overflow-hidden flex flex-col group hover:border-button-primary/30 transition-colors duration-500">
               <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-20 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                  <Users size={120} />
               </div>
               <h3 className="text-2xl font-black mb-4 relative z-10 dark:text-white">{data.audiences.title}</h3>
               <p className="text-light-text2 dark:text-gray-400 font-medium mb-8 relative z-10">
                  {data.audiences.description}
               </p>
               <div className="flex flex-col gap-4 relative z-10">
                  {data.audiences.items.map((item, idx) => (
                     <div key={idx} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                           <CheckCircle2 size={16} />
                        </div>
                        <span className="font-semibold text-light-text1 dark:text-white">{item}</span>
                     </div>
                  ))}
               </div>
            </div>

            {/* Our Approach */}
            <div className="p-10 md:p-12 rounded-[2.5rem] bg-white dark:bg-[#15171e] border border-light-border dark:border-white/5 shadow-lg relative overflow-hidden flex flex-col group hover:border-button-primary/30 transition-colors duration-500">
               <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-20 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                  <Compass size={120} />
               </div>
               <h3 className="text-2xl font-black mb-4 relative z-10 dark:text-white">{data.approachAndVision.approach.title}</h3>
               <p className="text-light-text2 dark:text-gray-400 font-medium mb-8 relative z-10">
                  {data.approachAndVision.approach.description}
               </p>
               <div className="flex flex-col gap-4 relative z-10">
                  {data.approachAndVision.approach.items.map((item, idx) => (
                     <div key={idx} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-button-primary/10 text-button-primary flex items-center justify-center shrink-0">
                           <ArrowRight size={16} />
                        </div>
                        <span className="font-semibold text-light-text1 dark:text-white">{item}</span>
                     </div>
                  ))}
               </div>
            </div>

         </div>
      </section>

      {/* ─── Our Vision (Massive Banner CTA) ─── */}
      <section className="px-6 max-w-5xl mx-auto w-full">
         <div className="px-8 py-16 md:px-16 md:py-24 rounded-[3.5rem] bg-gradient-to-br from-[#0c0c0e] to-[#1a1c23] border border-white/10 shadow-2xl relative overflow-hidden flex flex-col items-center text-center group cursor-default">
            
            {/* Visual ambient sweep */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--button-primary),0.15)_0%,transparent_60%)] group-hover:scale-110 transition-transform duration-1000" />
            
            <div className="w-20 h-20 rounded-full bg-button-primary/20 backdrop-blur-md flex items-center justify-center text-button-primary mb-8 relative z-10 border border-button-primary/30 shadow-[0_0_40px_-10px_rgba(var(--button-primary),0.5)]">
               <Lightbulb size={36} className="group-hover:animate-pulseSlow" />
            </div>
            
            <h2 className="text-sm font-black text-button-primary uppercase tracking-[0.3em] mb-6 relative z-10">
               {data.approachAndVision.vision.title}
            </h2>
            
            <p className="text-2xl md:text-4xl lg:text-[2.5rem] font-bold text-white leading-tight max-w-3xl relative z-10 tracking-tight">
               "{data.approachAndVision.vision.description}"
            </p>
            
         </div>
      </section>

    </div>
  );
}

export default About;
