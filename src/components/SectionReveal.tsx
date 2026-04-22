"use client";

import SplitText from "@/components/reactbits/SplitText";
import ScrollReveal from "@/components/reactbits/ScrollReveal";

export default function SectionReveal() {
  return (
    <section
      aria-label="The Sanctuary of Movement"
      className="texture-concrete relative overflow-hidden bg-[var(--color-bg)]"
    >
      {/* ─── Heading: SplitText with blur + stagger ─── */}
      <div className="flex flex-col items-center justify-center px-6 pt-24 pb-12 md:pt-32 md:pb-20">
        <p className="mb-6 text-xs md:text-sm uppercase tracking-[0.3em] font-[family-name:var(--font-body)] font-light text-[var(--color-text-muted)]">
          Sanctum Lombok
        </p>

        <SplitText
          tag="h2"
          text="The Sanctuary of Movement."
          className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tighter font-light text-[var(--color-text)] leading-[1.1]"
          splitType="words"
          from={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          to={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          delay={120}
          duration={1.0}
          ease="power3.out"
          threshold={0.1}
          rootMargin="-50px"
          textAlign="center"
        />
      </div>

      {/* ─── Body: ScrollReveal word-by-word blur ─── */}
      <div className="mx-auto max-w-2xl px-6 pb-20 md:pb-28">
        <ScrollReveal
          enableBlur={true}
          baseOpacity={0.1}
          baseRotation={2}
          blurStrength={4}
          containerClassName=""
          textClassName="font-[family-name:var(--font-body)] !text-[var(--color-text-muted)] !font-light !text-base md:!text-lg !leading-relaxed text-center"
          rotationEnd="bottom bottom"
          wordAnimationEnd="bottom bottom"
        >
          Where raw volcanic landscapes meet curated wellness. Three distinct
          spaces — a performance gym forged in basalt, a boutique hotel that
          breathes with the ocean, and private villas dissolving into the
          canopy — woven together by one intention: move freely, rest deeply.
        </ScrollReveal>
      </div>
    </section>
  );
}
