import { useNavigate } from "react-router-dom";
import { Quote, ArrowRight, Zap, CheckCircle2, Shield } from "../assets/icons";
import { homeData } from "../data/homedata";

/* ─── Floating status badge ──────────────────────────────────────────────── */
function FloatingBadge({ icon, label, sub, className, style }) {
  return (
    <div
      className={`absolute flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl border backdrop-blur-md shadow-xl ${className}`}
      style={style}
    >
      <div className="shrink-0">{icon}</div>
      <div className="leading-tight">
        <p className="text-xs font-bold text-white whitespace-nowrap">
          {label}
        </p>
        {sub && (
          <p className="text-[10px] text-white/60 whitespace-nowrap">{sub}</p>
        )}
      </div>
    </div>
  );
}

/* ─── QR code SVG placeholder ────────────────────────────────────────────── */
function QRPlaceholder() {
  const pattern = [
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
    [1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
    [1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0],
  ];
  const cells = [];
  pattern.forEach((row, r) =>
    row.forEach((val, c) => {
      if (val)
        cells.push(
          <rect
            key={`${r}-${c}`}
            x={c * 5}
            y={r * 5}
            width={4}
            height={4}
            fill="currentColor"
          />,
        );
    }),
  );
  return (
    <svg
      viewBox="0 0 95 95"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {cells}
    </svg>
  );
}

/* ─── 3-D ID Card Scene ──────────────────────────────────────────────────── */
function IDCardScene() {
  return (
    <div
      className="relative w-full h-[480px] md:h-[560px] flex items-center justify-center select-none"
      style={{ animation: "smoothFloat 4s ease-in-out infinite" }}
    >
      {/* Ambient glow orbs — professional blue, no cyan */}
      <div
        className="orb-1 absolute w-72 h-72 rounded-full -z-10 opacity-25 dark:opacity-35 blur-3xl"
        style={{
          background: "radial-gradient(circle, #2563eb 0%, transparent 70%)",
          top: "10%",
          left: "10%",
        }}
      />
      <div
        className="orb-2 absolute w-48 h-48 rounded-full -z-10 opacity-15 dark:opacity-25 blur-2xl"
        style={{
          background: "radial-gradient(circle, #1d4ed8 0%, transparent 70%)",
          bottom: "10%",
          right: "10%",
        }}
      />

      {/* Back card — deep navy */}
      <div
        className="card-back absolute w-64 h-[168px] rounded-2xl border border-white/5"
        style={{
          background: "linear-gradient(135deg, #060c1a 0%, #0d1526 100%)",
          boxShadow:
            "0 25px 60px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.04)",
        }}
      />

      {/* Main ID card — dark navy + blue accent */}
      <div
        className="card-main relative w-72 h-[188px] rounded-2xl overflow-hidden"
        style={{
          background:
            "linear-gradient(140deg, #0d1b35 0%, #112044 55%, #091529 100%)",
        }}
      >
        {/* Shimmer sweep — blue tinted */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, transparent 35%, rgba(59,130,246,0.14) 50%, transparent 65%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 3.5s linear infinite",
          }}
        />

        {/* Decorative arc rings — blue tint */}
        <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full border border-blue-500/10" />
        <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border border-blue-500/10" />

        {/* Header strip */}
        <div className="absolute top-3.5 left-4 right-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-blue-600/25 flex items-center justify-center">
              <Zap size={12} className="text-blue-300" />
            </div>
            <span className="text-blue-100/90 text-[10px] font-bold tracking-widest uppercase">
              Zaptian ID Designer
            </span>
          </div>
          <span className="text-blue-400/50 text-[9px] font-mono">ID-1017</span>
        </div>

        {/* Card body */}
        <div className="absolute bottom-3 left-4 right-4 flex items-end gap-3">
          {/* Avatar silhouette — blue */}
          <div
            className="w-14 h-14 rounded-xl border-2 border-blue-500/25 shrink-0 overflow-hidden flex items-end justify-center"
            style={{
              background:
                "linear-gradient(180deg, rgba(59,130,246,0.18) 0%, rgba(255,255,255,0.03) 100%)",
            }}
          >
            <svg
              viewBox="0 0 56 56"
              className="w-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="28" cy="20" r="10" fill="rgba(59,130,246,0.55)" />
              <ellipse
                cx="28"
                cy="52"
                rx="18"
                ry="14"
                fill="rgba(59,130,246,0.38)"
              />
            </svg>
          </div>

          {/* Name + field bars */}
          <div className="flex-1 flex flex-col gap-1.5 mb-1">
            <div className="h-2.5 w-28 rounded-full bg-blue-50/80" />
            <div className="h-2   w-20 rounded-full bg-blue-200/35" />
            <div className="flex gap-1.5 mt-1">
              <div className="h-1.5 w-12 rounded-full bg-blue-300/20" />
              <div className="h-1.5 w-10 rounded-full bg-blue-300/20" />
            </div>
          </div>

          {/* QR code with blue scan line */}
          <div
            className="w-12 h-12 rounded-lg p-1.5 shrink-0 relative overflow-hidden"
            style={{ background: "rgba(2,6,23,0.92)" }}
          >
            <div className="text-blue-400">
              <QRPlaceholder />
            </div>
            <div
              className="scan-line absolute left-0 right-0 h-[2px] mx-1"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #3b82f6, transparent)",
              }}
            />
          </div>
        </div>

        {/* Bottom accent bar — blue gradient, no teal */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1.5"
          style={{
            background: "linear-gradient(90deg, #1d4ed8, #3b82f6, #60a5fa)",
          }}
        />
      </div>

      {/* ── Floating badges ── */}
      <FloatingBadge
        className="badge-1 border"
        style={{
          top: "14%",
          right: "4%",
          background: "rgba(6, 12, 26, 0.72)",
          borderColor: "rgba(37, 99, 235, 0.25)",
          backdropFilter: "blur(12px)",
        }}
        icon={<CheckCircle2 size={15} className="text-blue-400" />}
        label="QR Verified"
        sub="Scan successful"
      />
      <FloatingBadge
        className="badge-2 border"
        style={{
          bottom: "18%",
          left: "2%",
          background: "rgba(6, 12, 26, 0.72)",
          borderColor: "rgba(59, 130, 246, 0.20)",
          backdropFilter: "blur(12px)",
        }}
        icon={<Zap size={15} className="text-blue-300" />}
        label="Bulk Issued"
        sub="1,200 cards · 3s"
      />
      <FloatingBadge
        className="badge-3 border"
        style={{
          top: "16%",
          right: "46%",
          background: "rgba(6, 12, 26, 0.72)",
          borderColor: "rgba(96, 165, 250, 0.18)",
          backdropFilter: "blur(12px)",
        }}
        icon={
          <span className="dot-blink w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
        }
        label="Live Preview"
        sub="Design updated"
      />

      {/* Mini second card peek — slate-navy */}
      <div
        className="absolute bottom-6 right-[12%] w-40 h-[104px] rounded-xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #060c1a 0%, #0d1b35 100%)",
          boxShadow:
            "0 20px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(37,99,235,0.12)",
          transform:
            "perspective(600px) rotateX(10deg) rotateY(6deg) rotate(4deg)",
        }}
      >
        {/* Blue accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{
            background: "linear-gradient(90deg, #1d4ed8, #3b82f6, #60a5fa)",
          }}
        />

        <div className="p-3 flex gap-2 items-start">
          <div
            className="w-8 h-8 rounded-lg shrink-0"
            style={{
              background: "rgba(37,99,235,0.15)",
              border: "1px solid rgba(59,130,246,0.15)",
            }}
          />
          <div className="flex flex-col gap-1.5 mt-0.5">
            <div
              className="h-1.5 w-16 rounded-full"
              style={{ background: "rgba(147,197,253,0.45)" }}
            />
            <div
              className="h-1.5 w-10 rounded-full"
              style={{ background: "rgba(147,197,253,0.20)" }}
            />
          </div>
        </div>

        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <div
              className="h-1 w-14 rounded-full"
              style={{ background: "rgba(147,197,253,0.18)" }}
            />
            <div
              className="h-1 w-10 rounded-full"
              style={{ background: "rgba(147,197,253,0.10)" }}
            />
          </div>

          {/* QR block */}
          <div
            className="w-8 h-8 rounded-md p-1"
            style={{
              background: "rgba(6,12,26,0.90)",
              border: "1px solid rgba(59,130,246,0.20)",
            }}
          >
            <div className="text-blue-400 w-full h-full">
              <QRPlaceholder />
            </div>
          </div>
        </div>
      </div>

      {/* Floating shield icon — professional blue */}
      <div
        className="absolute top-[22%] left-[8%] w-10 h-10 rounded-2xl flex items-center justify-center border border-blue-700/20"
        style={{
          background: "rgba(6, 12, 26, 0.72)",
          borderColor: "rgba(37, 99, 235, 0.25)",
          backdropFilter: "blur(12px)",
        }}
      >
        <Shield size={18} className="text-blue-400" />
      </div>
    </div>
  );
}

function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-light-bg dark:bg-dark-bg font-dm flex flex-col gap-28 text-light-text1 dark:text-dark-text1 overflow-x-hidden">
      {/* ─── 1. Hero — Split Layout ──────────────────────────────────────── */}
      <section className="relative pt-10 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT — content */}
          <div className="flex flex-col items-start gap-7 text-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-button-primary/30 bg-button-primary/10 text-button-primary text-xs font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-button-primary dot-blink" />
              Now live
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.06] tracking-tight">
              {homeData.hero.headline.split(" ").map((word, i, arr) =>
                i === arr.length - 1 ? (
                  <span
                    key={i}
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #1d4ed8, #3b82f6, #60a5fa)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {" "}
                    {word}
                  </span>
                ) : (
                  <span key={i}>
                    {i > 0 ? " " : ""}
                    {word}
                  </span>
                ),
              )}
            </h1>

            <p className="text-base md:text-lg text-light-text2 dark:text-dark-text2 max-w-lg leading-relaxed">
              {homeData.hero.subHeadline}
            </p>

            <div className="flex flex-row width_425px_flex_col items-start gap-4">
              <button
                onClick={() => navigate(homeData.hero.primaryCta.path)}
                className="group flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-button-primary hover:bg-button-primary-hover active:bg-button-primary-active text-white font-semibold text-base transition-all shadow-lg hover:shadow-button-primary/40 hover:-translate-y-0.5"
              >
                {homeData.hero.primaryCta.label}
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
              <button
                onClick={() => navigate(homeData.hero.secondaryCta.path)}
                className="px-8 py-3.5 rounded-full border border-light-border dark:border-dark-border bg-light-card1 dark:bg-dark-card1 hover:bg-light-hover dark:hover:bg-dark-hover font-semibold text-base transition-all"
              >
                {homeData.hero.secondaryCta.label}
              </button>
            </div>
          </div>

          {/* RIGHT — 3D scene */}
          <div className="w-full flex width_425px_hidden items-center justify-center lg:justify-end">
            <IDCardScene />
          </div>
        </div>
      </section>

      {/* ─── 2. Value Proposition ────────────────────────────────────────── */}
      <section className="px-6 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {homeData.valueProps.map((prop, index) => (
            <div
              key={index}
              className="group relative bg-light-card1 dark:bg-dark-card1 border border-light-border dark:border-dark-border p-8 rounded-3xl flex flex-col items-start gap-5 transition-all duration-300 hover:-translate-y-1 hover:border-button-primary/40 hover:shadow-xl overflow-hidden"
            >
              {/* Subtle corner glow on hover */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, var(--color-button-primary, #2563eb) 0%, transparent 70%)",
                }}
              />

              <div
                className={`p-4 rounded-2xl ${prop.bgClass} ${prop.textClass}`}
              >
                {prop.icon}
              </div>
              <h3 className="text-xl font-bold">{prop.title}</h3>
              <p className="text-light-text2 dark:text-dark-text2 leading-relaxed text-[0.95rem]">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 3. Solution Highlights ──────────────────────────────────────── */}
      <section className="px-6 max-w-5xl mx-auto w-full flex flex-col gap-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            {homeData.solutions.title}
          </h2>
          <p className="text-light-text2 dark:text-dark-text2 text-lg leading-relaxed">
            {homeData.solutions.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {homeData.solutions.items.map((solution, index) => (
            <div
              key={index}
              className="group flex gap-4 items-start p-6 rounded-2xl bg-light-hover dark:bg-dark-hover border border-transparent hover:border-button-primary/30 hover:bg-light-card1 dark:hover:bg-dark-card1 transition-all duration-200"
            >
              <div className="mt-0.5 shrink-0 p-2 rounded-xl bg-button-primary/10 text-button-primary transition-colors group-hover:bg-button-primary/20">
                {solution.icon}
              </div>
              <div>
                <h4 className="font-bold text-base">{solution.title}</h4>
                <p className="text-sm text-light-text2 dark:text-dark-text2 mt-1.5 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 4. Feature Pills (Infinite Scroll) ──────────────────────────── */}
      <section className="relative py-16 w-full overflow-hidden">
        {/* Full-bleed tinted stripe */}
        <div className="absolute inset-0 bg-light-card1 dark:bg-dark-card1 border-y border-light-border dark:border-dark-border" />

        <div className="relative max-w-[100vw] mx-auto">
          <p className="text-center text-lg font-bold uppercase tracking-widest text-light-text2 dark:text-dark-text2 mb-10">
            Everything you need
          </p>

          <div className="relative flex overflow-hidden group ">
            {/* Edge fade gradients for seamless scroll illusion */}
            <div className="absolute top-0 bottom-0 left-0 w-16 md:w-40 z-10 bg-gradient-to-r from-light-card1 dark:from-dark-card1 to-transparent pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-16 md:w-40 z-10 bg-gradient-to-l from-light-card1 dark:from-dark-card1 to-transparent pointer-events-none" />

            {/* Scrolling container — utilizes the animate-scroll-left present in index.css */}
            <div className="flex w-max m-5 animate-scroll-left group-hover:[animation-play-state:paused]">
              {[
                ...homeData.features,
                ...homeData.features,
                ...homeData.features,
                ...homeData.features,
                ...homeData.features,
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 px-6 py-3 mx-2 md:mx-3 bg-light-bg dark:bg-dark-bg rounded-full border border-light-border dark:border-dark-border shadow-sm hover:shadow-md hover:border-button-primary/40 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                >
                  <span className="text-button-primary shrink-0">
                    {feature.icon}
                  </span>
                  <span className="text-sm font-semibold whitespace-nowrap">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. Testimonial ──────────────────────────────────────────────── */}
      <section className="px-6 max-w-3xl mx-auto text-center flex flex-col items-center gap-7 py-4">
        <Quote
          className="text-button-primary/30 dark:text-button-primary/50"
          fill="currentColor"
          size={52}
        />
        <p className="text-2xl md:text-[2rem] font-medium italic leading-relaxed tracking-tight">
          "{homeData.testimonial.quote}"
        </p>
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-[3px] bg-button-primary rounded-full" />
          <p className="font-bold text-base mt-1">
            {homeData.testimonial.author}
          </p>
        </div>
      </section>

      {/* ─── 6. Final CTA ────────────────────────────────────────────────── */}
      <section className="px-6 mb-4">
        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-[2.5rem] border border-button-primary/20 dark:border-button-primary/30 p-12 md:p-16 text-center flex flex-col items-center gap-8">
          {/* Gradient background */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in srgb, var(--color-button-primary, #2563eb) 8%, transparent) 0%, color-mix(in srgb, #60a5fa 8%, transparent) 100%)",
            }}
          />
          {/* Dark mode overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 hidden dark:block"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in srgb, var(--color-button-primary, #2563eb) 15%, transparent) 0%, color-mix(in srgb, #3b82f6 12%, transparent) 100%)",
            }}
          />

          <h2 className="text-3xl md:text-5xl font-black tracking-tight max-w-xl leading-tight">
            {homeData.finalCta.headline}
          </h2>
          <p className="text-lg md:text-xl text-light-text2 dark:text-dark-text2 max-w-lg leading-relaxed">
            {homeData.finalCta.subtext}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mt-2">
            <button
              onClick={() => navigate(homeData.finalCta.primaryCta.path)}
              className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-button-primary hover:bg-button-primary-hover active:bg-button-primary-active text-white font-semibold text-base transition-all shadow-lg hover:shadow-button-primary/40 hover:-translate-y-0.5"
            >
              {homeData.finalCta.primaryCta.label}
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
            <button
              onClick={() => navigate(homeData.finalCta.secondaryCta.path)}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-light-border dark:border-dark-border bg-light-card1/60 dark:bg-dark-card1/60 backdrop-blur-sm hover:bg-light-card1 dark:hover:bg-dark-card1 font-semibold text-base transition-all"
            >
              {homeData.finalCta.secondaryCta.label}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
