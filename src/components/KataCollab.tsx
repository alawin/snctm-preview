export default function KataCollab() {
  return (
    <section className="relative overflow-hidden">
      {/* bg.png bookend — mirrors the hero */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/78" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-36 md:py-52 text-center">
        <p
          className="mb-6 text-[10px] uppercase tracking-[0.45em] text-white/35"
          style={{ fontFamily: "var(--font-display)" }}
        >
          There you go.
        </p>

        <h2
          className="mb-6 text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.05]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Built by Kata Consulting.
        </h2>

        <p className="mb-12 mx-auto max-w-sm font-[family-name:var(--font-body)] text-sm font-light leading-relaxed text-white/50">
          If this is the standard you are working towards, the conversation is open.
        </p>

        <a
          href="https://www.instagram.com/kata_consulting/"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-3 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.35em] text-[var(--color-accent)] transition-opacity duration-300 hover:opacity-70"
        >
          Kata Consulting
          <svg
            aria-hidden="true"
            className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
