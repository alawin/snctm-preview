"use client";

import SplitText from "@/components/reactbits/SplitText";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import Image from "next/image";

const articles = [
  {
    slug: "why-concrete",
    title: "Why Concrete",
    category: "Architecture",
    excerpt:
      "The case for raw concrete in tropical wellness design — and why the industry's obsession with render and paint misses the point entirely.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    readTime: "8 min",
  },
  {
    slug: "the-morning-practice",
    title: "The Morning Practice",
    category: "Movement",
    excerpt:
      "A structured morning does not mean a rigid one. How Sanctum's daily rhythm creates the conditions for physical and creative performance.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
    readTime: "6 min",
  },
  {
    slug: "cold-water-protocol",
    title: "Cold Water Protocol",
    category: "Ritual",
    excerpt:
      "Contrast therapy is not a trend. The science, the practice, and the reason Sanctum built cold plunge into the architecture — not the schedule.",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=600&q=80",
    readTime: "10 min",
  },
  {
    slug: "against-dynamic-pricing",
    title: "Against Dynamic Pricing",
    category: "Perspective",
    excerpt:
      "Why we don't list prices online, don't use booking engines, and don't believe that the same room should cost different amounts depending on when you look.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    readTime: "5 min",
  },
  {
    slug: "longevity-training",
    title: "Longevity Is a Training Programme",
    category: "Movement",
    excerpt:
      "The markers that predict physical capability at 70 — grip strength, VO2 max, balance, muscle mass. And how to train for them now.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
    readTime: "12 min",
  },
  {
    slug: "one-domain-strategy",
    title: "One Domain, Many Worlds",
    category: "Perspective",
    excerpt:
      "Why Sanctum runs on a single domain with sub-folder routing — and what the hospitality industry gets wrong about brand architecture.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
    readTime: "7 min",
  },
];

const categories = ["All", "Architecture", "Movement", "Ritual", "Perspective"];

export default function JournalContent() {
  return (
    <div className="bg-[var(--color-bg)]">
      {/* Hero */}
      <section className="flex min-h-[50vh] flex-col items-center justify-center px-6 pt-32 pb-16 md:pt-44 md:pb-24">
        <p className="mb-6 text-xs md:text-sm uppercase tracking-[0.3em] font-[family-name:var(--font-body)] font-light text-[var(--color-text-muted)]">
          Journal
        </p>
        <SplitText
          tag="h1"
          text="Considered writing for considered people."
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

      {/* Category Filters */}
      <section className="px-6 pb-12 md:pb-16">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`rounded-full px-5 py-2 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.2em] font-light transition-all duration-300 ${
                cat === "All"
                  ? "bg-[var(--color-accent)] text-[var(--color-bg)]"
                  : "border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Article */}
      <section aria-label="Featured article" className="px-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <AnimatedContent distance={40} duration={0.8}>
            <article className="group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-0 md:overflow-hidden">
              <div className="relative h-[250px] md:h-[400px] w-full overflow-hidden rounded-2xl md:rounded-none">
                <Image
                  src={articles[0].image}
                  alt={articles[0].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="md:pr-10 md:py-10">
                <div className="mb-3 flex items-center gap-3">
                  <span className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
                    {articles[0].category}
                  </span>
                  <span className="text-[var(--color-border)]">·</span>
                  <span className="font-[family-name:var(--font-body)] text-xs font-light text-[var(--color-text-muted)]">
                    {articles[0].readTime}
                  </span>
                </div>
                <h2 className="mb-4 font-[family-name:var(--font-heading)] text-2xl md:text-3xl lg:text-4xl tracking-tight font-light text-[var(--color-text)] leading-[1.2]">
                  {articles[0].title}
                </h2>
                <p className="font-[family-name:var(--font-body)] text-sm md:text-base font-light text-[var(--color-text-muted)] leading-relaxed">
                  {articles[0].excerpt}
                </p>
                <div className="mt-6">
                  <span className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] group-hover:underline underline-offset-4">
                    Read article →
                  </span>
                </div>
              </div>
            </article>
          </AnimatedContent>
        </div>
      </section>

      {/* Article Grid */}
      <section aria-label="Articles" className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article, index) => (
              <AnimatedContent key={article.slug} distance={30} duration={0.7} delay={index * 0.08}>
                <article className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
                  <div className="relative h-[200px] w-full overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
                        {article.category}
                      </span>
                      <span className="text-[var(--color-border)]">·</span>
                      <span className="font-[family-name:var(--font-body)] text-xs font-light text-[var(--color-text-muted)]">
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="mb-2 font-[family-name:var(--font-heading)] text-lg md:text-xl tracking-tight font-light text-[var(--color-text)] leading-snug">
                      {article.title}
                    </h3>
                    <p className="font-[family-name:var(--font-body)] text-sm font-light text-[var(--color-text-muted)] leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="mt-4">
                      <span className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] group-hover:underline underline-offset-4">
                        Read →
                      </span>
                    </div>
                  </div>
                </article>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
