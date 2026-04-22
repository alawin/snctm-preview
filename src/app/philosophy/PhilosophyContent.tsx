"use client";

import SplitText from "@/components/reactbits/SplitText";
import ScrollReveal from "@/components/reactbits/ScrollReveal";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import ImageReveal from "@/components/ImageReveal";

const principles = [
  {
    title: "Sovereignty",
    body: "Sovereignty is the ability to govern your own body, your own time, and your own environment. Most wellness brands sell escape — a week away from real life. Sanctum is not an escape. It is an infrastructure for a self-governed life. The gym is not a place to punish your body into shape. It is a sovereign training environment — where the architecture itself disciplines the practice, where the equipment is chosen for longevity, not novelty, and where the daily ritual of movement is treated with the same seriousness as the daily ritual of eating.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    imageAlt: "Concrete architectural detail with warm directional light casting long shadow",
  },
  {
    title: "Ritual",
    body: "Ritual is the opposite of routine. A routine is something you do because you have to. A ritual is something you do because it gives the day its structure, its meaning, its edges. At Sanctum, the morning movement session is not a gym class — it is how the day begins. The evening restoration is not a spa treatment — it is how the day closes. Recovery is not rest. It is an active practice of returning the body to its baseline with the same intentionality you brought to training it. The framework is simple: move, work, restore, sleep. Repeat until it becomes who you are.",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80",
    imageAlt: "Minimalist stone surface with brass detail in warm morning light",
  },
  {
    title: "Material Language",
    body: "Sanctum's physical spaces are built from four materials: concrete, stone, brass, and copper. Each has a reason. Concrete is honest — it does not pretend. It ages, it weathers, it carries the memory of every pour. Stone is ancient and grounding. It connects the building to the volcanic landscape of Lombok. Brass is the refined detail — the door handle, the light fitting, the towel rail — that elevates concrete from industrial to intentional. Copper is the continuous thread — appearing in every space, ageing into patina, tying the ecosystem together. No material is decorative. Every surface is structural.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",
    imageAlt: "Raw concrete wall texture with natural light creating depth and grain",
  },
  {
    title: "Longevity",
    body: "Longevity is not about living longer. It is about building a body and a mind that remain capable — for decades, not months. The fitness industry sells transformation: before-and-after photos, 12-week programmes, rapid change. Sanctum is not interested in rapid change. We are interested in compounding practice — the kind of training that does not photograph well in week four but produces an entirely different human in year four. This is why our programmes are named as practices, not courses. You do not complete them. You continue them.",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80",
    imageAlt: "Long corridor with natural light at the end, concrete walls creating perspective",
  },
];

export default function PhilosophyContent() {
  return (
    <div className="bg-[var(--color-bg)]">
      {/* Hero */}
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-32 pb-16 md:pt-44 md:pb-24">
        <p className="mb-6 text-xs md:text-sm uppercase tracking-[0.3em] font-[family-name:var(--font-body)] font-light text-[var(--color-text-muted)]">
          Founding Principles
        </p>
        <SplitText
          tag="h1"
          text="Why we built this."
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
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-2xl px-6 pb-24 md:pb-32">
        <ScrollReveal
          enableBlur={true}
          baseOpacity={0.1}
          baseRotation={0}
          blurStrength={3}
          textClassName="font-[family-name:var(--font-body)] !text-[var(--color-text-muted)] !font-light !text-base md:!text-lg !leading-relaxed text-center"
          rotationEnd="bottom bottom"
          wordAnimationEnd="bottom bottom"
        >
          Sanctum exists because the wellness industry has no architecture. It
          has aesthetics — infinity pools, smoothie bars, linen robes — but no
          structure. No founding principles. No reason for being beyond
          commercial opportunity. We started from a different question: what
          would a wellness environment look like if it were designed with the
          same rigour as a Tadao Ando museum?
        </ScrollReveal>
      </section>

      {/* Principles — alternating layout */}
      {principles.map((principle, index) => {
        const isReversed = index % 2 === 1;
        return (
          <section
            key={principle.title}
            aria-label={principle.title}
            className="px-6 py-16 md:py-24"
          >
            <div
              className={`mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center ${isReversed ? "md:direction-rtl" : ""}`}
            >
              {/* Text */}
              <AnimatedContent
                distance={40}
                duration={0.8}
                delay={0}
                className={isReversed ? "md:order-2 md:direction-ltr" : "md:direction-ltr"}
              >
                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.3em] font-[family-name:var(--font-body)] font-light text-[var(--color-accent)]">
                    0{index + 1}
                  </p>
                  <h2 className="mb-6 font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl tracking-tighter font-light text-[var(--color-text)] leading-[1.1]">
                    {principle.title}
                  </h2>
                  <p className="font-[family-name:var(--font-body)] text-sm md:text-base font-light text-[var(--color-text-muted)] leading-relaxed">
                    {principle.body}
                  </p>
                </div>
              </AnimatedContent>

              {/* Image */}
              <ImageReveal
                src={principle.image}
                alt={principle.imageAlt}
                className={`h-[320px] md:h-[440px] ${isReversed ? "md:order-1" : ""}`}
                direction={isReversed ? "left" : "right"}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </section>
        );
      })}

      {/* Closing */}
      <section className="px-6 py-24 md:py-36">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl md:text-4xl tracking-tighter font-light text-[var(--color-text)] leading-[1.2]">
            &ldquo;We built this for people who don&rsquo;t need it
            explained.&rdquo;
          </p>
          <p className="mt-6 font-[family-name:var(--font-body)] text-sm font-light text-[var(--color-text-muted)]">
            But we document it thoroughly — because rigour is itself a form of
            respect.
          </p>
        </div>
      </section>
    </div>
  );
}
