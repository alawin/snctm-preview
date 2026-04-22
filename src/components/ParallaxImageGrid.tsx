"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedContent from "@/components/reactbits/AnimatedContent";

gsap.registerPlugin(ScrollTrigger);

interface ImageItem {
  src: string;
  alt: string;
  label: string;
  height: string; // Tailwind height class for masonry variation
}

const images: ImageItem[] = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    alt: "Luxury gym interior",
    label: "Gym",
    height: "h-[420px] md:h-[520px]",
  },
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    alt: "Boutique hotel room",
    label: "Hotel",
    height: "h-[340px] md:h-[440px]",
  },
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    alt: "Private villa with pool",
    label: "Villa",
    height: "h-[380px] md:h-[480px]",
  },
];

const speeds = [0.8, 1.2, 0.6]; // Different parallax speeds per column

export default function ParallaxImageGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const els = imageRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!els.length) return;

    const triggers: ScrollTrigger[] = [];

    els.forEach((el, index) => {
      const speed = speeds[index] ?? 1;
      const yDistance = speed * 80;

      const tween = gsap.fromTo(
        el,
        { y: yDistance },
        {
          y: -yDistance,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 px-4 md:px-0"
    >
      {images.map((img, index) => (
        <AnimatedContent
          key={img.label}
          distance={60}
          duration={0.9}
          delay={index * 0.15}
          className={index === 1 ? "md:mt-16" : ""} // Masonry offset for middle column
        >
          <div
            ref={(el) => {
              imageRefs.current[index] = el;
            }}
            data-speed={speeds[index]}
            className="group relative overflow-hidden rounded-2xl"
          >
            <div className={`relative ${img.height} w-full overflow-hidden`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Label */}
              <span className="absolute bottom-6 left-6 font-[family-name:var(--font-heading)] text-2xl md:text-3xl tracking-tighter font-light text-white/90">
                {img.label}
              </span>
            </div>
          </div>
        </AnimatedContent>
      ))}
    </div>
  );
}
