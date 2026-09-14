import { ArrowDown, BadgeCheck, Phone, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { PHONE_DISPLAY, PHONE_TEL } from "../lib/site";
import HERO_IMG from "../assets/images/hero-ac-scrap.jpg";
import HERO_IMG_SMALL from "../assets/images/hero-ac-tech.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden bg-mist lg:min-h-[calc(100vh-132px)]"
    >
      {/* halftone texture, echoing the client poster */}
      <div className="dot-grid pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-60 lg:block" aria-hidden="true" />
      <div className="dot-grid pointer-events-none absolute right-0 top-0 h-56 w-56 opacity-70 lg:hidden" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-10 px-4 pb-12 pt-10 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:gap-8 lg:py-8 xl:gap-10">
        {/* Left — message */}
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-azure/30 bg-azure/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-azure-deep">
            <Sparkles size={14} aria-hidden="true" />
            Old AC? Turn it into cash.
          </span>

          <h1 className="mt-5 text-[40px] font-extrabold leading-[1.03] tracking-tight text-ink sm:text-6xl lg:mt-4 lg:text-[58px] xl:text-[64px]">
            WE BUY
            <span className="relative mt-1 block text-royal">
              DEAD &amp; SCRAP
              <span className="relative inline-block">
                <span className="relative z-10 ml-3 inline-block -rotate-1 rounded-md bg-royal px-4 py-1 text-white shadow-[0_14px_30px_-12px_rgba(23,71,181,0.7)]">
                  ACs
                </span>
              </span>
              <svg
                className="absolute -bottom-3 left-0 h-3 w-56 text-azure sm:w-72"
                viewBox="0 0 280 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M4 8.5C60 3 130 2.5 276 7" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-slate-blue lg:mt-5 sm:text-base">
            Sell your old or scrap air conditioner at competitive prices. We buy ACs across brands
            and also purchase copper, aluminium, iron, brass, motors, compressors and other metal
            scraps.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-6">
            <a
              href={PHONE_TEL}
              className="pulse-ring inline-flex items-center justify-center gap-2.5 rounded-xl bg-royal px-7 py-4 text-base font-bold text-white shadow-[0_18px_36px_-14px_rgba(23,71,181,0.75)] transition-all hover:-translate-y-0.5 hover:bg-royal-deep"
            >
              <Phone size={19} aria-hidden="true" />
              CALL NOW — {PHONE_DISPLAY}
            </a>
            <a
              href="#what-we-buy"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-royal/25 bg-white px-7 py-[14px] text-base font-bold text-royal transition-all hover:-translate-y-0.5 hover:border-royal hover:bg-ice"
            >
              SEE WHAT WE BUY
              <ArrowDown size={17} aria-hidden="true" />
            </a>
          </div>

          {/* Price highlight */}
          <div className="mt-7 inline-flex flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl border border-royal/10 bg-white px-6 py-3.5 shadow-[0_16px_40px_-20px_rgba(8,29,82,0.35)] lg:mt-6">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-blue">
                Get up to
              </p>
              <p className="text-3xl font-extrabold leading-tight text-royal">
                ₹15,000<span className="text-azure">+</span>
              </p>
            </div>
            <div className="h-10 w-px bg-royal/10" aria-hidden="true" />
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink/70">
              Best Prices <span className="text-azure">•</span> Instant Payment
            </p>
          </div>
        </Reveal>

        {/* Right — visual composition */}
        <Reveal delay={120} className="relative">
          <div className="relative mx-auto max-w-[560px] lg:max-w-[460px] xl:max-w-[510px]">
            {/* decorative rings */}
            <div
              className="absolute -right-5 -top-5 h-24 w-24 rounded-full border-[6px] border-azure/25 lg:-right-6 lg:-top-6"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-6 -left-4 hidden h-16 w-16 rounded-full border-[6px] border-royal/15 lg:block"
              aria-hidden="true"
            />

            <div className="overflow-hidden rounded-[28px] bg-white p-2.5 shadow-[0_36px_70px_-30px_rgba(8,29,82,0.45)] ring-1 ring-royal/10">
              <img
                src={HERO_IMG}
                alt="Old and scrap air conditioner units stacked together for sale"
                className="aspect-[4/3] w-full rounded-[20px] object-cover"
                fetchPriority="high"
              />
            </div>

            {/* floating price badge */}
            <div className="absolute -left-3 top-6 rounded-2xl bg-navy px-5 py-3 text-white shadow-[0_20px_40px_-16px_rgba(8,29,82,0.7)] sm:-left-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-azure">Up to</p>
              <p className="text-2xl font-extrabold leading-none">₹15,000</p>
            </div>

            {/* overlapping secondary card */}
            <div className="absolute -bottom-5 -right-2 flex items-center gap-3 rounded-2xl bg-white p-2.5 pr-4 shadow-[0_24px_50px_-20px_rgba(8,29,82,0.5)] ring-1 ring-royal/10 sm:-right-5">
              <img
                src={HERO_IMG_SMALL}
                alt="Technician inspecting an outdoor air conditioner unit"
                width={200}
                height={200}
                loading="lazy"
                className="h-12 w-12 rounded-xl object-cover xl:h-14 xl:w-14"
              />
              <div>
                <p className="flex items-center gap-1 text-sm font-bold text-ink">
                  <BadgeCheck size={15} className="text-azure" aria-hidden="true" />
                  All Brands
                </p>
                <p className="text-[11px] font-medium text-slate-blue">Old &amp; scrap ACs</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
