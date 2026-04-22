"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import MagicRings from "@/components/reactbits/MagicRings";

export default function Hero() {
  const logoRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const logo = logoRef.current;
    const tagline = taglineRef.current;
    const scroll = scrollRef.current;
    if (!logo || !tagline || !scroll) return;

    const tl = gsap.timeline({ delay: 0.4 });

    tl.fromTo(
      logo,
      { opacity: 0, scale: 0.95, filter: "blur(8px)" },
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out" }
    )
      .fromTo(
        tagline,
        { opacity: 0, y: 12, filter: "blur(6px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(
        scroll,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.4"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/28" />

      {/* Magic Rings overlay */}
      <div className="absolute inset-0 z-5">
        <MagicRings
          color="#C9A96E"
          colorTwo="#284B3F"
          ringCount={5}
          speed={0.6}
          attenuation={12}
          lineThickness={1.5}
          baseRadius={0.33}
          radiusStep={0.1}
          scaleRate={0.08}
          opacity={0.15}
          blur={1}
          noiseAmount={0.04}
          ringGap={1.6}
          fadeIn={0.8}
          fadeOut={0.4}
          followMouse={true}
          mouseInfluence={0.12}
          hoverScale={1.08}
          parallax={0.02}
          clickBurst={true}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1
          ref={logoRef}
          className="text-[9vw] md:text-[5.5vw] leading-[0.82] font-medium tracking-[0.12em] text-white opacity-0"
          style={{ fontFamily: "var(--font-display)" }}
        >
          SANCTUM
        </h1>

        <p
          ref={taglineRef}
          className="mt-6 max-w-xl font-[family-name:var(--font-body)] text-sm md:text-base font-light leading-relaxed text-white/70 opacity-0"
        >
          Lifestyle. Wellness. Retreat.
        </p>

        <div
          ref={scrollRef}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0"
        >
          <span className="font-[family-name:var(--font-body)] text-[9px] uppercase tracking-[0.4em] text-white/45">
            A simple demo for you, Sanctum.
          </span>
          <div className="h-9 w-px bg-white/35" />
        </div>
      </div>
    </section>
  );
}
