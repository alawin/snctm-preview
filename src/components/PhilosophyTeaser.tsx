"use client";

import ScrollReveal from "@/components/reactbits/ScrollReveal";

export default function PhilosophyTeaser() {
  return (
    <section
      aria-label="Philosophy"
      className="texture-stone relative overflow-hidden bg-[var(--color-bg)] px-6 py-32 md:py-44"
    >
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <ScrollReveal
          enableBlur={true}
          baseOpacity={0.1}
          baseRotation={0}
          blurStrength={3}
          containerClassName=""
          textClassName="font-[family-name:var(--font-heading)] !text-[var(--color-text)] !font-light !text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl !tracking-tighter !leading-[1.2]"
          rotationEnd="bottom bottom"
          wordAnimationEnd="bottom bottom"
        >
          We did not build a hotel. We built a system — where architecture
          disciplines the body, movement restores the mind, and ritual makes
          both sovereign.
        </ScrollReveal>

        <div className="mt-12">
          <a
            href="/philosophy"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-body)] text-xs md:text-sm uppercase tracking-[0.3em] font-light text-[var(--color-text-muted)] transition-colors duration-300 hover:text-[var(--color-text)]"
          >
            <span>Read the philosophy</span>
            <svg
              className="h-3 w-3"
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
        </div>
      </div>
    </section>
  );
}
