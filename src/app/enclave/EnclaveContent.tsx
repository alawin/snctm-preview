"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "@/components/reactbits/SplitText";
import ScrollReveal from "@/components/reactbits/ScrollReveal";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import Magnet from "@/components/reactbits/Magnet";
import ImageReveal from "@/components/ImageReveal";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const accommodations = [
  {
    name: "The Villa",
    description:
      "Private compound. Plunge pool, outdoor shower, walled garden. Raw concrete, dark timber, brass hardware throughout. Designed for stays of a week or longer — the space lets you expand into a rhythm, not squeeze into a hotel room. Two bedrooms, each with blackout capability and cross-ventilation engineered to eliminate the need for air conditioning at night.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    imageAlt: "Brutalist tropical villa with exposed concrete, dark timber louvers, and private plunge pool",
    capacity: "2–4 guests",
    size: "220 m²",
    number: "01",
  },
  {
    name: "The Suite",
    description:
      "Open-plan living with a separate sleeping bay. Private terrace looking into the canopy. The same material language as the Villa — concrete, timber, stone — but consolidated into a space for one or two people who want room without excess. Every suite has a desk. Because some of the people staying here are building things.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    imageAlt: "Open-plan suite with raw concrete ceiling, dark timber joinery, and terrace overlooking canopy",
    capacity: "1–2 guests",
    size: "85 m²",
    number: "02",
  },
  {
    name: "The Room",
    description:
      "Compact, considered, complete. Everything you need and nothing you don't. A proper bed, a proper shower, blackout capability, and silence. Designed for the person who spends most of their time training, recovering, and working — and needs the room to do one thing well: let them sleep.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    imageAlt: "Compact room with board-formed concrete walls, linen bedding, and brass reading lamp",
    capacity: "1–2 guests",
    size: "40 m²",
    number: "03",
  },
];

function ScrollPinGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
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
    <div ref={sectionRef} className="px-6 pb-16 md:pb-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs md:text-sm uppercase tracking-[0.3em] font-[family-name:var(--font-body)] font-light text-[var(--color-text-muted)]">
          Accommodation
        </p>
        <h2 className="mb-16 md:mb-20 font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl tracking-tighter font-light text-[var(--color-text)] leading-[1.1]">
          Three scales. One language.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: scrolling text blocks */}
          <div className="space-y-32 md:space-y-48">
            {accommodations.map((acc, index) => (
              <div
                key={acc.name}
                className="pin-text-block"
              >
                <AnimatedContent distance={30} duration={0.7}>
                  <p className="mb-3 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    {acc.number}
                  </p>
                  <h3 className="mb-2 font-[family-name:var(--font-heading)] text-2xl md:text-4xl tracking-tight font-light text-[var(--color-text)]">
                    {acc.name}
                  </h3>
                  <div className="mb-4 flex gap-4 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
                    <span>{acc.capacity}</span>
                    <span className="text-[var(--color-border)]">·</span>
                    <span>{acc.size}</span>
                  </div>
                  <p className="font-[family-name:var(--font-body)] text-sm md:text-base font-light text-[var(--color-text-muted)] leading-relaxed">
                    {acc.description}
                  </p>
                  {/* Accent line */}
                  <div
                    className="mt-6 h-px w-12 transition-all duration-700"
                    style={{
                      backgroundColor: activeIndex === index ? "var(--color-accent)" : "var(--color-border)",
                      width: activeIndex === index ? "3rem" : "2rem",
                    }}
                  />
                </AnimatedContent>
              </div>
            ))}
          </div>

          {/* Right: pinned image that crossfades */}
          <div className="hidden md:block">
            <div
              ref={imageContainerRef}
              className="sticky top-32 h-[520px] w-full overflow-hidden rounded-2xl"
            >
              {accommodations.map((acc, index) => (
                <div
                  key={acc.name}
                  className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                  style={{ opacity: activeIndex === index ? 1 : 0 }}
                >
                  <Image
                    src={acc.image}
                    alt={acc.imageAlt}
                    fill
                    sizes="50vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
              {/* Image counter */}
              <div className="absolute bottom-6 right-7 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.3em] font-light text-white/40">
                {String(activeIndex + 1).padStart(2, "0")} / {String(accommodations.length).padStart(2, "0")}
              </div>
            </div>
          </div>

          {/* Mobile: stacked images (no pin) */}
          <div className="md:hidden space-y-8">
            {accommodations.map((acc) => (
              <ImageReveal
                key={acc.name}
                src={acc.image}
                alt={acc.imageAlt}
                className="h-[280px]"
                direction="left"
                sizes="100vw"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EnclaveContent() {
  return (
    <div className="bg-[var(--color-bg)]">
      {/* Hero */}
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-32 pb-16 md:pt-44 md:pb-24">
        <p className="mb-6 text-xs md:text-sm uppercase tracking-[0.3em] font-[family-name:var(--font-body)] font-light text-[var(--color-text-muted)]">
          Enclave
        </p>
        <SplitText
          tag="h1"
          text="Architecture you sleep in."
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
          The Enclave is not a hotel. It is a set of architect-designed
          spaces built for people who stay long enough to need a real environment
          — not a decorative one. Raw concrete, dark timber, brass hardware.
          Every material chosen for how it ages, not how it photographs.
        </ScrollReveal>
      </section>

      {/* Scroll-pinned accommodation gallery */}
      <ScrollPinGallery />

      {/* Material Note */}
      <section className="px-6 py-24 md:py-32 bg-[var(--color-surface)]">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <AnimatedContent distance={30} duration={0.8}>
            <blockquote className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl md:text-4xl tracking-tight font-light text-[var(--color-text)] leading-[1.3] italic">
              &ldquo;We chose materials that get better with time — because the people who
              stay here do the same.&rdquo;
            </blockquote>
          </AnimatedContent>
        </div>
      </section>

      {/* CTA */}
      <section aria-label="Booking enquiry" className="px-6 py-24 md:py-32">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl tracking-tighter font-light text-[var(--color-text)] leading-[1.1]">
            Stay long enough to feel it.
          </h2>
          <p className="mt-4 font-[family-name:var(--font-body)] text-sm md:text-base font-light text-[var(--color-text-muted)]">
            No dynamic pricing. No urgency. Just availability — when it fits.
          </p>
          <div className="mt-10">
            <Magnet padding={100} magnetStrength={2}>
              <a
                href="/pre-book"
                className="group inline-flex items-center gap-3 rounded-full border border-[var(--color-accent)]/40 px-10 py-4 font-[family-name:var(--font-body)] text-sm md:text-base font-light uppercase tracking-widest text-[var(--color-accent)] transition-all duration-500 hover:border-transparent hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]"
              >
                <span>Enquire</span>
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </Magnet>
          </div>
        </div>
      </section>
    </div>
  );
}
