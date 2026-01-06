// src/components/Achievements.jsx

function Achievements() {
  return (
    <section
      id="impact"
      className="relative py-20 bg-slate-950 border-t border-white/5"
    >
      {/* subtle background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-10 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* WHY IT MATTERS */}
        <div className="reveal text-center mb-14">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
            <span className="h-px w-6 bg-emerald-400/80" />
            Why It Matters
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white">
            Time and access save lives
          </h2>

          <p className="mt-4 text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
            In many disasters, the biggest challenge is locating survivors
            quickly. Delays, limited access, and difficult terrain often
            reduce the chances of timely rescue.
          </p>
        </div>

        {/* IMPACT POINTS */}
        <div className="grid gap-6 md:grid-cols-3 mb-20">
          <div className="reveal rounded-2xl border border-white/10 bg-slate-900/70 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Critical time windows
            </h3>
            <p className="text-sm text-slate-300">
              The first hours after a disaster are crucial for finding
              survivors and coordinating rescue efforts.
            </p>
          </div>

          <div className="reveal rounded-2xl border border-white/10 bg-slate-900/70 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Limited resources
            </h3>
            <p className="text-sm text-slate-300">
              Many regions operate with minimal equipment, making it harder
              to locate trapped individuals efficiently.
            </p>
          </div>

          <div className="reveal rounded-2xl border border-white/10 bg-slate-900/70 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Safer decision-making
            </h3>
            <p className="text-sm text-slate-300">
              Better situational awareness can help teams prioritize
              locations and reduce unnecessary risk.
            </p>
          </div>
        </div>

        {/* CURRENT STATUS */}
        <div className="reveal text-center mb-16">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
            <span className="h-px w-6 bg-emerald-400/80" />
            Current Status
          </p>

          <h3 className="mt-3 text-2xl md:text-3xl font-bold text-white">
            Early-stage development
          </h3>

          <p className="mt-4 text-sm text-slate-300 max-w-xl mx-auto">
            BeatRescue is currently in an exploratory phase.
            The focus is on learning, validation, and understanding
            real-world rescue needs before scaling further.
          </p>
        </div>

        {/* UPDATES / PROGRESS */}
        <div className="reveal text-center">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
            <span className="h-px w-6 bg-emerald-400/80" />
            Updates
          </p>

          <h3 className="mt-3 text-2xl md:text-3xl font-bold text-white">
            Progress will be shared transparently
          </h3>

          <p className="mt-4 text-sm text-slate-300 max-w-xl mx-auto">
            Key learnings, milestones, and next steps will be shared
            as the initiative progresses.
            This page will evolve alongside the project.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
