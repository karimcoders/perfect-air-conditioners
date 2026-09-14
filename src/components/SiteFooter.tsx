import { Phone } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL, TAGLINE } from "../lib/site";

export default function SiteFooter() {
  return (
    <footer className="bg-navy-ink text-white">
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo light size={52} />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-azure">
              {TAGLINE}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Old &amp; scrap ACs, copper, aluminium, iron, brass, motors, compressors and other
              metal scrap — bought at competitive prices.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-12 gap-y-3">
            {[...NAV_LINKS, { label: "Call Now", href: PHONE_TEL }].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-white/70 transition-colors hover:text-azure"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="md:text-right">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/50">
              Call Now
            </p>
            <a
              href={PHONE_TEL}
              className="mt-2 inline-flex items-center gap-2.5 text-2xl font-extrabold text-white transition-colors hover:text-azure"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-azure text-navy">
                <Phone size={18} aria-hidden="true" />
              </span>
              {PHONE_DISPLAY}
            </a>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
              Best Prices • Instant Payment
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Perfect Air Conditioners. All rights reserved.</p>
          <p className="hidden md:block">We Buy Dead &amp; Scrap ACs</p>
          <p>
            Design by{" "}
            <a
              href="https://soulddigitalmarketing.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-azure transition-colors hover:text-white"
            >
              Sould Digital Marketing
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
