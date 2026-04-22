"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "@/components/reactbits/SplitText";
import ScrollReveal from "@/components/reactbits/ScrollReveal";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import ImageReveal from "@/components/ImageReveal";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    name: "Train",
    description:
      "Full access to the Lifestyle Club. Structured programming or self-directed training. Recovery infrastructure included. The physical practice is the anchor — not a perk.",
    image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=800&q=80",
    imageAlt: "Gym space with dramatic natural light and raw concrete",
    number: "01",
    icon: (
      <svg className="h-6 w-6 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    name: "Build",
    description:
      "Dedicated workspace. Fast connectivity. A community of founders, creatives, and practitioners who understand that the best work comes from a disciplined body and a clear mind.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    imageAlt: "Open workspace with natural light and minimal furniture",
    number: "02",
    icon: (
      <svg className="h-6 w-6 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
      </svg>
    ),
  },
  {
    name: "Live",
    description:
      "Accommodation in the Enclave. Meals considered, not catered. A daily rhythm that respects your autonomy. No forced socialising — but the architecture makes serendipitous connection natural.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    imageAlt: "Architectural residence surrounded by tropical landscape",
    number: "03",
    icon: (
      <svg className="h-6 w-6 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
];

function ScrollPinPillars() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const textBlocks = section.querySelectorAll<HTMLElement>(".pin-text-block");
    const triggers: ScrollTrigger[] = [];

    textBlocks.forEach((block, i) => {
      const st = ScrollTrigger.create({
        trigger: block,
        start: "top 60%",
        end: "bottom 40%",
        onEnter: () => setActiveIndex(i),
        onEnterBack: () => setActiveIndex(i),
      });
      triggers.push(st);
    });

    return () => {
      triggers.forEach((st) => st.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="px-6 py-24 md:py-32 bg-[var(--color-surface)]">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs md:text-sm uppercase tracking-[0.3em] font-[family-name:var(--font-body)] font-light text-[var(--color-text-muted)]">
          The Model
        </p>
        <h2 className="mb-16 md:mb-20 font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl tracking-tighter font-light text-[var(--color-text)] leading-[1.1]">
          Train. Build. Live.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: scrolling text */}
          <div className="space-y-32 md:space-y-48">
            {pillars.map((pillar, index) => (
              <div key={pillar.name} className="pin-text-block">
                <AnimatedContent distance={30} duration={0.7}>
                  <div className="mb-5">{pillar.icon}</div>
                  <p className="mb-3 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    {pillar.number}
                  </p>
                  <h3 className="mb-4 font-[family-name:var(--font-heading)] text-2xl md:text-4xl tracking-tight font-light text-[var(--color-text)]">
                    {pillar.name}
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-sm md:text-base font-light text-[var(--color-text-muted)] leading-relaxed">
                    {pillar.description}
                  </p>
                  <div
                    className="mt-6 h-px transition-all duration-700"
                    style={{
                      backgroundColor: activeIndex === index ? "var(--color-accent)" : "var(--color-border)",
                      width: activeIndex === index ? "3rem" : "2rem",
                    }}
                  />
                </AnimatedContent>
              </div>
            ))}
          </div>

          {/* Right: pinned image */}
          <div className="hidden md:block">
            <div className="sticky top-32 h-[520px] w-full overflow-hidden rounded-2xl">
              {pillars.map((pillar, index) => (
                <div
                  key={pillar.name}
                  className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                  style={{ opacity: activeIndex === index ? 1 : 0 }}
                >
                  <Image
                    src={pillar.image}
                    alt={pillar.imageAlt}
                    fill
                    sizes="50vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
              <div className="absolute bottom-6 right-7 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.3em] font-light text-white/40">
                {String(activeIndex + 1).padStart(2, "0")} / {String(pillars.length).padStart(2, "0")}
              </div>
            </div>
          </div>

          {/* Mobile: clip-path reveals */}
          <div className="md:hidden space-y-8">
            {pillars.map((pillar, index) => (
              <ImageReveal
                key={pillar.name}
                src={pillar.image}
                alt={pillar.imageAlt}
                className="h-[280px]"
                direction={index % 2 === 0 ? "left" : "right"}
                sizes="100vw"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CollectivContent() {
  return (
    <div className="bg-[var(--color-bg)]">
      {/* Hero */}
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-32 pb-16 md:pt-44 md:pb-24">
        <p className="mb-6 text-xs md:text-sm uppercase tracking-[0.3em] font-[family-name:var(--font-body)] font-light text-[var(--color-text-muted)]">
          Collectiv
        </p>
        <SplitText
          tag="h1"
          text="A residency for people who build."
          className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter font-light text-[var(--color-text)] leading-[1.1] max-w-4xl"
          splitType="words"
          from={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          to={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          delay={100}
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
          The Collectiv is not a coworking space, a digital nomad hub, or a
          networking retreat. It is a curated residency — one to three months —
          for founders, practitioners, and creatives who want to live inside a
          physical practice while building something that matters. Applications
          are reviewed on alignment, not urgency.
        </ScrollReveal>
      </section>

      {/* Hero Image — clip-path reveal */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-5xl">
          <ImageReveal
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
            alt="Open workspace with natural light, minimal furniture, and tropical views"
            className="h-[300px] md:h-[500px]"
            direction="bottom"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
      </section>

      {/* Scroll-pinned pillars */}
      <ScrollPinPillars />

      {/* Community */}
      <section aria-label="Community" className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <p className="mb-4 text-xs md:text-sm uppercase tracking-[0.3em] font-[family-name:var(--font-body)] font-light text-[var(--color-text-muted)]">
                Community
              </p>
              <h2 className="mb-6 font-[family-name:var(--font-heading)] text-3xl sm:text-4xl tracking-tighter font-light text-[var(--color-text)] leading-[1.1]">
                Who is this for?
              </h2>
              <div className="space-y-4 font-[family-name:var(--font-body)] text-sm md:text-base font-light text-[var(--color-text-muted)] leading-relaxed">
                <p>
                  Founders who train. Creatives who need structure. Athletes who
                  build. People who are building businesses, practices, or bodies
                  of work — and who recognise that physical discipline is not
                  separate from professional discipline.
                </p>
                <p>
                  The Collectiv works because it is small and selective. Eight to
                  twelve residents at a time. Enough for genuine connection,
                  small enough that mediocrity is impossible to hide.
                </p>
              </div>
            </div>
            <ImageReveal
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Small group in focused collaboration around a minimal workspace"
              className="h-[280px] md:h-[380px]"
              direction="right"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section aria-label="Application" className="px-6 py-24 md:py-32 bg-[var(--color-surface)]">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl tracking-tighter font-light text-[var(--color-text)] leading-[1.1]">
            This is not an open enrollment.
          </h2>
          <p className="mt-4 mb-10 font-[family-name:var(--font-body)] text-sm md:text-base font-light text-[var(--color-text-muted)] max-w-lg">
            Tell us what you&apos;re building, how you train, and why a residency
            at Sanctum matters for your work. We read every application.
          </p>
          <a
            href="/pre-book"
            className="group inline-flex items-center gap-3 rounded-full border border-[var(--color-accent)]/40 px-10 py-4 font-[family-name:var(--font-body)] text-sm md:text-base font-light uppercase tracking-widest text-[var(--color-accent)] transition-all duration-500 hover:border-transparent hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]"
          >
            <span>Apply</span>
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
