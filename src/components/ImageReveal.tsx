"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface ImageRevealProps {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  direction?: "left" | "right" | "bottom";
}

export default function ImageReveal({
  src,
  alt,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  className = "",
  direction = "left",
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const clipFrom =
      direction === "left"
        ? "inset(0 100% 0 0)"
        : direction === "right"
          ? "inset(0 0 0 100%)"
          : "inset(100% 0 0 0)";

    gsap.set(el, { clipPath: clipFrom });

    const tween = gsap.to(el, {
      clipPath: "inset(0 0% 0 0)",
      duration: 1.2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        end: "top 40%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [direction]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden rounded-2xl ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
