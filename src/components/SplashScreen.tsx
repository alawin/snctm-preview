"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function SplashScreen() {
  const splashRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const splash = splashRef.current;
    const icon = iconRef.current;
    if (!splash || !icon) return;

    const tl = gsap.timeline();

    // Icon fades + scales in
    tl.fromTo(
      icon,
      { opacity: 0, scale: 0.8, filter: "blur(10px)" },
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out" }
    )
    // Hold
    .to({}, { duration: 0.6 })
    // Icon fades out
    .to(icon, { opacity: 0, scale: 1.1, filter: "blur(8px)", duration: 0.8, ease: "power2.in" })
    // Overlay fades out
    .to(splash, {
      opacity: 0,
      duration: 0.7,
      ease: "power2.inOut",
      onComplete: () => setDone(true),
    });

    return () => { tl.kill(); };
  }, []);

  if (done) return null;

  return (
    <div
      ref={splashRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--color-bg)]"
    >
      <div ref={iconRef} className="opacity-0">
        <Image
          src="/icon/icon.png"
          alt="Sanctum"
          width={250}
          height={250}
          priority
          className="select-none"
        />
      </div>
    </div>
  );
}
