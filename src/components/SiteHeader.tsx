import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL } from "../lib/site";
import { cn } from "../utils/cn";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-navy text-white">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-3 px-4 py-2 sm:px-6">
          <p className="text-[11px] font-semibold tracking-[0.14em] sm:text-xs">
            <span className="text-azure">●</span>{" "}
            <span className="uppercase">Old AC? Turn it into cash.</span>
          </p>
          <a
            href={PHONE_TEL}
            className="flex shrink-0 items-center gap-1.5 text-[11px] font-semibold text-white/90 transition-colors hover:text-azure sm:text-xs"
          >
            <Phone size={13} className="text-azure" aria-hidden="true" />
            Call: {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      {/* Sticky navbar */}
      <nav
        aria-label="Main navigation"
        className={cn(
          "sticky top-0 z-50 border-b border-royal/10 bg-white/95 backdrop-blur transition-shadow",
          scrolled && "shadow-[0_8px_30px_-12px_rgba(14,47,134,0.25)]"
        )}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3 sm:px-6">
          <a href="#home" aria-label="Perfect Scrap Deals — home" className="shrink-0">
            <Logo size={40} />
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-ink/75 transition-colors hover:text-royal"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PHONE_TEL}
              className="hidden items-center gap-2 rounded-xl bg-royal px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_24px_-10px_rgba(23,71,181,0.65)] transition-all hover:-translate-y-0.5 hover:bg-royal-deep hover:shadow-[0_16px_30px_-10px_rgba(23,71,181,0.7)] sm:inline-flex"
            >
              <Phone size={16} aria-hidden="true" />
              CALL NOW
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-royal/15 text-royal transition-colors hover:bg-ice lg:hidden"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={cn(
            "overflow-hidden border-t border-royal/10 bg-white transition-[max-height,opacity] duration-300 lg:hidden",
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-ink/80 transition-colors hover:bg-ice hover:text-royal"
              >
                {link.label}
              </a>
            ))}
            <a
              href={PHONE_TEL}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-royal px-5 py-3.5 text-sm font-bold text-white"
            >
              <Phone size={16} aria-hidden="true" />
              CALL NOW — {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
