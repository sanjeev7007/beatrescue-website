// src/components/Product.jsx

function Product() {
  return (
    <section
      id="product"
      className="py-20 bg-slate-900/90 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* section header */}
        <div className="text-center mb-12">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
            <span className="h-px w-6 bg-emerald-400/80" />
            What BeatRescue Is
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white">
            A disaster-response initiative
          </h2>

          <p className="mt-4 text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
            BeatRescue is an early-stage initiative focused on supporting
            search and rescue efforts during disasters.
            It is designed around real-world needs, not lab conditions.
          </p>
        </div>

        {/* content blocks */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* block 1 */}
          <div className="reveal rounded-2xl border border-white/10 bg-slate-950/70 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Purpose-driven
            </h3>
            <p className="text-sm text-slate-300">
              The initiative exists to help responders locate trapped
              individuals faster during emergencies.
            </p>
          </div>

          {/* block 2 */}
          <div className="reveal rounded-2xl border border-white/10 bg-slate-950/70 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Field-focused
            </h3>
            <p className="text-sm text-slate-300">
              Designed with challenging environments in mind, where
              conditions are unpredictable and time is limited.
            </p>
          </div>

          {/* block 3 */}
          <div className="reveal rounded-2xl border border-white/10 bg-slate-950/70 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Evolving
            </h3>
            <p className="text-sm text-slate-300">
              BeatRescue is not a finished product.
              It is continuously shaped through learning, feedback,
              and exploration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
