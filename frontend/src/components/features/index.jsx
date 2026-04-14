import { featuresData as data } from "../../data/features_data/data";
import { Wand2, QrCode, Layers, Move, Printer } from "../../assets/icons";

function Features() {
  return (
    <div className="w-full bg-light-bg dark:bg-dark-bg font-dm flex flex-col gap-20 pt-16 pb-24 text-light-text1 dark:text-dark-text1 overflow-x-hidden">
      {/* ─── Hero Section ───────────────────────── */}
      <section className="px-6 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* ─── LEFT: Content ───────────────────────── */}
        <div className="flex-1 text-center lg:text-left items-center lg:items-start flex flex-col gap-6">
          <span className="inline-flex gap-2 px-4 py-1.5 rounded-full border border-button-primary/30 bg-button-primary/10 text-button-primary text-xs font-semibold uppercase tracking-widest">
            {data.hero.badge}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-[56px] font-black leading-tight tracking-tight max-w-xl">
            {data.hero.title}
          </h1>
          <p className="text-lg text-light-text2 dark:text-dark-text2 max-w-lg mt-2">
            {data.hero.sub_title}
          </p>
        </div>

        {/* ─── RIGHT: Theme Animation Area ─────────── */}
        <div className="flex-1 relative flex items-center justify-center width_425px_hidden min-h-[460px] w-full">
          {/* Subtle background glow */}
          <div className="absolute w-[280px] h-[280px] rounded-full bg-button-primary/10 blur-[100px] animate-pulseSlow" />
          
          {/* Central Feature Hub */}
          <div className="relative z-10 p-8 rounded-[32px] bg-linear-to-br from-light-card1/90 to-light-bg/50 dark:from-dark-card1/90 dark:to-dark-bg/50 backdrop-blur-md border border-light-border dark:border-dark-border shadow-2xl animate-floatCard w-full max-w-sm">
             {/* Sparkle decoration */}
             <div className="absolute top-4 right-4 w-12 h-12 bg-button-primary/10 rounded-full blur-xl" />
             
             <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-12 rounded-xl bg-button-primary/10 flex items-center justify-center text-button-primary">
                 <Wand2 size={24} />
               </div>
               <div>
                  <h3 className="font-bold text-lg">Zaptian Features</h3>
                  <p className="text-xs text-light-text2 dark:text-dark-text2 mt-0.5">Unleash your creativity</p>
               </div>
             </div>

             <div className="space-y-4">
               {/* Feature Bar 1 */}
               <div className="h-10 w-full rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 flex items-center px-4 gap-3">
                 <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                 <div className="h-2 w-32 rounded-full bg-button-primary/50" />
               </div>
               {/* Feature Bar 2 */}
               <div className="h-10 w-[85%] rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 flex items-center px-4 gap-3">
                 <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse delay-75" />
                 <div className="h-2 w-24 rounded-full bg-button-primary/50" />
               </div>
               {/* Feature Bar 3 */}
               <div className="h-10 w-[95%] rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 flex items-center px-4 gap-3">
                 <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse delay-150" />
                 <div className="h-2 w-28 rounded-full bg-button-primary/50" />
               </div>
             </div>
          </div>

          {/* Floating Action Chips */}
          <div className="absolute top-[0%] left-[10%] md:left-[8%] bg-light-card1 dark:bg-dark-card1 p-3.5 rounded-2xl shadow-xl border border-light-border dark:border-dark-border animate-floatCard" style={{ animationDelay: '2s' }}>
             <Printer size={24} className="text-amber-500" />
          </div>

          <div className="absolute top-[15%] right-[5%] md:right-[0%] bg-light-card1 dark:bg-dark-card1 p-3.5 rounded-2xl shadow-xl border border-light-border dark:border-dark-border animate-floatCard" style={{ animationDelay: '1s' }}>
             <QrCode size={24} className="text-button-primary" />
          </div>
          
          <div className="absolute bottom-[15%] left-[10%] md:left-[0%] bg-light-card1 dark:bg-dark-card1 p-3.5 rounded-2xl shadow-xl border border-light-border dark:border-dark-border animate-floatCard" style={{ animationDelay: '2s' }}>
             <Layers size={24} className="text-purple-500" />
          </div>

          <div className="absolute bottom-[10%] right-[5%] md:right-[0%] bg-light-card1 dark:bg-dark-card1 p-3.5 rounded-2xl shadow-xl border border-light-border dark:border-dark-border animate-floatCard" style={{ animationDelay: '2s' }}>
             <Move size={24} className="text-green-500" />
          </div>
        </div>
      </section>

      {/* ─── Categorized Features ───────────────── */}
      <div className="px-6 max-w-7xl mx-auto w-full flex flex-col gap-20">
        {data.categories.map((category, catIndex) => (
          <section key={catIndex} className="flex flex-col gap-8">
            <div className="border-b border-light-border dark:border-dark-border pb-4">
               <h2 className="text-2xl font-bold tracking-tight text-button-primary">{category.title}</h2>
               {category.description && (
                  <p className="text-light-text2 dark:text-dark-text2 mt-1">{category.description}</p>
               )}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.features.map((feature, featIndex) => (
                <div 
                  key={featIndex}
                  className="group relative bg-light-card1 dark:bg-dark-card1 border border-light-border dark:border-dark-border p-6 md:p-8 rounded-3xl flex flex-col items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-button-primary/40 hover:shadow-lg overflow-hidden"
                >
                  {/* Subtle hover background glow */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-button-primary/5 rounded-full blur-2xl group-hover:bg-button-primary/15 transition-colors duration-500" />
                  
                  <div className="p-3.5 rounded-xl bg-button-primary/10 transition-colors group-hover:bg-button-primary/20 shrink-0">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-[1.15rem] font-bold mt-2">{feature.title}</h3>
                  <p className="text-[0.95rem] text-light-text2 dark:text-dark-text2 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Features;
