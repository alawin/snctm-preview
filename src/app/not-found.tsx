import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 bg-[var(--color-bg)]">
      <p className="mb-4 text-xs md:text-sm uppercase tracking-[0.3em] font-[family-name:var(--font-body)] font-light text-[var(--color-text-muted)]">
        404
      </p>
      <h1 className="mb-4 font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl tracking-tighter font-light text-[var(--color-text)] leading-[1.1] text-center">
        This space does not exist.
      </h1>
      <p className="mb-10 font-[family-name:var(--font-body)] text-sm md:text-base font-light text-[var(--color-text-muted)] text-center">
        But the sanctuary does.
      </p>
      <Link
        href="/"
        className="rounded-full border border-[var(--color-accent)]/40 px-10 py-4 font-[family-name:var(--font-body)] text-sm font-light uppercase tracking-widest text-[var(--color-accent)] transition-all duration-500 hover:border-transparent hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]"
      >
        Return Home
      </Link>
    </div>
  );
}
