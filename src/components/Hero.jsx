// src/components/Hero.jsx

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden"
    >
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.6),transparent_60%)]" />
      </div>

      {/* content */}
      <div className="relative max-w-6xl mx-auto px-4 py-24 w-full">
        <div className="max-w-2xl space-y-6">
          {/* small label */}
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-200">
            Disaster response initiative
          </span>

          {/* main heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Supporting rescue efforts
            <br />
            <span className="text-emerald-300">
              when every minute matters
            </span>
          </h1>

          {/* description */}
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl">
            BeatRescue is an evolving initiative focused on improving how
            survivors are located during disaster response operations.
            The goal is simple: help responders act faster in critical moments.
          </p>

          {/* single CTA */}
          <div className="pt-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center
                         rounded-full bg-emerald-600 px-6 py-3
                         text-sm font-semibold text-white
                         shadow-lg shadow-emerald-600/40
                         hover:bg-emerald-500 transition"
            >
              Contact BeatRescue
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
