import { blogData as data } from "../../../data/resource_blog_data/data";
import {
  BookOpen,
  Sparkles,
  Lightbulb,
  Compass,
  Briefcase,
  PlayCircle,
  ArrowRight,
  Bell,
  Mail,
  Zap,
  TrendingUp,
  CheckCircle2,
} from "../../../assets/icons";

// Icons for categories
const categoryIcons = [Sparkles, Compass, Lightbulb, Briefcase, PlayCircle];

// Abstract gradients for article placeholder images
const articleGradients = [
  "from-violet-500 to-indigo-600",
  "from-emerald-400 to-teal-500",
  "from-blue-500 to-cyan-500",
  "from-orange-400 to-rose-500",
  "from-fuchsia-500 to-purple-600",
];

// Abstract icons to float inside the article gradients
const articleIcons = [Sparkles, Compass, Lightbulb, Briefcase, Zap];

function Blog() {
  return (
    <div className="w-full bg-light-bg dark:bg-dark-bg font-dm flex flex-col pt-16 pb-32 text-light-text1 dark:text-dark-text1 overflow-x-hidden">
      {/* ─── Hero ─── */}
      <section className="px-6 max-w-5xl mx-auto w-full text-center flex flex-col items-center mb-20">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-button-primary/30 bg-button-primary/10 text-button-primary text-xs font-semibold uppercase tracking-widest mb-6">
          <BookOpen size={14} />
          {data.hero.badge}
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-[4rem] font-black leading-tight tracking-tight mb-6 max-w-3xl">
          {data.hero.title}
        </h1>
        <div className="w-full max-w-md mt-6 relative shadow-lg rounded-full">
          <input
            type="email"
            placeholder="Subscribe to our newsletter..."
            className="w-full px-6 py-4 rounded-full bg-light-card1 dark:bg-dark-card1 border border-light-border dark:border-dark-border shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-button-primary/50 text-light-text1 dark:text-white"
          />
          <button className="absolute right-2 top-2 bottom-2 px-6 bg-button-primary text-white font-bold rounded-full hover:bg-button-primary-hover shadow-md hover:shadow-button-primary/30 transition-all active:scale-95">
            Subscribe
          </button>
        </div>
      </section>

      {/* ─── Featured Categories (Bento Grid) ─── */}
      <section className="px-6 max-w-7xl mx-auto w-full mb-32 animate-slideUp">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black">{data.categories.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {data.categories.items.map((category, idx) => {
            const Icon = categoryIcons[idx] || Zap;
            return (
              <div
                key={idx}
                className="p-6 rounded-[1.5rem] bg-light-card1 dark:bg-[#111] border border-light-border dark:border-white/5 shadow-sm hover:shadow-lg hover:border-button-primary/30 transition-all group flex flex-col gap-4 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-button-primary/10 text-button-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-button-primary group-hover:text-white transition-all shadow-inner">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{category.name}</h3>
                  <p className="text-sm text-light-text2 dark:text-gray-400 line-clamp-2 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── Sample Articles Layout ─── */}
      <section
        className="px-6 max-w-7xl mx-auto w-full mb-32 animate-slideUp"
        style={{ animationDelay: "150ms" }}
      >
        <div className="mb-10 flex items-center gap-3">
          <TrendingUp className="text-button-primary" size={24} />
          <h2 className="text-3xl font-black">{data.articles.title}</h2>
        </div>

        {/* Split grid: 1 Featured large article on left, 4 smaller ones on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Left Article (Index 0) */}
          <div className="lg:col-span-5 rounded-[2.5rem] bg-light-card1 dark:bg-dark-card1 border border-light-border dark:border-dark-border shadow-lg overflow-hidden group cursor-pointer hover:shadow-2xl hover:-translate-y-1 hover:border-button-primary/30 transition-all flex flex-col">
            <div
              className={`w-full aspect-[4/3] bg-gradient-to-br ${articleGradients[0]} p-8 flex items-end relative overflow-hidden`}
            >
              {/* Dynamic Animated Icon Layer */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 group-hover:scale-125 transition-all duration-700 mix-blend-overlay">
                {(() => {
                   const Icon = articleIcons[0];
                   return <Icon size={160} className="text-white animate-pulseSlow" />;
                })()}
              </div>
              
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-500" />
              <span className="relative z-10 px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-xs font-bold uppercase tracking-widest shadow-lg">
                Masterclass
              </span>
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-between flex-1">
              <div>
                <span className="text-xs text-button-primary font-black mb-4 block uppercase tracking-widest">
                  Today • 5 min read
                </span>
                <h3 className="text-2xl md:text-3xl font-black leading-tight group-hover:text-button-primary transition-colors duration-300">
                  {data.articles.items[0]}
                </h3>
              </div>
              <div className="mt-8 flex items-center gap-2 text-button-primary font-bold text-sm uppercase tracking-widest">
                Read Article
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          </div>

          {/* Right Column Stack (Indices 1-4) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {data.articles.items.slice(1).map((article, idx) => (
              <div
                key={idx}
                className="rounded-[2rem] bg-light-card1 dark:bg-[#111] border border-light-border dark:border-dark-border overflow-hidden group cursor-pointer hover:shadow-xl hover:border-button-primary/30 hover:-translate-y-1 transition-all flex flex-col shadow-sm"
              >
                <div
                  className={`w-full h-44 bg-gradient-to-br ${articleGradients[idx + 1]} relative overflow-hidden group-hover:scale-105 transition-transform duration-700 flex items-center justify-center`}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 mix-blend-overlay">
                    {(() => {
                      const Icon = articleIcons[idx + 1] || Zap;
                      return <Icon size={80} className="text-white" />;
                    })()}
                  </div>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-between flex-1 relative z-10 bg-light-card1 dark:bg-[#111]">
                  <div>
                    <span className="text-[10px] text-light-text2 dark:text-gray-500 font-bold mb-3 block uppercase tracking-widest">
                      Last Week • Guide
                    </span>
                    <h4 className="text-[1.15rem] font-bold leading-snug line-clamp-3 group-hover:text-button-primary transition-colors delay-100">
                      {article}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Follow CTA Panel ─── */}
      <section className="px-6 max-w-5xl mx-auto w-full mt-10">
        <div className="p-10 md:p-14 rounded-[3rem] bg-[#0A0A0B] border border-white/10 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-12 group">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-button-primary/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-button-primary/30 transition-colors duration-700" />

          <div className="flex-1 relative z-10 text-center md:text-left">
            <div className="w-16 h-16 rounded-2xl bg-button-primary/20 flex items-center justify-center text-button-primary mb-6 border border-button-primary/30 mx-auto md:mx-0 shadow-inner">
              <Bell size={28} />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              {data.whyFollow.title}
            </h2>
            <p className="text-gray-400 font-medium leading-relaxed max-w-sm mb-8 mx-auto md:mx-0">
              Get our latest releases and workflow improvements delivered
              straight to your inbox.
            </p>
            <button className="px-8 py-3.5 bg-white text-button-primary rounded-xl font-bold flex items-center justify-center gap-3 hover:-translate-y-1 hover:shadow-xl transition-all shadow-md mx-auto md:mx-0 w-full md:w-auto">
              <Mail size={18} />
              Join Newsletter
            </button>
          </div>

          <div className="flex-1 relative z-10 w-full">
            <div className="flex flex-col gap-4">
              {data.whyFollow.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-sm group-hover:border-white/20 transition-colors cursor-default"
                >
                  <div className="w-8 h-8 rounded-full bg-button-primary/20 border border-button-primary/30 flex items-center justify-center text-button-primary shrink-0">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-gray-200 text-sm font-semibold">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
