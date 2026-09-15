import { ArrowRight, BadgeCheck, PhoneCall, Zap } from "lucide-react";
import Reveal from "./Reveal";
import { PHONE_DISPLAY, PHONE_TEL } from "../constants";
import { HERO_AC_PILE as heroAcPile } from "../lib/cdn";

export default function Hero() {
  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden bg-mist">
      {/* soft decorative background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full bg-gradient-to-br from-cyan-brand/25 to-royal-200/40 blur-3xl" />
        <div className="absolute bottom-[-30%] left-[-12%] h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-royal-200/50 to-cyan-brand/15 blur-3xl" />
        <div className="dot-grid-faint absolute inset-x-0 top-0 h-40 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      </div>

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-5 pb-12 pt-9 sm:px-8 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] md:gap-8 lg:pb-14 lg:pt-12">
        {/* --------- Copy --------- */}
        <div className="max-w-xl">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-royal-200 bg-white px-5 py-2 text-[13.5px] font-bold tracking-[0.2em] text-royal-700 shadow-card">
              <Zap className="h-4 w-4 text-cyan-brand" aria-hidden="true" strokeWidth={2.5} />
              OLD AC? TURN IT INTO CASH.
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 text-[clamp(2.15rem,5vw,3.75rem)] font-extrabold leading-[1.04] tracking-tight text-navy">
              WE BUY
              <span className="block bg-gradient-to-r from-royal-600 via-royal-500 to-cyan-brand bg-clip-text text-transparent">
                DEAD &amp; SCRAP
              </span>
              <span className="relative inline-block">
                ACs
                <svg
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 220 18"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M4 13C55 5 120 3 216 9"
                    stroke="url(#hero-underline)"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeDasharray="12 12"
                    style={{ animation: "dash-flow 1.4s linear infinite" }}
                  />
                  <defs>
                    <linearGradient id="hero-underline" x1="0" y1="0" x2="220" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#1c49c5" />
                      <stop offset="1" stopColor="#2cbdf0" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 text-sm leading-relaxed text-ink/65 sm:text-[15px]">
              Sell your old or scrap air conditioner at competitive prices. We buy ACs
              across brands and also purchase copper, aluminium, iron, brass, motors,
              compressors and other metal scraps.
            </p>
          </Reveal>

          <Reveal delay={230}>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={PHONE_TEL}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-royal-600 px-6 py-3.5 text-sm font-bold tracking-wide text-white shadow-[0_18px_38px_-14px_rgb(28_73_197/0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-royal-700 hover:shadow-[0_24px_44px_-14px_rgb(28_73_197/0.85)] sm:w-auto"
                aria-label={`Call now at ${PHONE_DISPLAY}`}
              >
                <PhoneCall
                  className="h-4.5 w-4.5 transition-transform duration-300 group-hover:rotate-12"
                  aria-hidden="true"
                  strokeWidth={2.5}
                />
                CALL NOW — {PHONE_DISPLAY}
              </a>
              <a
                href="#what-we-buy"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl border-2 border-royal-600/25 bg-white px-6 py-[12.5px] text-sm font-bold tracking-wide text-royal-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-royal-600/60 hover:shadow-card sm:w-auto"
              >
                SEE WHAT WE BUY
                <ArrowRight className="h-4 w-4" aria-hidden="true" strokeWidth={2.5} />
              </a>
            </div>
          </Reveal>

        </div>

        {/* --------- Visual composition (static — hero visual must never be hidden) --------- */}
        <div className="relative min-w-0">
          <div className="relative mx-auto max-w-[470px]">
            {/* halo accents */}
            <div
              aria-hidden="true"
              className="absolute -inset-5 rounded-[36px] bg-gradient-to-br from-cyan-brand/30 via-transparent to-royal-300/40 blur-2xl"
            />

            <figure className="relative overflow-hidden rounded-[28px] bg-white shadow-hero ring-1 ring-royal-900/10">
              <img
                src={heroAcPile}
                alt="Old and scrap air conditioner units stacked together"
                width={684}
                height={491}
                className="aspect-[4/3] w-full object-cover"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-royal-950/30 to-transparent"
              />
              <figcaption className="absolute bottom-3 left-3 z-10 flex items-center gap-2 rounded-full bg-white/95 py-2 pl-3 pr-3.5 text-[12px] font-bold tracking-wide text-royal-800 shadow-card backdrop-blur sm:bottom-1.5 sm:pr-4.5 sm:text-[13px]">
                <BadgeCheck className="h-4 w-4 shrink-0 text-cyan-brand sm:h-4.5 sm:w-4.5" aria-hidden="true" strokeWidth={2.5} />
                <span className="whitespace-nowrap">ALL BRANDS ACCEPTED</span>
              </figcaption>

              {/* INSTANT PAYMENT chip — floating mid-right on mobile (kept fully inside card) */}
              <div className="absolute right-3 top-1/2 z-20 sm:hidden">
                <div className="flex items-center gap-2 rounded-2xl bg-royal-800/95 px-3 py-2 text-white shadow-hero backdrop-blur">
                  <span className="animate-pulse-ring flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-brand text-royal-950">
                    <Zap className="h-4 w-4" aria-hidden="true" strokeWidth={2.5} />
                  </span>
                  <span className="whitespace-nowrap text-[10px] font-bold tracking-[0.12em]">INSTANT PAYMENT</span>
                </div>
              </div>
            </figure>

            {/* floating perks chip — same format as INSTANT PAYMENT */}
            <div className="animate-float absolute -left-3 -top-6">
              <div className="flex items-center gap-2.5 rounded-2xl bg-royal-800 px-4 py-3 text-white shadow-hero">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-brand text-royal-950">
                  <BadgeCheck className="h-4.5 w-4.5" aria-hidden="true" strokeWidth={2.5} />
                </span>
                <span className="text-[10.5px] font-bold leading-snug tracking-[0.12em]">
                  BEST PRICES <span className="mx-0.5 text-cyan-brand">•</span> FAST SERVICE
                </span>
              </div>
            </div>

            {/* floating payment chip — desktop only (mobile uses in-flow chip below) */}
            <div className="animate-float-slow absolute -bottom-6 -right-6 hidden sm:block sm:-right-10">
              <div className="flex items-center gap-2.5 rounded-2xl bg-royal-800 px-4 py-3 text-white shadow-hero">
                <span className="animate-pulse-ring flex h-9 w-9 items-center justify-center rounded-full bg-cyan-brand text-royal-950">
                  <Zap className="h-4.5 w-4.5" aria-hidden="true" strokeWidth={2.5} />
                </span>
                <span className="text-[10.5px] font-bold tracking-[0.14em]">INSTANT PAYMENT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
