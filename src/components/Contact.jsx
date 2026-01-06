// src/components/Contact.jsx

function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 bg-slate-900/90 border-t border-white/5"
    >
      {/* subtle background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-10 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-24 right-10 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4">
        {/* section header */}
        <div className="reveal text-center mb-12">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
            <span className="h-px w-6 bg-emerald-400/80" />
            Contact
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white">
            Get in touch
          </h2>

          <p className="mt-4 text-sm md:text-base text-slate-300 max-w-xl mx-auto">
            We’re open to conversations with collaborators, mentors,
            organizations, and others interested in disaster-response work.
          </p>
        </div>

        {/* contact cards */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Email */}
          <a
            href="mailto:beatrescuelife@gmail.com"
            className="reveal flex gap-4 items-start rounded-2xl
                       border border-white/10 bg-slate-950/70 p-5
                       shadow-md shadow-black/40
                       hover:border-emerald-400/60 hover:shadow-lg transition"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full
                            bg-slate-900 border border-emerald-400/50">
              <i className="fa-solid fa-envelope text-emerald-300 text-sm" />
            </div>

            <div>
              <div className="text-xs uppercase tracking-wide text-slate-400">
                Email
              </div>
              <div className="mt-1 text-sm text-slate-50">
                beatrescuelife@gmail.com
              </div>
              <p className="mt-1 text-xs text-slate-400">
                Best for introductions, questions, or collaboration ideas.
              </p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sanjeev-s-t/"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal flex gap-4 items-start rounded-2xl
                       border border-white/10 bg-slate-950/70 p-5
                       shadow-md shadow-black/40
                       hover:border-sky-400/60 hover:shadow-lg transition"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full
                            bg-slate-900 border border-sky-400/50">
              <i className="fa-brands fa-linkedin text-sky-400 text-sm" />
            </div>

            <div>
              <div className="text-xs uppercase tracking-wide text-slate-400">
                LinkedIn
              </div>
              <div className="mt-1 text-sm text-slate-50">
                Follow updates
              </div>
              <p className="mt-1 text-xs text-slate-400">
                Project progress, events, and public updates.
              </p>
            </div>
          </a>
        </div>

        {/* footer note */}
        <div className="reveal text-center mt-10">
          <p className="text-xs text-slate-400 max-w-xl mx-auto">
            BeatRescue is an early-stage initiative.
            We value thoughtful conversations and responsible collaboration.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
