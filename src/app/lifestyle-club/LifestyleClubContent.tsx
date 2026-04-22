"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnet from "@/components/reactbits/Magnet";

gsap.registerPlugin(ScrollTrigger);

export default function LifestyleClubContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLHeadingElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const subcopyRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const logo = logoRef.current;
    const backdrop = backdropRef.current;
    const subcopy = subcopyRef.current;
    if (!hero || !logo || !backdrop || !subcopy) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "+=180%",
          pin: true,
          scrub: 0.7,
        },
      });

      tl.to(
        logo,
        {
          scale: 7.5,
          letterSpacing: "0.2em",
          ease: "none",
        },
        0,
      )
        .to(
          backdrop,
          {
            scale: 1.18,
            filter: "brightness(1.15)",
            ease: "none",
          },
          0,
        )
        .to(
          subcopy,
          {
            y: 80,
            opacity: 0,
            ease: "none",
          },
          0,
        );
    });

    mm.add("(max-width: 767px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "+=110%",
          pin: true,
          scrub: 0.8,
        },
      });

      tl.to(
        logo,
        {
          scale: 4.2,
          letterSpacing: "0.14em",
          ease: "none",
        },
        0,
      )
        .to(
          backdrop,
          {
            scale: 1.08,
            filter: "brightness(1.1)",
            ease: "none",
          },
          0,
        )
        .to(
          subcopy,
          {
            y: 40,
            opacity: 0,
            ease: "none",
          },
          0,
        );
    });

    return () => {
      mm.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <div
      className="bg-[var(--color-bg)]"
      style={{
        "--color-accent": "#AC9877",
      } as React.CSSProperties}
    >
      <section ref={heroRef} className="relative min-h-screen overflow-hidden">
        <div
          ref={backdropRef}
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transformOrigin: "center center",
          }}
        />
        <div className="absolute inset-0 bg-black/28" />

        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <p className="mb-6 text-[10px] md:text-xs uppercase tracking-[0.45em] font-[family-name:var(--font-body)] font-light text-white/55">
            Sanctum Training Environment
          </p>

          <h1
            ref={logoRef}
            className="font-[family-name:var(--font-heading)] text-[20vw] md:text-[14vw] leading-[0.82] font-light uppercase text-transparent bg-clip-text"
            style={{
              backgroundImage: "url('/bg.png')",
              backgroundSize: "180% auto",
              backgroundPosition: "center",
              WebkitTextStroke: "1px rgba(245,245,240,0.36)",
              transformOrigin: "50% 50%",
              willChange: "transform",
            }}
          >
            Sanctum
          </h1>

          <p
            ref={subcopyRef}
            className="mt-8 max-w-xl font-[family-name:var(--font-body)] text-sm md:text-base font-light leading-relaxed text-white/70"
          >
            A sovereign training environment where performance, ritual, and
            recovery are designed as one architectural practice.
          </p>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="font-[family-name:var(--font-body)] text-[9px] uppercase tracking-[0.4em] text-white/45">
              Scroll
            </span>
            <div className="h-9 w-px bg-white/35" />
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.2fr_1fr] md:gap-20">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] font-[family-name:var(--font-body)] font-light text-[var(--color-text-muted)]">
              The Practice
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl tracking-tight font-light text-[var(--color-text)] leading-[1.05]">
              Built for people who train with intention.
            </h2>
            <p className="mt-7 max-w-xl font-[family-name:var(--font-body)] text-sm md:text-base font-light leading-relaxed text-[var(--color-text-muted)]">
              Sanctum is not a gym package. It is a disciplined ecosystem:
              strength work in raw material spaces, movement that restores range,
              and recovery protocols that let performance compound over years.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-10">
            <ul className="space-y-6">
              <li className="border-b border-[var(--color-border)] pb-5">
                <p className="text-[10px] uppercase tracking-[0.35em] font-[family-name:var(--font-body)] text-[var(--color-accent)]">
                  01
                </p>
                <p className="mt-2 font-[family-name:var(--font-heading)] text-2xl font-light text-[var(--color-text)]">
                  Strength
                </p>
                <p className="mt-2 font-[family-name:var(--font-body)] text-sm font-light leading-relaxed text-[var(--color-text-muted)]">
                  Compound movement and loaded carries, programmed for durability.
                </p>
              </li>
              <li className="border-b border-[var(--color-border)] pb-5">
                <p className="text-[10px] uppercase tracking-[0.35em] font-[family-name:var(--font-body)] text-[var(--color-accent)]">
                  02
                </p>
                <p className="mt-2 font-[family-name:var(--font-heading)] text-2xl font-light text-[var(--color-text)]">
                  Movement
                </p>
                <p className="mt-2 font-[family-name:var(--font-body)] text-sm font-light leading-relaxed text-[var(--color-text-muted)]">
                  Daily mobility and breath-led sequences that protect longevity.
                </p>
              </li>
              <li>
                <p className="text-[10px] uppercase tracking-[0.35em] font-[family-name:var(--font-body)] text-[var(--color-accent)]">
                  03
                </p>
                <p className="mt-2 font-[family-name:var(--font-heading)] text-2xl font-light text-[var(--color-text)]">
                  Recovery
                </p>
                <p className="mt-2 font-[family-name:var(--font-body)] text-sm font-light leading-relaxed text-[var(--color-text-muted)]">
                  Contrast therapy and restoration built into the rhythm, not added after.
                </p>
              </li>
            </ul>

            <div className="mt-10">
              <Magnet padding={90} magnetStrength={2}>
                <a
                  href="/pre-book"
                  className="group inline-flex items-center gap-3 rounded-full border border-[var(--color-accent)]/40 px-8 py-3 font-[family-name:var(--font-body)] text-xs md:text-sm font-light uppercase tracking-[0.22em] text-[var(--color-accent)] transition-all duration-500 hover:border-transparent hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]"
                >
                  <span>Enquire</span>
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </Magnet>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
