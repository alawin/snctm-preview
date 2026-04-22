"use client";

const entities = [
  {
    number: "01",
    name: "Lifestyle Club",
    tagline: "A sovereign training environment.",
    description:
      "Performance gym, movement studio, and recovery — built for daily ritual as membership. No screens. No shortcuts. Just work.",
    href: "/lifestyle-club",
  },
  {
    number: "02",
    name: "Enclave",
    tagline: "Architecture you sleep in.",
    description:
      "Concrete, timber, brass. Villas and suites where every surface is considered, every material earns its place, and every room ages with you.",
    href: "/enclave",
  },
  {
    number: "03",
    name: "Collectiv",
    tagline: "A residency for people who build.",
    description:
      "Co-living for founders, creatives, and practitioners — one to three months. Shared discipline. Private focus. Lombok as the operating system.",
    href: "/collectiv",
  },
];

export default function TheSystem() {
  return (
    <section
      aria-label="The Sanctum ecosystem"
      className="relative overflow-hidden"
    >
      {/* bg.png background with dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/72" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-28 md:py-40">
        {/* Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <p
            className="text-[10px] uppercase tracking-[0.45em] text-white/40"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Ecosystem
          </p>
          <p className="max-w-xs font-[family-name:var(--font-body)] text-sm font-light leading-relaxed text-white/50">
            Three distinct spaces, one coherent intention — to live, move, and build without compromise.
          </p>
        </div>

        {/* Entity rows */}
        <div>
          {entities.map((entity, i) => (
            <a
              key={entity.name}
              href={entity.href}
              className="group block"
            >
              {/* Top rule */}
              <div className="h-px w-full bg-white/10 transition-colors duration-500 group-hover:bg-white/25" />

              <div className="grid grid-cols-12 gap-4 py-10 md:py-12">
                {/* Number */}
                <div className="col-span-2 md:col-span-1 pt-1">
                  <span className="font-[family-name:var(--font-body)] text-[11px] text-white/30 tracking-[0.3em]">
                    {entity.number}
                  </span>
                </div>

                {/* Name */}
                <div className="col-span-10 md:col-span-4">
                  <h2
                    className="text-3xl md:text-4xl lg:text-5xl text-white transition-colors duration-300 group-hover:text-[var(--color-accent)] leading-none tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {entity.name}
                  </h2>
                </div>

                {/* Text */}
                <div className="col-span-12 md:col-span-6 md:col-start-7 flex flex-col justify-between gap-4">
                  <div>
                    <p className="mb-3 font-[family-name:var(--font-body)] text-sm font-light italic text-white/60">
                      {entity.tagline}
                    </p>
                    <p className="font-[family-name:var(--font-body)] text-sm font-light leading-relaxed text-white/40">
                      {entity.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 opacity-0 translate-y-1 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="font-[family-name:var(--font-body)] text-[11px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                      Explore
                    </span>
                    <svg className="h-3 w-3 text-[var(--color-accent)] transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom rule on last item */}
              {i === entities.length - 1 && (
                <div className="h-px w-full bg-white/10" />
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

