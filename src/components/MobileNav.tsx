"use client";

import { useState, useCallback, useEffect } from "react";
import FlowingMenu from "@/components/reactbits/FlowingMenu";

const menuItems = [
  { link: "/", text: "Home", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=60" },
  { link: "/lifestyle-club", text: "Lifestyle Club", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=60" },
  { link: "/enclave", text: "Enclave", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=60" },
  { link: "/collectiv", text: "Collectiv", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=60" },
  { link: "/philosophy", text: "Philosophy", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=60" },
  { link: "/journal", text: "Journal", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=60" },
  { link: "/pre-book", text: "Pre-Book", image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&q=60" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Burger button — fixed top-right */}
      <button
        onClick={toggle}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="fixed top-6 right-6 z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/80 backdrop-blur-md transition-colors duration-300 hover:border-[var(--color-accent)]/40 md:hidden"
      >
        <div className="flex flex-col items-center justify-center gap-[5px]">
          <span
            className={`block h-px w-5 bg-[var(--color-text)] transition-all duration-300 ${isOpen ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-5 bg-[var(--color-text)] transition-all duration-300 ${isOpen ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </div>
      </button>

      {/* Full-screen overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          onClick={(e) => {
            // Close if user taps outside menu items
            if ((e.target as HTMLElement).closest("a")) {
              setIsOpen(false);
            }
          }}
        >
          <FlowingMenu
            items={menuItems}
            speed={12}
            textColor="#F5F5F0"
            bgColor="#121212"
            marqueeBgColor="#C9A96E"
            marqueeTextColor="#121212"
            borderColor="#2A2A2A"
          />
        </div>
      )}
    </>
  );
}
