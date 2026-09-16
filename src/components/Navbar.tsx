import { useEffect, useState } from "react";
import { Menu, PhoneCall, X } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL } from "../constants";
import { cn } from "../utils/cn";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-royal-100/80 bg-white/95 backdrop-blur-md transition-shadow duration-300",
        scrolled && "shadow-[0_10px_30px_-18px_rgb(13_37_99/0.35)]"
      )}
    >
      <nav
        className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-5 sm:px-8 lg:h-[88px]"
        aria-label="Main navigation"
      >
        <a href="#home" aria-label="Perfect Scrap Deals — home" className="shrink-0">
          <Logo className="h-14 sm:h-16 lg:h-[76px]" />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-[15px] font-semibold tracking-wide text-ink/75 transition-colors hover:text-royal-700 after:absolute after:-bottom-1.5 after:left-0 after:h-[2.5px] after:w-0 after:rounded-full after:bg-gradient-to-r after:from-royal-600 after:to-cyan-brand after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={PHONE_TEL}
            className="hidden items-center gap-2.5 rounded-xl bg-royal-600 px-5 py-3 text-[13px] font-bold tracking-wide text-white shadow-[0_10px_24px_-10px_rgb(28_73_197/0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-royal-700 hover:shadow-[0_16px_30px_-10px_rgb(28_73_197/0.8)] sm:inline-flex"
            aria-label={`Call now at ${PHONE_DISPLAY}`}
          >
            <PhoneCall className="h-4 w-4" aria-hidden="true" strokeWidth={2.5} />
            CALL NOW
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-royal-100 text-royal-800 transition-colors hover:bg-royal-50 lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" strokeWidth={2.5} />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" strokeWidth={2.5} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-royal-100/70 bg-white transition-[max-height,opacity] duration-300 ease-out lg:hidden",
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="space-y-1 px-5 py-4 sm:px-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3.5 text-[15px] font-semibold text-ink/80 transition-colors hover:bg-royal-50 hover:text-royal-700"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={PHONE_TEL}
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2.5 rounded-xl bg-royal-600 px-5 py-4 text-sm font-bold tracking-wide text-white transition-colors hover:bg-royal-700"
              aria-label={`Call now at ${PHONE_DISPLAY}`}
            >
              <PhoneCall className="h-4 w-4" aria-hidden="true" strokeWidth={2.5} />
              CALL NOW — {PHONE_DISPLAY}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
