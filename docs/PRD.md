# Sanctum — Product Requirements Document

**Version:** 1.0
**Date:** 15 April 2026
**Status:** Draft for Review
**Parent Document:** [BRD.md](./BRD.md)
**Confidentiality:** Internal — Sanctum Partners

---

## 1. Purpose

The BRD established _why_ we are building. This document defines _what_ we are building — the product itself: its pages, its components, its interactions, its content architecture, and its behaviour across every surface.

Every decision here traces back to a business objective (referenced as B1–B5 from the BRD) and a brand principle. Nothing is decorative. Everything is reasoned.

---

## 2. Product Vision

> The threshold is yours. Enter when ready.

The Sanctum website is a digital threshold — a carefully paced transition from the outside world into the Sanctum ecosystem. It is not a brochure. It is not a landing page. It is an environment.

The experience should feel like walking through a concrete corridor that gradually reveals light, texture, and purpose. The user does not arrive and immediately see everything. They move through the space. The space responds to their movement.

---

## 3. Information Architecture

### 3.1 Site Map

```
sanctumlombok.com
│
├── / (Home — The Threshold)
│   ├── Hero Section
│   ├── Section Reveal (The Sanctuary of Movement)
│   ├── The System (Lifestyle Club / Enclave / Collectiv)
│   ├── Philosophy Teaser
│   └── Pre-book CTA
│
├── /philosophy
│   ├── Founding Principles
│   ├── Architecture & Material Language
│   ├── Movement Philosophy
│   └── Ritual & Restoration
│
├── /lifestyle-club
│   ├── Overview & Positioning
│   ├── Spaces (Gym, Movement Studio, Recovery)
│   ├── Programmes & Rituals
│   └── Membership Enquiry
│
├── /enclave
│   ├── Overview & Positioning
│   ├── Accommodation Types
│   ├── Gallery
│   └── Booking Enquiry
│
├── /collectiv
│   ├── Overview & Positioning
│   ├── Residency Model
│   ├── Community & Culture
│   └── Application
│
├── /journal (Editorial / SEO Content Hub)
│   ├── Article Index
│   ├── Individual Articles
│   └── Category Filtering (Architecture, Movement, Ritual, Perspective)
│
├── /pre-book
│   └── Enquiry Form (not transactional)
│
└── (Global)
    ├── Navigation
    ├── Footer
    └── 404 (On-brand)
```

### 3.2 Reasoning for Structure

| Decision                              | Reasoning                                                                                                                                                                             | Business Objective |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| Separate pages per sub-brand          | Each sub-brand (Lifestyle Club, Enclave, Collectiv) has a distinct palette and audience segment. Separation allows targeted SEO and clear user journeys.                              | B2, B4             |
| `/philosophy` as a standalone section | The founding team's depth of thought is a genuine differentiator. This is not an "About" page — it is the intellectual foundation of the brand. For SEO, it builds E-E-A-T authority. | B1, B3             |
| `/journal` as content hub             | Long-form, authoritative content is the primary SEO growth engine. A dedicated journal positions Sanctum as a voice, not just a venue.                                                | B3, B5             |
| Pre-book as enquiry, not transaction  | The target audience makes considered decisions. An enquiry form (not a Booking.com-style calendar) respects their process and filters for aligned guests.                             | B5                 |
| No "About Us" page                    | "About Us" is corporate convention. Sanctum's story is told through `/philosophy` and the journal — more intentional, more authoritative.                                             | B1                 |

---

## 4. Page-Level Requirements

### 4.1 Home — The Threshold

**Purpose:** First impression. Establishes the Sanctum world in under 5 seconds but rewards those who scroll with depth.

**Why this page exists:** Every visitor — whether from Google, an ad, a referral, or a typed URL — will land here first at least once. The homepage is not a summary of the site. It is the _threshold_: the architectural moment of crossing from the outside world into the sanctuary. If this page does not communicate Sanctum's philosophical and aesthetic position within five seconds, the right guest will leave and the wrong guest will stay. Neither outcome is acceptable.

| Section               | Content                                                                                                                                                     | Interaction                                                                                                                                    | Philosophy (Why This Section Exists)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Component(s)                                                         |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **Hero**              | Full-viewport. Sanctum wordmark centred in negative space. Subtle ambient motion (no video autoplay). Tagline fades in: _"Architecture. Movement. Ritual."_ | Scroll indicator — a minimal downward gesture, not a bouncing arrow.                                                                           | **The hero is not a billboard — it is a door.** Luxury hotel sites default to carousels and autoplay video. These are performance-hostile (see BRD 6.3) and visually aggressive. Our hero communicates through what it _withholds_: no imagery, no sales copy, no promotional banner. The negative space says "we are confident enough to not fill every pixel." The wordmark centred in emptiness mirrors Sanctum's physical reception — no clutter, no signage, just threshold. The scroll indicator is an invitation, not a demand.                                                                                | Custom hero with GSAP fade-in. No carousel.                          |
| **Section Reveal**    | "The Sanctuary of Movement." heading. Body text introducing the philosophy. 3-column image grid (Gym, Hotel, Villa). Pre-book CTA.                          | Heading: word-by-word SplitText with blur reveal. Body: ScrollReveal word-by-word. Images: parallax at different speeds. CTA: Magnetic button. | **This section earns the first impression.** The hero created intrigue; this section delivers substance. The SplitText animation is not decorative — it paces the reading experience, forcing the visitor to _receive_ the message rather than scan it. The parallax grid shows three images (gym, hotel, villa) to introduce the ecosystem concept without explaining it. The visitor understands "this is more than a hotel" before reading a single explanation. The magnetic CTA button creates a moment of physical engagement — the cursor is drawn toward the action. It must feel inevitable, not aggressive. | `SplitText`, `ScrollReveal`, `AnimatedContent`, `Magnet` (Reactbits) |
| **The System**        | Visual map of the three sub-brands with their primary colours and one-line positioning.                                                                     | Cards animate in on scroll. Hover reveals a secondary line.                                                                                    | **The visitor needs to understand the ecosystem in three seconds.** Three cards. Three colours. Three names. This is the mental model. Without this section, the visitor explores sub-brand pages without understanding how they relate. The cards are not links to "our services" — they are a map of a world. The hover reveal gives depth without requiring a click, rewarding curiosity.                                                                                                                                                                                                                          | `AnimatedContent` per card.                                          |
| **Philosophy Teaser** | A single, powerful statement from the founding philosophy. Link to `/philosophy`.                                                                           | ScrollReveal on the statement. Minimal, lots of negative space.                                                                                | **This section qualifies the visitor.** A design-literate, philosophically aligned guest reads this statement and thinks "they get it." An unaligned visitor skips it. Both outcomes are correct. The negative space around this section is intentional — it gives the statement weight. A page packed with content makes everything feel disposable. One statement surrounded by breathing room feels considered.                                                                                                                                                                                                    | `ScrollReveal`                                                       |
| **Pre-book CTA**      | Full-width band. "The threshold is yours. Enter when ready." Button: "Pre-book".                                                                            | Magnetic button. Background subtle texture shift on scroll.                                                                                    | **The page must end with a clear next step — but not a hard sell.** "The threshold is yours. Enter when ready." respects the visitor's agency. It does not create urgency ("Limited availability!"), it does not discount ("Early bird pricing!"), it does not pressure ("Don't miss out!"). The right guest reads this and feels _invited_. The wrong guest reads this and feels no urgency — which is exactly the filter we want.                                                                                                                                                                                   | `Magnet`                                                             |

**SEO considerations for Home:**

- `<title>`: "Sanctum Lombok — Architecture. Movement. Ritual."
- `<meta description>`: "A sovereign wellness ecosystem in Lombok. Performance gym, architecturally led accommodation, and considered restoration — for guests who take their bodies and environments seriously."
- H1: "The Sanctuary of Movement." (single, clear)
- Structured data: `Organization`, `LocalBusiness`, `WebSite` schema.

### 4.2 Philosophy

**Purpose:** The intellectual foundation. This page does the heavy lifting for E-E-A-T and branded search authority.

**Why this page exists instead of an "About Us":** "About Us" is a corporate convention — a page where companies describe themselves in third person. Sanctum does not need to describe itself. It needs to _demonstrate its thinking_. The Philosophy page is where the founding team's depth, expertise, and original perspective are made visible. For Google's quality raters, this is E-E-A-T in its purest form: genuine expertise, demonstrated through original thought, not claimed through credentials. For the visitor, this page answers the question: "Do these people actually believe what they say, or is this just branding?" If the content is real, the right guest feels it immediately.

| Section                     | Content                                                                                                            | Interaction                                                  |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| **Founding Principles**     | 3–4 principles, each with a heading and 2–3 paragraphs. Topics: Sovereignty, Ritual, Material Language, Longevity. | ScrollReveal per section. Alternating text-and-image layout. |
| **Architecture & Material** | The texture palette. Concrete, stone, brass, copper. Why these materials. What they represent.                     | Parallax imagery of material details.                        |
| **Movement Philosophy**     | Performance as daily practice. Discipline without dogma. The body as architecture.                                 | Pull quotes with SplitText reveal.                           |
| **Ritual & Restoration**    | Recovery as ritual, not indulgence. The daily practice framework.                                                  | Minimal, text-heavy. Earn the reader's time.                 |

**SEO considerations:**

- Target: "architectural wellness philosophy", "wellness as ritual", "brutalist hotel design philosophy".
- Long-form (2,000–3,000 words). Genuine depth, not padded length.
- Internal links to sub-brand pages and journal articles.

### 4.3 Lifestyle Club

**Purpose:** The performance and wellness arm. Memberships, programmes, and the gym experience.

**Why a dedicated page, not a section on the homepage:** The Lifestyle Club is a standalone revenue stream with its own audience segment (local members, short-stay guests, programme participants). A dedicated page allows: (1) targeted SEO for terms like "performance gym Lombok" — impossible if buried in a homepage section; (2) its own colour palette (Deep Tropical #1F221B), signalling sub-brand identity; (3) a conversion flow specific to membership enquiry, distinct from the hotel booking or co-living application flows. The visitor who arrives looking for a gym should find a gym page — not a hotel page with a gym section buried at the bottom.

| Section                | Content                                                                                                                                           | Interaction                                                                                |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **Overview**           | Positioning statement. "Not a gym. A sovereign training environment."                                                                             | SplitText heading.                                                                         |
| **Spaces**             | Gym, Movement Studio, Recovery — each with imagery, short description, and key details.                                                           | 3-column grid with parallax. Sub-brand palette (Deep Tropical #1F221B, Dark Teal #284B3F). |
| **Programmes**         | Ritual-based training programmes. Named, described, positioned as ongoing practices rather than quick fixes.                                      | Accordion or expandable cards.                                                             |
| **Membership Enquiry** | Simple form. Name, email, brief note on what they are looking for. No pricing on-page — this is intentional (exclusivity and conversation-first). | Magnetic CTA. Form styled consistently with brand.                                         |

**SEO considerations:**

- Target: "performance gym Lombok", "longevity training programme", "architecturally designed gym".
- Structured data: `SportsActivityLocation`, `Offer`.

### 4.4 Enclave

**Purpose:** Premium accommodation. The architectural living experience.

**Why this page matters for SEO and conversion:** Accommodation is the highest-revenue, highest-intent sub-brand. Someone searching "boutique hotel Lombok" or "design hotel Indonesia" is ready to spend. This page must serve that intent directly — gallery-forward, atmosphere-rich, with enough detail to justify a premium rate without showing a number. The visual treatment must communicate that this is not a hotel room, it is a designed space. The enquiry form at the bottom must feel like the natural conclusion of a visual argument, not a form shoved onto a page.

| Section                 | Content                                                                 | Interaction                                                      |
| ----------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------- |
| **Overview**            | "Spaces that breathe with the ocean." Positioning.                      | Sub-brand palette (Deep Ocean #001321, Oxidized Copper #376A65). |
| **Accommodation Types** | Villa, Suite, Room — each with gallery, description, capacity.          | Horizontal scroll gallery per type, or lightbox.                 |
| **Gallery**             | Full-width cinematic imagery. Art-directed.                             | Masonry or editorial grid. Lazy-loaded.                          |
| **Booking Enquiry**     | Dates, guest count, preferences. Still an enquiry, not instant booking. | Clean form.                                                      |

**SEO considerations:**

- Target: "boutique hotel Lombok", "architectural villa Lombok", "design hotel Indonesia".
- Structured data: `LodgingBusiness`, `Hotel`, `Accommodation`.

### 4.5 Collectiv

**Purpose:** Co-living community. Longer stays, creative residencies.

**Why this page has an application form, not an enquiry form:** Collectiv is the most curated sub-brand. Unlike the Lifestyle Club (open to members) or Enclave (open to guests), Collectiv is a community — who is in it matters. The application form introduces intentional friction: "Tell us about yourself, what you do, what draws you to Sanctum." This friction is not a UX mistake. It is a brand signal: "not everyone is admitted, which means the people who are admitted are worth being around." This self-selection is the product. The application is part of the experience.

| Section             | Content                                                                | Interaction                                          |
| ------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------- |
| **Overview**        | "A community, not a commune." Positioning.                             | Sub-brand palette (Dark Wine #2A0008, Plum #4B000D). |
| **Residency Model** | Duration, what is included, who it is for.                             | Timeline or phased layout.                           |
| **Community**       | Profiles (anonymised or silhouetted) of the type of resident. Quotes.  | ScrollReveal.                                        |
| **Application**     | Brief application form — filters for alignment, not just availability. | Intentional friction.                                |

### 4.6 Journal

**Purpose:** The SEO content engine, editorial voice, and the most strategically important page on the site (see BRD section 6.6 for full reasoning).

**Why this page exists — and why it is not optional:** Without the Journal, the website is invisible to Google. Design does not rank. Animations do not rank. Content ranks. The Journal is how prospects _find_ Sanctum — through searches like "longevity training retreat," "architectural wellness," "wellness as ritual." Every article is designed to capture a specific search intent, deliver genuine value, and guide the reader toward the sub-brand pages. This is the SEO moat. Everything else is the castle.

| Section        | Content                                                                                                                                                                                  | Interaction                                                                                                                                                                                                                                  |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Index**      | Grid of articles. Featured article at top (manually selected, not just most recent). Category filters (tabs, not dropdowns). Article count per category visible.                         | Animated card grid with `AnimatedContent`. Paginated (not infinite scroll — infinite scroll hurts SEO because Google cannot crawl pages that require JavaScript interaction to load).                                                        |
| **Article**    | Long-form editorial. 1,200–3,000 words. Author byline with credentials. Publication date. Estimated reading time. Related articles (3, manually curated or algorithmically by category). | Reading-optimised typography: `max-w-2xl` for body, `text-lg`, generous line height (`leading-relaxed`). Progress indicator (subtle bar at top of viewport). Table of contents for articles > 2,000 words (anchor links, sticky on desktop). |
| **Categories** | Four distinct content pillars (see below). Each category has its own index view.                                                                                                         | Category pages are their own URLs (`/journal/architecture`, `/journal/movement`, etc.) for SEO — each category page targets its own keyword cluster.                                                                                         |

**Content Management — Headless CMS (Phase 3):**

The Journal must be manageable by non-developers. The founding team, the SEO partner's content writers, and guest contributors need to create, edit, preview, and publish articles without touching code. This requires a headless CMS.

| CMS Requirement              | Reasoning                                                                                                                                                                                                                                 |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Rich text editor**         | Authors need formatting (headings, bold, links, block quotes, image embeds) without writing Markdown or HTML.                                                                                                                             |
| **Image management**         | Upload, crop, alt text, and automatic optimisation. Images should be served via the CMS CDN or synced to our image pipeline.                                                                                                              |
| **Draft / Published states** | Content must be reviewable before it goes live. No "publish by accident."                                                                                                                                                                 |
| **Scheduling**               | Articles can be scheduled for future publication. Consistent publishing cadence is critical for SEO.                                                                                                                                      |
| **SEO fields per article**   | Custom meta title, meta description, Open Graph image, canonical URL. These cannot be auto-generated — they must be deliberately written for each article.                                                                                |
| **Author profiles**          | Name, credential, photo, bio. Required for E-E-A-T signals. Google values identifiable human authorship.                                                                                                                                  |
| **Category / Tag taxonomy**  | Articles are assigned to one primary category (Architecture, Movement, Ritual, Perspective) and optionally tagged with cross-cutting themes.                                                                                              |
| **API delivery**             | The CMS provides a content API (REST or GraphQL) that Next.js consumes at build time (ISR — Incremental Static Regeneration) or on-demand. No runtime CMS dependency. If the CMS goes down, the site still serves the last-built version. |

**CMS candidates (to be evaluated in Phase 3):**

| CMS             | Consideration                                                                                                                       |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Sanity**      | Flexible schema, real-time collaboration, generous free tier. GROQ query language is powerful. Hosted, no infrastructure to manage. |
| **Payload CMS** | Self-hosted, open source, TypeScript-native. Full control. Requires own hosting but zero vendor lock-in.                            |
| **Contentful**  | Enterprise-grade, proven at scale. Higher cost. May be overbuilt for current needs.                                                 |

**The decision is deferred to Phase 3 deliberately** (see BRD section 6.7). During Phase 1–2, the Journal index and article template are built with static content (hardcoded articles). This lets us validate the design, reading experience, and internal linking patterns before committing to a CMS. Building the CMS integration before understanding the real content workflow leads to the wrong abstraction.

**Content workflow (once CMS is live):**

```
Author writes article in CMS
    ↓
Draft saved → Preview link generated (Next.js draft mode)
    ↓
Editor reviews → Approves or requests changes
    ↓
Published → Webhook triggers Next.js ISR rebuild
    ↓
Article is live at /journal/[slug] within ~60s
    ↓
Structured data (Article schema) auto-generated
Open Graph image auto-generated or manually selected
Internal links to sub-brand pages included in article body
```

**SEO considerations:**

- Each article targets a specific cluster of long-tail keywords.
- Internal linking strategy: every article links to at least one sub-brand page and one other article.
- Structured data: `Article`, `BlogPosting`, `Person` (author).
- Open Graph and Twitter Card metadata for social sharing.
- Each article has a unique canonical URL — no duplicate content issues.
- Category index pages (`/journal/architecture`, etc.) have their own meta tags and target category-level keywords.

**Content pillars map to SEO clusters:**

| Pillar                  | Example Articles                          | Target Keywords                                                               | Why This Pillar                                                                                                                                                                             |
| ----------------------- | ----------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Architecture & Space    | "Why Concrete Breathes Better Than Glass" | architectural wellness, brutalist hotel design, concrete architecture tropics | Differentiates Sanctum from every "luxury wellness" brand that leads with amenity lists. Positions the brand in the architecture conversation, not the hospitality conversation.            |
| Movement & Performance  | "The Case for Training as Daily Ritual"   | longevity training, movement practice, strength ritual                        | Establishes credibility in discipline-driven training without sounding like a fitness brand. Targets the longevity audience, which is growing rapidly and underserved with quality content. |
| Ritual & Restoration    | "Recovery Is Not Rest: A Framework"       | wellness ritual, intentional recovery, daily restoration practice             | Reframes recovery from "spa day" to "daily practice." This distinction is the philosophical core of the Lifestyle Club and the Enclave evening programming.                                 |
| The Sanctum Perspective | "Building a Sovereign Environment"        | Sanctum Lombok, sovereign wellness, branded search                            | Direct brand-building. Establishes the founding team's voice and depth. These articles earn backlinks from architecture and design publications — high-authority domains.                   |

### 4.7 Pre-book

**Purpose:** The conversion point. Simple, considered, respectful.

| Field               | Type                                                | Required | Reasoning                                                                                  |
| ------------------- | --------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------ |
| Name                | Text                                                | Yes      | —                                                                                          |
| Email               | Email                                               | Yes      | —                                                                                          |
| Interest            | Select (Lifestyle Club / Enclave / Collectiv / All) | Yes      | Routes the enquiry.                                                                        |
| Dates (approximate) | Date range                                          | No       | Not mandatory — some guests are exploring, not planning.                                   |
| A note              | Textarea                                            | No       | Free-form. Allows the guest to express what they are looking for. Signals quality of lead. |

No pricing. No urgency language. No countdown timers. The form ends with: _"We will respond within 48 hours."_

---

## 5. Design System Requirements

### 5.1 Design Philosophy

The design system mirrors the physical brand system: **modular components, negative space, and material warmth.**

Just as the physical identity uses the wordmark, icon, and secondary typography as "separate, modular components" that "harness negative space to create a curated, art gallery feel" — the digital design system treats each component as a discrete, self-contained element that breathes within generous whitespace.

### 5.2 Colour System

The colour system is implemented via Tailwind v4 CSS custom properties, allowing sub-brand theming without code duplication.

**Sanctum (Mother Brand — Default)**

| Token                | Value     | Usage                              |
| -------------------- | --------- | ---------------------------------- |
| `--color-bg`         | `#121212` | Primary background                 |
| `--color-text`       | `#F5F5F0` | Primary text                       |
| `--color-text-muted` | `#A3A39E` | Secondary text                     |
| `--color-accent`     | `#C9A96E` | CTAs, highlights (copper-adjacent) |
| `--color-surface`    | `#1A1A1A` | Card backgrounds, elevation        |
| `--color-border`     | `#2A2A2A` | Subtle borders                     |

**Lifestyle Club Palette Override**

| Token               | Value     | Usage                      |
| ------------------- | --------- | -------------------------- |
| `--color-primary`   | `#1F221B` | Deep Tropical              |
| `--color-secondary` | `#284B3F` | Dark Teal                  |
| `--color-accent`    | `#AC9877` | Sand                       |
| `--color-concrete`  | `#A39C92` | Continuous — Concrete Grey |
| `--color-copper`    | `#B76649` | Continuous — Copper        |

**Enclave Palette Override**

| Token               | Value     | Usage                      |
| ------------------- | --------- | -------------------------- |
| `--color-primary`   | `#001321` | Deep Ocean                 |
| `--color-secondary` | `#376A65` | Oxidized Copper            |
| `--color-accent`    | `#D4C2AE` | Stone                      |
| `--color-concrete`  | `#A39C92` | Continuous — Concrete Grey |
| `--color-copper`    | `#B76649` | Continuous — Copper        |

**Collectiv Palette Override**

| Token               | Value     | Usage                      |
| ------------------- | --------- | -------------------------- |
| `--color-primary`   | `#2A0008` | Dark Wine                  |
| `--color-secondary` | `#4B000D` | Plum                       |
| `--color-accent`    | `#C4B9AA` | Superlight Grey            |
| `--color-concrete`  | `#A39C92` | Continuous — Concrete Grey |
| `--color-copper`    | `#B76649` | Continuous — Copper        |

**Continuous elements across all sub-brands:** Concrete Grey (`#A39C92`) and Copper (`#B76649`) appear in every palette. This is the digital equivalent of the physical brand's brass hardware and concrete surfaces — the unifying material thread.

### 5.3 Typography System

**Physical brand fonts → Digital equivalents:**

| Physical                           | Digital                                   | Reasoning                                                                                                          |
| ---------------------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Neue Kaine Semibold (titles)       | Cormorant Garamond Light                  | Closest available web font that achieves the same punchy-yet-refined monumental feeling. Serif with high contrast. |
| ABC Diatype Semi-Mono (subheaders) | Outfit Light (tracking-widest, uppercase) | Geometric sans with mono-adjacent feel when spaced. Clean, functional, modern.                                     |
| ABC Diatype (body)                 | Outfit Light                              | Consistent body-to-subheader relationship.                                                                         |

| Level            | Font               | Size (Desktop)           | Size (Mobile)            | Weight      | Tracking           | Style     |
| ---------------- | ------------------ | ------------------------ | ------------------------ | ----------- | ------------------ | --------- |
| H1               | Cormorant Garamond | `text-7xl` to `text-8xl` | `text-4xl` to `text-5xl` | 300 (Light) | `tracking-tighter` | —         |
| H2               | Cormorant Garamond | `text-5xl` to `text-6xl` | `text-3xl` to `text-4xl` | 300         | `tracking-tighter` | —         |
| H3               | Cormorant Garamond | `text-3xl` to `text-4xl` | `text-2xl`               | 400         | `tracking-tight`   | —         |
| Subtitle / Label | Outfit             | `text-xs` to `text-sm`   | `text-xs`                | 300         | `tracking-[0.3em]` | Uppercase |
| Body             | Outfit             | `text-base` to `text-lg` | `text-base`              | 300         | Normal             | —         |
| Body Small       | Outfit             | `text-sm`                | `text-sm`                | 300         | Normal             | —         |

### 5.4 Spacing & Negative Space

The brand brief explicitly calls for "art gallery feel" and "let things breathe." This translates to:

- **Section padding:** Minimum `py-20 md:py-28` between sections. More is better than less.
- **Content max-width:** `max-w-2xl` for body text (prose). `max-w-6xl` for grids. Never full-bleed text.
- **Component margins:** Components within a section have `space-y-12 md:space-y-16` minimum.
- **The 60% rule:** On any given viewport, at least 60% of the visible area should be negative space (background). This is the digital equivalent of the gallery wall.

### 5.5 Image & Media Requirements

| Attribute        | Requirement                                                                                                                                                              | Reasoning                                             |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------- |
| Aspect ratios    | 3:4 (portrait), 16:9 (landscape), 1:1 (square) — no other ratios                                                                                                         | Consistency. These three ratios create visual rhythm. |
| Colour treatment | Warm, desaturated. No heavy filters. Match the "warm directional light" art direction.                                                                                   | Brand alignment.                                      |
| Loading          | Lazy-loaded via `next/image`. Above-fold images use `priority`.                                                                                                          | Performance (Core Web Vitals).                        |
| Alt text         | Descriptive, brand-voiced. Not "image of gym" but "Interior of the Sanctum performance space. Raw concrete walls frame a single barbell rack in warm directional light." | SEO and accessibility.                                |
| Placeholder      | Blurhash or dominant-colour placeholder while loading.                                                                                                                   | Perceived performance and visual continuity.          |

### 5.6 Animation & Interaction Philosophy

**Core principle:** Animations must feel like the environment is responding to the user's presence — not performing for them.

| Pattern                        | When to use                                    | Implementation                                       | Reactbits Component        |
| ------------------------------ | ---------------------------------------------- | ---------------------------------------------------- | -------------------------- |
| Word-by-word reveal with blur  | Primary headings, first encounter              | GSAP SplitText with stagger, `filter: blur()`        | `SplitText`                |
| Scroll-scrubbed blur + opacity | Body text, secondary text, philosophy sections | GSAP ScrollTrigger with scrub                        | `ScrollReveal`             |
| Parallax                       | Image grids, background layers                 | GSAP ScrollTrigger with varying `data-speed`         | Custom + `AnimatedContent` |
| Magnetic hover                 | Primary CTAs                                   | Cursor proximity detection                           | `Magnet`                   |
| Fade-up on scroll              | Cards, content blocks, secondary elements      | GSAP ScrollTrigger, `once: true`                     | `AnimatedContent`          |
| Subtle scale on hover          | Images, cards                                  | CSS `transition-transform` + `group-hover:scale-105` | Native Tailwind            |

**What we do not do:**

- No page transitions or route animations (they delay content access).
- No loading spinners or skeleton screens where avoidable (the content should be fast enough to not need them).
- No confetti, particle effects, or novelty animations.
- No animation on mobile that depends on hover state.
- No animation that replays on re-scroll — `once: true` everywhere.

---

## 6. Technical SEO Requirements

### 6.1 Semantic HTML

| Element             | Requirement                                     |
| ------------------- | ----------------------------------------------- |
| One `<h1>` per page | Mandatory. Clear hierarchy.                     |
| Heading hierarchy   | H1 → H2 → H3. No skipping levels.               |
| `<main>`            | Single `<main>` element wrapping page content.  |
| `<article>`         | Used for journal posts.                         |
| `<section>`         | Used with `aria-label` for major page sections. |
| `<nav>`             | Labelled with `aria-label="Main navigation"`.   |

### 6.2 Structured Data (JSON-LD)

| Schema                    | Where                   | Fields                                    |
| ------------------------- | ----------------------- | ----------------------------------------- |
| `Organization`            | All pages (in `<head>`) | name, url, logo, sameAs (social links)    |
| `WebSite`                 | Home page               | name, url, potentialAction (SearchAction) |
| `LocalBusiness`           | Home, Lifestyle Club    | name, address, geo, openingHours          |
| `LodgingBusiness`         | Enclave                 | name, address, priceRange, starRating     |
| `Article` / `BlogPosting` | Journal articles        | headline, author, datePublished, image    |
| `BreadcrumbList`          | All sub-pages           | itemListElement                           |
| `FAQPage`                 | Where applicable        | mainEntity                                |

### 6.3 Meta Tags

| Tag                         | Requirement                                                                                  |
| --------------------------- | -------------------------------------------------------------------------------------------- |
| `<title>`                   | Max 60 characters. Brand name at end: "Page Title — Sanctum Lombok".                         |
| `<meta name="description">` | Max 155 characters. Compelling, brand-voiced. No hype.                                       |
| `<meta name="robots">`      | `index, follow` for public pages. `noindex` for pre-book thank-you page.                     |
| Open Graph                  | `og:title`, `og:description`, `og:image` (1200x630px), `og:type`.                            |
| Twitter Card                | `twitter:card=summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image`. |
| Canonical                   | Self-referencing `<link rel="canonical">` on every page.                                     |

### 6.4 Performance Requirements

| Metric                          | Target  | Reasoning                                                                     |
| ------------------------------- | ------- | ----------------------------------------------------------------------------- |
| Largest Contentful Paint (LCP)  | < 2.5s  | Google ranking factor. Also: slow sites signal carelessness to this audience. |
| Cumulative Layout Shift (CLS)   | < 0.1   | Layout shifts break the "calm" feeling. Dimensions must be declared.          |
| Interaction to Next Paint (INP) | < 200ms | Interactions must feel immediate.                                             |
| Total blocking time             | < 200ms | GSAP must not block the main thread during initial render.                    |

### 6.5 Accessibility

The target audience includes globally mobile, high-net-worth individuals. Some of them have visual or motor impairments. Accessibility is not a compliance checkbox — it is a respect signal.

| Requirement            | Standard                                                                                            |
| ---------------------- | --------------------------------------------------------------------------------------------------- |
| WCAG 2.1 AA compliance | Minimum.                                                                                            |
| Colour contrast        | All text meets 4.5:1 ratio against background. (Our dark-on-light palette naturally achieves this.) |
| Keyboard navigation    | All interactive elements reachable and operable. Focus states visible.                              |
| Screen reader support  | Semantic HTML, ARIA labels, meaningful alt text.                                                    |
| Reduced motion         | `prefers-reduced-motion: reduce` disables all GSAP animations, parallax, and blur effects.          |

---

## 7. User Flows

### 7.1 Primary Flow: Curious → Convinced → Pre-book

```
Visit 1 (High-intent search or referral)
│
├── Land on Home
│   ├── Scroll through Section Reveal → Sees the vision
│   ├── Clicks sub-brand card → Explores Lifestyle Club / Enclave / Collectiv
│   └── May not convert. Leaves.
│
Visit 2 (Returns via branded search or bookmark)
│
├── Goes directly to sub-brand page OR /philosophy
│   ├── Reads in depth
│   ├── Spends 3–5 minutes
│   └── May click Journal article
│
Visit 3 (Ready)
│
├── Goes to /pre-book
│   ├── Fills enquiry form
│   └── Receives confirmation: "We will respond within 48 hours."
```

**Reasoning:** This audience does not convert on first visit. The site must earn revisitation. That is why session duration and returning visitor rate are key metrics (see BRD section 6).

### 7.2 SEO Discovery Flow

```
Google search: "longevity training retreat Lombok"
│
├── Lands on Journal article: "The Case for Training as Daily Ritual"
│   ├── Reads article (2,000 words, 4–6 min read time)
│   ├── Discovers internal link to /lifestyle-club
│   ├── Explores Lifestyle Club page
│   └── Returns later for deeper reading or pre-book
```

---

## 8. Content Requirements Summary

### 8.1 Tone of Voice (Digital Application)

The brand voice document is clear: _Calm. Measured. Precise. No exclamation points. No wellness clichés. No corporate enthusiasm._

Digital-specific applications:

| Element        | Do                                                                | Do Not                                        |
| -------------- | ----------------------------------------------------------------- | --------------------------------------------- |
| Button labels  | "Pre-book" / "Enquire" / "Enter"                                  | "Book Now!" / "Sign Up" / "Get Started"       |
| Error messages | "Something did not connect. Please try again."                    | "Oops! Something went wrong."                 |
| Empty states   | "Nothing here yet."                                               | "No results found :("                         |
| Loading        | No text. Subtle animation or none.                                | "Loading..." / spinners with text             |
| 404 page       | "This space does not exist — but the sanctuary does." + link home | "Page Not Found"                              |
| Form labels    | "Your name" / "How to reach you" / "What draws you to Sanctum"    | "Full Name*" / "Email Address*" / "Message\*" |

### 8.2 Microcopy & Navigation

| Element               | Copy                                                                       |
| --------------------- | -------------------------------------------------------------------------- |
| Navigation items      | Sanctum, Lifestyle Club, Enclave, Collectiv, Philosophy, Journal, Pre-book |
| Footer tagline        | "Architecture. Movement. Ritual."                                          |
| Pre-book page heading | "The threshold is yours."                                                  |
| Pre-book subheading   | "Tell us what you are looking for. We will respond within 48 hours."       |

---

## 9. Phased Delivery

### Phase 1 — Foundation (Current)

- Home page with Section Reveal component (done).
- Design system: colours, typography, animation patterns established.
- Tailwind v4 CSS-variable theming.
- Core Reactbits components ported and working.

### Phase 2 — Core Pages

- Philosophy page.
- Lifestyle Club page.
- Enclave page.
- Collectiv page.
- Pre-book form.
- Navigation and footer.

### Phase 3 — Content Engine

- Journal index and article template.
- SEO metadata framework (structured data, Open Graph, canonical).
- Sitemap and robots.txt.
- First 5 journal articles (targeting primary keyword clusters).

### Phase 4 — Polish & Launch

- Real photography integration.
- Performance optimisation (image formats, code splitting, caching).
- Accessibility audit.
- Analytics and conversion tracking setup.
- Launch.

---

## 10. Appendix: Component Inventory

| Component           | Source                        | Dependencies                 | Used In                                        |
| ------------------- | ----------------------------- | ---------------------------- | ---------------------------------------------- |
| `SplitText`         | Reactbits (GSAP-free port)    | `gsap`, `gsap/ScrollTrigger` | Home (heading), Philosophy, Sub-brand pages    |
| `ScrollReveal`      | Reactbits (direct port)       | `gsap`, `gsap/ScrollTrigger` | Home (body text), Philosophy, Journal articles |
| `Magnet`            | Reactbits (direct port)       | None                         | Home (CTA), all pre-book CTAs                  |
| `AnimatedContent`   | Reactbits (direct port)       | `gsap`, `gsap/ScrollTrigger` | Image grids, card grids, content blocks        |
| `ParallaxImageGrid` | Custom (uses AnimatedContent) | `gsap`, `next/image`         | Home, Lifestyle Club, Enclave                  |
| `SectionReveal`     | Custom (composes all above)   | All above                    | Home                                           |

---

_This document is a living specification. It will evolve as we build, test, and learn — but the philosophy does not change. The philosophy is the foundation._
