"use client";

import { useState, useCallback } from "react";
import SplitText from "@/components/reactbits/SplitText";
import AnimatedContent from "@/components/reactbits/AnimatedContent";

/* ─── Step 1: Interest selector ─── */
const interests = [
  {
    value: "lifestyle-club",
    label: "Training & Recovery",
    sub: "Lifestyle Club",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    value: "enclave",
    label: "Accommodation",
    sub: "Enclave",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    value: "collectiv",
    label: "Residency",
    sub: "Collectiv",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    value: "general",
    label: "Just Curious",
    sub: "General Enquiry",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
];

/* ─── Step 2: Duration choices ─── */
const durations = [
  { value: "weekend", label: "A Few Days", detail: "3–5 nights" },
  { value: "week", label: "One Week", detail: "The minimum reset" },
  { value: "extended", label: "2–4 Weeks", detail: "Deep immersion" },
  { value: "residency", label: "1–3 Months", detail: "Collectiv residency" },
  { value: "flexible", label: "Flexible", detail: "Not sure yet" },
];

const inputCls =
  "w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3.5 font-[family-name:var(--font-body)] text-sm font-light text-[var(--color-text)] outline-none transition-colors duration-300 placeholder:text-[var(--color-text-muted)]/40 focus:border-[var(--color-accent)]/60";

const labelCls =
  "mb-2 block font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]";

export default function PreBookContent() {
  const [step, setStep] = useState(1);
  const [interest, setInterest] = useState("");
  const [duration, setDuration] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const next = useCallback(() => setStep((s) => Math.min(s + 1, 4)), []);
  const prev = useCallback(() => setStep((s) => Math.max(s - 1, 1)), []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Phase 1: no backend — show confirmation. Google Sheet integration later.
    setSubmitted(true);
    setStep(4);
  }

  return (
    <div className="bg-[var(--color-bg)]">
      {/* Hero */}
      <section className="flex min-h-[40vh] flex-col items-center justify-center px-6 pt-32 pb-8 md:pt-44 md:pb-16">
        <SplitText
          tag="h1"
          text="The threshold is yours."
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
        <p className="mt-4 font-[family-name:var(--font-body)] text-sm md:text-base font-light text-[var(--color-text-muted)] text-center max-w-md">
          No booking engine. No urgency. Three quick steps to start a conversation.
        </p>
      </section>

      {/* Progress bar */}
      {!submitted && (
        <div className="mx-auto max-w-xl px-6 pb-10">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-3 flex-1">
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-[family-name:var(--font-body)] text-xs font-light transition-all duration-500 ${
                    step >= s
                      ? "bg-[var(--color-accent)] text-[var(--color-bg)]"
                      : "border border-[var(--color-border)] text-[var(--color-text-muted)]"
                  }`}
                >
                  {step > s ? (
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  ) : (
                    s
                  )}
                </div>
                {s < 3 && (
                  <div className="flex-1 h-px bg-[var(--color-border)]">
                    <div
                      className="h-full bg-[var(--color-accent)] transition-all duration-700 ease-out"
                      style={{ width: step > s ? "100%" : "0%" }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-3 flex justify-between">
            <span className="font-[family-name:var(--font-body)] text-[10px] uppercase tracking-[0.15em] text-[var(--color-text-muted)]">Interest</span>
            <span className="font-[family-name:var(--font-body)] text-[10px] uppercase tracking-[0.15em] text-[var(--color-text-muted)]">Duration</span>
            <span className="font-[family-name:var(--font-body)] text-[10px] uppercase tracking-[0.15em] text-[var(--color-text-muted)]">Details</span>
          </div>
        </div>
      )}

      {/* Wizard steps */}
      <section aria-label="Pre-book wizard" className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-xl">
          {/* ─── Step 1: Interest ─── */}
          {step === 1 && (
            <AnimatedContent distance={20} duration={0.5} key="step1">
              <div>
                <h2 className="mb-2 font-[family-name:var(--font-heading)] text-2xl md:text-3xl tracking-tight font-light text-[var(--color-text)]">
                  What brings you here?
                </h2>
                <p className="mb-8 font-[family-name:var(--font-body)] text-sm font-light text-[var(--color-text-muted)]">
                  Select what interests you most.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {interests.map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => {
                        setInterest(item.value);
                        next();
                      }}
                      className={`group flex flex-col items-start gap-3 rounded-2xl border p-6 text-left transition-all duration-300 hover:border-[var(--color-accent)]/60 hover:bg-[var(--color-accent)]/5 ${
                        interest === item.value
                          ? "border-[var(--color-accent)]/60 bg-[var(--color-accent)]/5"
                          : "border-[var(--color-border)] bg-[var(--color-surface)]"
                      }`}
                    >
                      <div className="text-[var(--color-accent)] transition-transform duration-300 group-hover:scale-110">
                        {item.icon}
                      </div>
                      <div>
                        <span className="block font-[family-name:var(--font-heading)] text-lg tracking-tight font-light text-[var(--color-text)]">
                          {item.label}
                        </span>
                        <span className="font-[family-name:var(--font-body)] text-xs font-light text-[var(--color-text-muted)]">
                          {item.sub}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </AnimatedContent>
          )}

          {/* ─── Step 2: Duration ─── */}
          {step === 2 && (
            <AnimatedContent distance={20} duration={0.5} key="step2">
              <div>
                <h2 className="mb-2 font-[family-name:var(--font-heading)] text-2xl md:text-3xl tracking-tight font-light text-[var(--color-text)]">
                  How long are you thinking?
                </h2>
                <p className="mb-8 font-[family-name:var(--font-body)] text-sm font-light text-[var(--color-text-muted)]">
                  Pick whichever feels right — this isn&apos;t a commitment.
                </p>
                <div className="flex flex-col gap-3">
                  {durations.map((d) => (
                    <button
                      key={d.value}
                      type="button"
                      onClick={() => {
                        setDuration(d.value);
                        next();
                      }}
                      className={`group flex items-center justify-between rounded-2xl border px-6 py-5 text-left transition-all duration-300 hover:border-[var(--color-accent)]/60 hover:bg-[var(--color-accent)]/5 ${
                        duration === d.value
                          ? "border-[var(--color-accent)]/60 bg-[var(--color-accent)]/5"
                          : "border-[var(--color-border)] bg-[var(--color-surface)]"
                      }`}
                    >
                      <div>
                        <span className="block font-[family-name:var(--font-heading)] text-lg tracking-tight font-light text-[var(--color-text)]">
                          {d.label}
                        </span>
                        <span className="font-[family-name:var(--font-body)] text-xs font-light text-[var(--color-text-muted)]">
                          {d.detail}
                        </span>
                      </div>
                      <svg className="h-4 w-4 text-[var(--color-text-muted)] transition-all duration-300 group-hover:text-[var(--color-accent)] group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={prev}
                  className="mt-6 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] transition-colors duration-300 hover:text-[var(--color-accent)]"
                >
                  ← Back
                </button>
              </div>
            </AnimatedContent>
          )}

          {/* ─── Step 3: Details ─── */}
          {step === 3 && (
            <AnimatedContent distance={20} duration={0.5} key="step3">
              <form onSubmit={handleSubmit}>
                <h2 className="mb-2 font-[family-name:var(--font-heading)] text-2xl md:text-3xl tracking-tight font-light text-[var(--color-text)]">
                  Tell us about you.
                </h2>
                <p className="mb-8 font-[family-name:var(--font-body)] text-sm font-light text-[var(--color-text-muted)]">
                  We read every enquiry personally.
                </p>

                <div className="space-y-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-10">
                  <div>
                    <label htmlFor="name" className={labelCls}>Name</label>
                    <input id="name" name="name" type="text" required autoComplete="name" className={inputCls} placeholder="Your full name" />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelCls}>Email</label>
                    <input id="email" name="email" type="email" required autoComplete="email" className={inputCls} placeholder="you@example.com" />
                  </div>
                  <div>
                    <label htmlFor="note" className={labelCls}>A note</label>
                    <textarea id="note" name="note" rows={3} className={`${inputCls} resize-none`} placeholder="Training goals, dates, questions — anything relevant." />
                  </div>

                  {/* Hidden fields for wizard data */}
                  <input type="hidden" name="interest" value={interest} />
                  <input type="hidden" name="duration" value={duration} />

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[var(--color-accent)] py-4 font-[family-name:var(--font-body)] text-sm uppercase tracking-widest font-light text-[var(--color-bg)] transition-colors duration-300 hover:bg-[var(--color-accent-hover)]"
                  >
                    Send Enquiry
                  </button>
                </div>

                <button
                  type="button"
                  onClick={prev}
                  className="mt-6 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] transition-colors duration-300 hover:text-[var(--color-accent)]"
                >
                  ← Back
                </button>
              </form>
            </AnimatedContent>
          )}

          {/* ─── Step 4: Confirmation ─── */}
          {step === 4 && submitted && (
            <AnimatedContent distance={20} duration={0.6} key="step4">
              <div className="flex flex-col items-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-10 md:p-14 text-center">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)]/10">
                  <svg className="h-7 w-7 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="mb-3 font-[family-name:var(--font-heading)] text-2xl md:text-3xl tracking-tight font-light text-[var(--color-text)]">
                  Received.
                </h2>
                <p className="font-[family-name:var(--font-body)] text-sm font-light text-[var(--color-text-muted)] leading-relaxed max-w-sm">
                  We read every enquiry personally. If there&apos;s alignment,
                  we&apos;ll be in touch within a few days.
                </p>
                <a
                  href="/"
                  className="mt-8 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] transition-colors duration-300 hover:text-[var(--color-accent-hover)]"
                >
                  Return to Sanctum →
                </a>
              </div>
            </AnimatedContent>
          )}
        </div>
      </section>
    </div>
  );
}
