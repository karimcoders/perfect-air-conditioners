import { PhoneCall } from "lucide-react";
import Logo from "./Logo";
import {
  BUSINESS_NAME,
  NAV_LINKS,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "../constants";

export default function Footer() {
  return (
    <footer className="bg-royal-950 text-white">
      <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Logo dark className="h-20 sm:h-24" />
            <p className="mt-4 text-sm font-semibold text-cyan-soft">
              We Buy Dead &amp; Scrap ACs
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/55">
              Old and scrap air conditioners, copper, aluminium, iron, brass, motors,
              compressors and other metal scrap — at competitive prices.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-[11px] font-bold tracking-[0.24em] text-white/45">QUICK LINKS</h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-white/70 transition-colors hover:text-cyan-soft"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={PHONE_TEL}
                  className="text-sm font-medium text-white/70 transition-colors hover:text-cyan-soft"
                >
                  Call Now
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.24em] text-white/45">CALL US</h3>
            <a
              href={PHONE_TEL}
              className="mt-5 inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-brand/50 hover:bg-white/10"
              aria-label={`Call ${BUSINESS_NAME} at ${PHONE_DISPLAY}`}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-brand text-royal-950">
                <PhoneCall className="h-4.5 w-4.5" aria-hidden="true" strokeWidth={2.5} />
              </span>
              <span className="leading-tight">
                <span className="block text-[10px] font-bold tracking-[0.2em] text-white/50">
                  CALL NOW
                </span>
                <span className="block text-base font-extrabold tabular-nums tracking-wide">
                  {PHONE_DISPLAY}
                </span>
              </span>
            </a>
            <p className="mt-4 text-xs font-semibold tracking-[0.14em] text-white/45">
              BEST PRICES • INSTANT PAYMENT
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row sm:gap-6">
          <p className="text-center text-xs text-white/45 sm:text-left">
            © 2026 Perfect Scrap Deals. All rights reserved.
          </p>
          <p className="text-center text-xs text-white/60 sm:text-right">
            Developed and managed by{" "}
            <a
              href="https://soulddigitalmarketing.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-cyan-soft transition-colors hover:text-white hover:underline underline-offset-4"
            >
              Soul-D.
            </a>{" "}
            | Digital Marketing Solutions | Powered by AI
          </p>
        </div>
      </div>
    </footer>
  );
}
