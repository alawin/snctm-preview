# Sanctum — Technical Note

**Version:** 1.0
**Date:** 15 April 2026
**Status:** Draft for Review
**Parent Documents:** [BRD.md](./BRD.md) → [PRD.md](./PRD.md)
**Confidentiality:** Internal — Sanctum Partners

---

## 1. Purpose

The BRD explains _why_. The PRD explains _what_. This document explains _how_ — and, more importantly, _why we chose this particular how_.

Every technical decision in this document is traceable to a brand principle or business requirement. Sanctum's philosophy — sovereignty, intentionality, material honesty, negative space — extends into the codebase itself. A carelessly built site cannot credibly represent a meticulously designed physical space.

This is not conventional technical documentation. It is a philosophical framework for the code.

---

## 2. The Governing Metaphor

Sanctum's physical spaces are built from a small, honest material palette: concrete, stone, brass, copper. These materials are not decorative. They are structural. They age gracefully. They do not pretend to be something they are not.

The technology stack follows the same principle.

| Physical Material                    | Digital Equivalent                         | Why                                                                                                                                                                                            |
| ------------------------------------ | ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Poured concrete** (structure)      | **Next.js 15** (framework)                 | The structural slab. App Router provides the foundational architecture — routing, server rendering, streaming. It bears the load.                                                              |
| **Stone** (surfaces)                 | **Tailwind CSS v4** (styling)              | The surface material. CSS custom properties via `@theme inline {}` provide the texture. Like stone, it is honest about what it is — utility classes declare intent explicitly.                 |
| **Brass inlays** (refined detail)    | **GSAP** (animation)                       | The warm detail. GSAP provides the refined, controlled motion that elevates the experience — the equivalent of brass catching light in a concrete corridor. Used sparingly and with precision. |
| **Copper** (continuous thread)       | **Reactbits components** (shared patterns) | The unifying material. Reactbits components (SplitText, ScrollReveal, Magnet, AnimatedContent) are the copper hardware — they appear across every sub-brand, maintaining coherence.            |
| **Negative space** (the air between) | **Component architecture** (modularity)    | The space between components matters as much as the components themselves. Generous padding, clear separation of concerns, breathing room in the code.                                         |

---

## 3. Technology Stack

### 3.1 Stack Summary

| Layer      | Technology       | Version    | Reasoning                                                                                                                                                            |
| ---------- | ---------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework  | Next.js          | 15.x       | App Router, React Server Components, static generation, image optimisation. The most production-ready React framework for SEO-critical, performance-sensitive sites. |
| Language   | TypeScript       | 5.x        | Type safety prevents careless errors. In a brand where "every detail matters," runtime bugs are unacceptable.                                                        |
| Styling    | Tailwind CSS     | 4.x        | CSS-variable theme engine (`@theme inline {}`) enables sub-brand palette switching without code duplication. Utility classes are explicit and auditable.             |
| Animation  | GSAP             | 3.x (free) | Industry-standard scroll animation. ScrollTrigger for scroll-linked effects, timeline control for sequenced reveals.                                                 |
| GSAP React | @gsap/react      | 2.x        | React-aware lifecycle hooks for GSAP. Ensures proper cleanup.                                                                                                        |
| Images     | next/image       | Built-in   | Automatic optimisation, lazy loading, responsive srcsets, AVIF/WebP formats. Critical for LCP performance.                                                           |
| Fonts      | next/font/google | Built-in   | Eliminates FOUT/FOIT. Self-hosts font files with automatic `font-display: swap`.                                                                                     |

### 3.2 What We Chose Not To Use (and Why)

| Technology                                                   | Why Not                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Framer Motion**                                            | Overlaps with GSAP. Two animation libraries doubles bundle size and cognitive overhead. GSAP is more capable for scroll-linked effects. One tool, mastered.                                                                                                                                                                                                    |
| **CSS-only animations**                                      | Insufficient for scroll-scrubbed parallax, staggered word reveals, and magnetic cursor effects. CSS transitions handle simple hover states; GSAP handles everything else.                                                                                                                                                                                      |
| **Headless CMS (Phase 1–2)**                                 | The Journal (Phase 3) requires a CMS for non-developer content management — but building the integration now, before understanding the real content workflow, leads to wrong abstractions. Phase 1–2 use static content; Phase 3 introduces a headless CMS (Sanity, Payload, or Contentful — to be evaluated). See BRD 6.7 and PRD 4.6 for the full reasoning. |
| **React Server Components for animated sections**            | All GSAP-driven components require `"use client"`. Server Components are used for static layout, metadata, and data fetching. The boundary is clear and intentional.                                                                                                                                                                                           |
| **GSAP Club/Business plugins**                               | SplitText plugin requires a paid license. We port the functionality using manual DOM splitting — honest, transparent, no licensing ambiguity.                                                                                                                                                                                                                  |
| **Third-party UI component libraries (shadcn, Radix, etc.)** | Sanctum's design system is bespoke. Pre-built components carry visual assumptions that conflict with the brand. We build what we need from Reactbits patterns, nothing more.                                                                                                                                                                                   |

---

## 4. Architecture

### 4.1 Directory Structure

```
sanctum/
├── docs/
│   ├── BRD.md                        ← Business Requirements
│   ├── PRD.md                        ← Product Requirements
│   └── TECHNICAL_NOTE.md             ← This document
│
├── public/
│   └── (static assets)
│
├── src/
│   ├── app/                          ← Next.js App Router
│   │   ├── globals.css               ← Tailwind v4 theme + global styles
│   │   ├── layout.tsx                ← Root layout (fonts, metadata)
│   │   ├── page.tsx                  ← Home page
│   │   ├── philosophy/
│   │   │   └── page.tsx
│   │   ├── lifestyle-club/
│   │   │   └── page.tsx
│   │   ├── enclave/
│   │   │   └── page.tsx
│   │   ├── collectiv/
│   │   │   └── page.tsx
│   │   ├── journal/
│   │   │   ├── page.tsx              ← Journal index
│   │   │   └── [slug]/
│   │   │       └── page.tsx          ← Individual article
│   │   ├── pre-book/
│   │   │   └── page.tsx
│   │   └── not-found.tsx             ← Custom 404
│   │
│   ├── components/
│   │   ├── reactbits/                ← Ported Reactbits components
│   │   │   ├── SplitText.tsx
│   │   │   ├── ScrollReveal.tsx
│   │   │   ├── Magnet.tsx
│   │   │   └── AnimatedContent.tsx
│   │   │
│   │   ├── SectionReveal.tsx         ← Home: section reveal composition
│   │   ├── ParallaxImageGrid.tsx     ← Reusable parallax image grid
│   │   ├── Navigation.tsx            ← Global nav (Phase 2)
│   │   ├── Footer.tsx                ← Global footer (Phase 2)
│   │   └── (future components)
│   │
│   └── lib/                          ← Utilities, constants, helpers
│       ├── constants.ts              ← Brand tokens, content strings
│       └── seo.ts                    ← Structured data generators
│
├── AGENTS.md
├── CLAUDE.md
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts (if needed)
└── tsconfig.json
```

### 4.2 Architectural Decisions

#### 4.2.1 Server vs. Client Component Boundary

**Principle:** Server by default. Client only when the browser is required.

| Component           | Rendering               | Why                                                                                                                                       |
| ------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `layout.tsx`        | Server                  | Static shell. Fonts, metadata, no interactivity.                                                                                          |
| `page.tsx` (any)    | Server                  | The page itself is a server component that imports client children. This ensures metadata and static content are server-rendered for SEO. |
| `SectionReveal`     | Client (`"use client"`) | Contains GSAP animations that require DOM access.                                                                                         |
| `SplitText`         | Client                  | GSAP, DOM manipulation, `useEffect`.                                                                                                      |
| `ScrollReveal`      | Client                  | GSAP ScrollTrigger, DOM queries.                                                                                                          |
| `Magnet`            | Client                  | `mousemove` event listener.                                                                                                               |
| `AnimatedContent`   | Client                  | GSAP ScrollTrigger.                                                                                                                       |
| `ParallaxImageGrid` | Client                  | GSAP parallax, refs to individual images.                                                                                                 |

**The boundary stays clean:** Page files are server components. They import `"use client"` components as children. This means:

- SEO-critical content (headings, meta, structured data) is server-rendered.
- Interactive experiences are hydrated on the client.
- No accidental `"use client"` propagation.

#### 4.2.2 Sub-brand Theming Strategy

The PRD defines four colour palettes (Sanctum, Lifestyle Club, Enclave, Collectiv). Rather than duplicating CSS or creating separate Tailwind configs, we use CSS custom property overrides at the route level.

**Implementation:**

```css
/* globals.css — default Sanctum palette */
@theme inline {
  --color-bg: #121212;
  --color-text: #f5f5f0;
  --color-primary: #121212;
  --color-secondary: #1a1a1a;
  --color-accent: #c9a96e;
  --color-concrete: #a39c92;
  --color-copper: #b76649;
}
```

Each sub-brand page wraps its content in a `<div>` with overriding CSS variables:

```tsx
// src/app/enclave/page.tsx
export default function EnclavePage() {
  return (
    <div
      style={
        {
          "--color-primary": "#001321",
          "--color-secondary": "#376A65",
          "--color-accent": "#D4C2AE",
        } as React.CSSProperties
      }
    >
      {/* Enclave content — all components automatically pick up the new palette */}
    </div>
  );
}
```

**Why this approach:**

- Zero duplication. Components use `var(--color-primary)` and respond automatically.
- Sub-brand identity is a _data concern_, not a _component concern_. Components remain brand-agnostic.
- CSS custom properties cascade naturally. No JavaScript palette-switching logic.
- Continuous elements (concrete, copper) are never overridden — they unify the system, just like in the physical brand.

---

## 5. GSAP Architecture & Memory Safety

### 5.1 The Audit Requirement

The BRD references a US partners' audit requirement for GSAP cleanup. This is not a suggestion. Every GSAP animation must be properly destroyed when its component unmounts. Failure to do so causes:

1. **Memory leaks** — orphaned ScrollTrigger instances accumulate, degrading performance over time.
2. **Ghost animations** — triggers fire on unmounted components, causing console errors or undefined behaviour.
3. **SEO impact** — memory leaks degrade Core Web Vitals over extended sessions, which Google measures.

### 5.2 Cleanup Pattern (Mandatory)

Every component that uses GSAP follows this exact pattern:

```tsx
"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ExampleComponent() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Create animations
    const tween = gsap.fromTo(
      el,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      },
    );

    // MANDATORY: Cleanup on unmount
    return () => {
      tween.scrollTrigger?.kill(); // Kill the ScrollTrigger first
      tween.kill(); // Then kill the tween
    };
  }, []);

  return <div ref={ref}>Content</div>;
}
```

**Rules:**

| Rule                                                      | Reasoning                                                                                                        |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Every `gsap.to/from/fromTo` return value is stored        | So we can call `.kill()` on it.                                                                                  |
| Every `ScrollTrigger.create()` return value is stored     | Same.                                                                                                            |
| Cleanup always kills ScrollTrigger _before_ the tween     | Prevents the trigger from trying to fire the killed tween.                                                       |
| `once: true` on scroll-triggered animations               | Prevents re-firing on back-scroll, but does not replace cleanup (component may still unmount).                   |
| No global `ScrollTrigger.getAll().forEach(t => t.kill())` | This is a sledgehammer that kills triggers from other components. Each component manages only its own instances. |

### 5.3 Current Compliance Status

| Component           | Cleanup Implemented | Notes                                                        |
| ------------------- | ------------------- | ------------------------------------------------------------ |
| `SplitText`         | Yes                 | Returns cleanup in `useEffect`. Kills tween + ScrollTrigger. |
| `ScrollReveal`      | Yes                 | Stores all triggers in array, kills each on unmount.         |
| `AnimatedContent`   | Yes                 | Kills both ScrollTrigger and timeline.                       |
| `Magnet`            | Yes (non-GSAP)      | Removes `mousemove` event listener on unmount.               |
| `ParallaxImageGrid` | Yes                 | Stores triggers in array, kills each.                        |

---

## 6. Tailwind v4 Theme Engine

### 6.1 Why Tailwind v4

Tailwind v4 introduces the `@theme inline {}` directive, which allows CSS custom properties to be declared _within the Tailwind system_ and used as first-class utility values. This is a fundamental shift from Tailwind v3's `tailwind.config.ts` approach.

**For Sanctum, this matters because:**

1. **Sub-brand theming via CSS cascade** — Custom properties defined in `@theme inline {}` can be overridden at any DOM level using standard CSS `style` attributes or scoped `<style>` blocks. This is how we switch palettes per sub-brand without JavaScript.

2. **No build-time configuration** — The theme is defined in CSS, not JavaScript. This means faster builds, smaller config surface, and a single source of truth.

3. **Interoperability with GSAP** — GSAP can read and animate CSS custom properties directly. If we ever need GSAP to animate a colour transition between sub-brand palettes, the infrastructure is already there.

### 6.2 Theme Definition

The full theme is defined in `src/app/globals.css`:

```css
@import "tailwindcss";

@theme inline {
  /* Colour tokens */
  --color-bg: #121212;
  --color-text: #f5f5f0;
  --color-text-muted: #a3a39e;
  --color-accent: #c9a96e;
  --color-accent-hover: #d4b97e;
  --color-surface: #1a1a1a;
  --color-border: #2a2a2a;

  /* Font tokens */
  --font-heading: var(--font-cormorant);
  --font-body: var(--font-outfit);
}
```

These are then consumed via Tailwind utilities: `bg-[var(--color-bg)]`, `text-[var(--color-text)]`, `font-[family-name:var(--font-heading)]`.

### 6.3 Responsive Strategy

The brand brief states: _"the vibe must hold on both a Pro Display XDR and an iPhone 15."_

| Breakpoint        | Target                     | Design Treatment                                                                                                                                                  |
| ----------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Default (< 640px) | iPhone 15 and similar      | Single column. Full-bleed sections. Type scales down. Touch targets ≥ 44px. Magnetic effect disabled (no cursor).                                                 |
| `sm` (640px)      | Small tablets              | Minor layout adjustments.                                                                                                                                         |
| `md` (768px)      | iPad, small laptops        | 2–3 column grids activate. Section padding increases.                                                                                                             |
| `lg` (1024px)     | Standard laptops           | Full layout. All animations active.                                                                                                                               |
| `xl` (1280px)     | Large displays             | Max-width containers prevent content stretching. Negative space increases proportionally.                                                                         |
| `2xl` (1536px+)   | Pro Display XDR, ultrawide | Content is centred within `max-w-7xl`. The extra space becomes negative space — which is the brand. The larger the screen, the more "gallery wall" the user sees. |

**Critical responsive behaviours:**

| Feature             | Mobile                                       | Desktop                                   |
| ------------------- | -------------------------------------------- | ----------------------------------------- |
| SplitText animation | Plays (simpler easing)                       | Plays (full blur + stagger)               |
| Parallax            | Disabled (single column, no speed variation) | Full parallax with `data-speed` variation |
| Magnetic CTA        | Regular button (no pointer on mobile)        | Full magnetic effect                      |
| ScrollReveal        | Plays (reduced blur, no rotation)            | Full effect                               |
| Image grid          | Single column stack                          | 3-column masonry                          |

**Implementation:** `prefers-reduced-motion` media query disables all GSAP animations. Mobile parallax is handled by checking viewport width in the GSAP setup and applying simplified effects.

---

## 7. Image Optimisation Strategy

### 7.1 next/image Configuration

```ts
// next.config.ts
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Placeholder phase
      },
      {
        protocol: "https",
        hostname: "cdn.sanctumlombok.com", // Production phase
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};
```

### 7.2 Image Sizing Strategy

| Context          | `sizes` Attribute                | Reasoning                               |
| ---------------- | -------------------------------- | --------------------------------------- |
| Full-width hero  | `100vw`                          | Takes the full viewport.                |
| 3-column grid    | `(max-width: 768px) 100vw, 33vw` | Mobile: full width. Desktop: one-third. |
| 2-column content | `(max-width: 768px) 100vw, 50vw` | Mobile: full width. Desktop: half.      |
| Thumbnail / card | `(max-width: 768px) 50vw, 25vw`  | Grid of cards.                          |

Correct `sizes` attributes are critical for Core Web Vitals (LCP). They ensure the browser downloads appropriately sized images, not oversized ones.

---

## 8. SEO Technical Implementation

### 8.1 Metadata Framework

Next.js 15 App Router uses the `metadata` export for SEO tags:

```tsx
// src/app/layout.tsx (root)
export const metadata: Metadata = {
  metadataBase: new URL("https://sanctumlombok.com"),
  title: {
    default: "Sanctum Lombok — Architecture. Movement. Ritual.",
    template: "%s — Sanctum Lombok",
  },
  description: "A sovereign wellness ecosystem...",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Sanctum Lombok",
  },
};
```

Each sub-page exports its own `metadata`:

```tsx
// src/app/philosophy/page.tsx
export const metadata: Metadata = {
  title: "Philosophy", // Becomes "Philosophy — Sanctum Lombok" via template
  description: "The founding principles of Sanctum...",
};
```

### 8.2 Structured Data

JSON-LD is injected via a `<script type="application/ld+json">` in the page component:

```tsx
export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sanctum Lombok",
    url: "https://sanctumlombok.com",
    logo: "https://sanctumlombok.com/logo.svg",
    description: "A sovereign wellness ecosystem...",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <SectionReveal />
      </main>
    </>
  );
}
```

### 8.3 Sitemap & Robots

Next.js 15 supports `sitemap.ts` and `robots.ts` as route handlers:

```tsx
// src/app/sitemap.ts
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sanctumlombok.com",
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: "https://sanctumlombok.com/philosophy",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://sanctumlombok.com/lifestyle-club",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://sanctumlombok.com/enclave",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://sanctumlombok.com/collectiv",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://sanctumlombok.com/journal",
      lastModified: new Date(),
      priority: 0.7,
    },
    // Dynamic journal articles added programmatically
  ];
}
```

---

## 9. Performance Budget

### 9.1 Bundle Size Targets

| Resource               | Target                  | Current  | Notes                                 |
| ---------------------- | ----------------------- | -------- | ------------------------------------- |
| First Load JS (shared) | < 120 kB                | 102 kB   | Healthy.                              |
| Page JS (`/`)          | < 80 kB                 | 53.7 kB  | Room for growth as we add components. |
| GSAP (total)           | < 50 kB gzipped         | ~46 kB   | Includes gsap core + ScrollTrigger.   |
| Total page weight      | < 500 kB (excl. images) | On track | Monitor as we add pages.              |

### 9.2 Image Budget

| Context    | Max dimensions | Max file size (post-optimisation) |
| ---------- | -------------- | --------------------------------- |
| Hero       | 1920×1080      | 150 kB (AVIF) / 250 kB (WebP)     |
| Grid image | 800×1000       | 80 kB (AVIF) / 120 kB (WebP)      |
| Thumbnail  | 400×500        | 30 kB (AVIF) / 50 kB (WebP)       |

`next/image` handles format selection and responsive sizing automatically, but source images should be prepared at appropriate resolutions.

---

## 10. Security Considerations

| Concern                             | Mitigation                                                                                                         |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| XSS via form inputs                 | All form data sanitised server-side. React's default escaping prevents client-side XSS.                            |
| Image domain whitelist              | `next.config.ts` `images.remotePatterns` restricts allowed domains. No user-supplied image URLs.                   |
| `dangerouslySetInnerHTML` (JSON-LD) | Only used for structured data with content we control. Never with user input.                                      |
| Dependency vulnerabilities          | `npm audit` run before each deployment. Zero tolerance for critical/high vulnerabilities.                          |
| Environment variables               | No secrets in client bundles. Server-only env vars use `NEXT_PUBLIC_` prefix only when required for client access. |
| HTTPS                               | Enforced at hosting level. `metadataBase` uses `https://`.                                                         |

---

## 11. Testing Strategy

### 11.1 Visual & Interaction Testing

| What                | How                                                   | When                    |
| ------------------- | ----------------------------------------------------- | ----------------------- |
| Responsive layout   | Manual testing on iPhone 15, iPad, 1440p, 5K          | Before each deployment  |
| Animation behaviour | Manual scroll testing. Verify `once: true` behaviour. | After any GSAP change   |
| Magnetic effect     | Desktop cursor testing. Verify fallback on touch.     | After any Magnet change |
| reduced-motion      | Test with `prefers-reduced-motion: reduce` enabled    | Before launch           |

### 11.2 Performance Testing

| What            | Tool                                         | Target                                       |
| --------------- | -------------------------------------------- | -------------------------------------------- |
| Core Web Vitals | Lighthouse (lab), Chrome UX Report (field)   | All green                                    |
| Bundle analysis | `next build` output, `@next/bundle-analyzer` | Within budget                                |
| Memory leaks    | Chrome DevTools → Performance → Memory tab   | No growing heap over 5-minute scroll session |

### 11.3 SEO Testing

| What                       | Tool                               | Target                 |
| -------------------------- | ---------------------------------- | ---------------------- |
| Structured data validation | Google Rich Results Test           | No errors, no warnings |
| Meta tags                  | Manual inspection + SEO crawl tool | All pages complete     |
| Accessibility              | axe DevTools, Lighthouse           | WCAG 2.1 AA compliance |
| HTML validity              | W3C validator                      | No errors              |

---

## 12. Deployment & Infrastructure

### 12.1 Recommended Hosting

| Option                   | Reasoning                                                                             |
| ------------------------ | ------------------------------------------------------------------------------------- |
| **Vercel** (recommended) | Native Next.js 15 support. Edge caching. Image optimisation CDN. Zero-config deploys. |
| Cloudflare Pages         | Alternative if edge-first is preferred. Requires adapter.                             |
| Self-hosted (Node.js)    | Full control but higher operational overhead. Not recommended for Phase 1.            |

### 12.2 CI/CD

- Push to `main` → production deploy.
- Push to feature branch → preview deploy (Vercel preview URLs).
- `npm run build` must succeed before merge. No broken builds on `main`.
- `npm run lint` must pass.

---

## 13. Philosophy of the Code

This section exists because the founding team values reasoning. Here is the reasoning for how we write code.

### 13.1 Simplicity as Rigour

> _Minimal but never empty._

We do not add abstractions until they are needed twice. We do not create utility functions for one-time operations. We do not install packages when 10 lines of code will do.

The SplitText component is a case in point: rather than installing the GSAP SplitText plugin (which requires a paid license and adds dependency weight), we wrote a manual word-splitting implementation in ~130 lines. It does exactly what we need and nothing more. This is material honesty in code.

### 13.2 Explicit Over Clever

> _Calm. Measured. Precise._

Tailwind utilities are explicit: `bg-[var(--color-bg)]` tells you exactly what is happening. CSS-in-JS solutions hide the relationship between intent and output. We choose the approach that, when read by a new developer, communicates immediately.

Similarly, GSAP configurations are written longhand rather than compressed into terse one-liners. Every property is on its own line. Every animation has a comment explaining its purpose. This is not verbosity — it is precision.

### 13.3 Composability Over Inheritance

The Reactbits components are small, independent units. `SplitText` knows nothing about `ScrollReveal`. `Magnet` knows nothing about `AnimatedContent`. They are composed together in `SectionReveal.tsx` at the page level.

This mirrors the physical brand: the wordmark, icon, and secondary typography are "separate, modular components" that can "expand or contract confidently, maintaining calm authority across any format." Same principle, different medium.

### 13.4 Cleanup as Discipline

GSAP cleanup is not a technical requirement. It is a discipline. It is the code equivalent of the brand's insistence on "no exclamation points, no wellness clichés, no corporate enthusiasm." We clean up because leaving mess is fundamentally at odds with who we are building for.

Every `useEffect` that creates must also destroy. Every listener that binds must also unbind. This is not optional. This is architectural.

---

## 14. Appendix: Environment & Tooling

### 14.1 Current Environment

| Tool         | Version | Notes                                                                                             |
| ------------ | ------- | ------------------------------------------------------------------------------------------------- |
| Node.js      | 18.20.4 | Below Next.js 16's requirement (20.9+). Acceptable for Next.js 15. Upgrade recommended long-term. |
| npm          | 10.7.0  | —                                                                                                 |
| Next.js      | 15.5.15 | Pinned to 15.x for Node 18 compatibility.                                                         |
| React        | 18.x    | Compatible with Next.js 15.                                                                       |
| TypeScript   | 5.x     | —                                                                                                 |
| Tailwind CSS | 4.x     | Using `@theme inline {}` engine.                                                                  |
| GSAP         | 3.x     | Free tier. gsap + ScrollTrigger only.                                                             |
| @gsap/react  | 2.x     | —                                                                                                 |

### 14.2 Key Commands

```bash
npm run dev      # Start development server (Turbopack)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

_"The ritual begins before you arrive."_
_The code is built before the first pixel renders._
_Every decision has a reason. Every reason has a philosophy. Every philosophy has a standard._
