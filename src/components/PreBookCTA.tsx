"use client";

import Magnet from "@/components/reactbits/Magnet";

export default function PreBookCTA() {
  return (
    <section
      aria-label="Pre-book"
      className="texture-copper relative overflow-hidden bg-[var(--color-surface)] px-6 py-24 md:py-32"
    >
      {/* Subtle top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-[var(--color-border)]" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter font-light text-[var(--color-text)] leading-[1.1]">
          The threshold is yours.
        </p>
        <p className="mt-4 font-[family-name:var(--font-body)] text-sm md:text-base font-light text-[var(--color-text-muted)]">
          Enter when ready.
        </p>

        <div className="mt-12">
          <Magnet padding={120} magnetStrength={2}>
            <a
              href="/pre-book"
              className="group relative inline-flex items-center gap-3 border border-[var(--color-accent)]/40 rounded-full px-10 py-4 font-[family-name:var(--font-body)] text-sm md:text-base font-light tracking-widest uppercase text-[var(--color-accent)] transition-all duration-500 hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] hover:border-transparent"
            >
              <span>Pre-book</span>
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </Magnet>
        </div>
      </div>

      {/* Subtle bottom border */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-[var(--color-border)]" />
    </section>
  );
}
