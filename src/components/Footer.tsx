const PREVIEW_URL = "https://www.instagram.com/kata_consulting/";

export default function Footer() {
  return (
    <footer className="relative bg-[var(--color-bg)] border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 md:gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span
              className="text-sm tracking-[0.22em] text-[var(--color-text)] font-medium"
              style={{ fontFamily: "var(--font-display)" }}
            >
              SANCTUM
            </span>
            <p className="max-w-[200px] font-[family-name:var(--font-body)] text-xs font-light leading-relaxed text-[var(--color-text-muted)]">
              Architecture. Movement. Ritual.<br />
              Lombok, West Nusa Tenggara.
            </p>
          </div>

          {/* Nav columns */}
          <div className="flex gap-16 md:gap-20">
            <div className="flex flex-col gap-3">
              <p className="font-[family-name:var(--font-body)] text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-muted)] mb-1">
                Spaces
              </p>
              {[
                { label: "Lifestyle Club", href: PREVIEW_URL },
                { label: "Enclave", href: PREVIEW_URL },
                { label: "Collectiv", href: PREVIEW_URL },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-[family-name:var(--font-body)] text-sm font-light text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <p className="font-[family-name:var(--font-body)] text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-muted)] mb-1">
                Sanctum
              </p>
              {[
                { label: "Philosophy", href: PREVIEW_URL },
                { label: "Enquire", href: PREVIEW_URL },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-[family-name:var(--font-body)] text-sm font-light text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-[var(--color-border)]" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-[family-name:var(--font-body)] text-[11px] font-light text-[var(--color-text-muted)] tracking-wide">
            © {new Date().getFullYear()} Sanctum Lombok. All rights reserved.
          </p>
          <p className="font-[family-name:var(--font-body)] text-[11px] font-light text-[var(--color-text-muted)] tracking-[0.2em] uppercase">
            8°34′S 116°07′E
          </p>
        </div>
      </div>
    </footer>
  );
}
