import { BadgeCheck, Phone, Zap } from "lucide-react";
import Reveal from "./Reveal";
import { PHONE_TEL } from "../lib/site";

export default function PriceOffer() {
  return (
    <section className="relative overflow-hidden bg-royal-deep py-20 text-white lg:py-24">
      <div className="dot-grid-light pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[10px] border-azure/20"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-azure">
            Today&apos;s Offer
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-[42px] sm:leading-[1.08]">
            Turn your old AC
            <br className="hidden sm:block" /> into cash.
          </h2>

          <div className="mt-8 flex flex-wrap items-end gap-x-4 gap-y-1">
            <span className="text-4xl font-extrabold text-white/90 sm:text-5xl">₹4,000</span>
            <span className="mb-2 rounded-full bg-azure px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-navy">
              to
            </span>
            <span className="text-6xl font-extrabold leading-none text-azure sm:text-7xl">
              ₹15,000
            </span>
          </div>

          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-white/75">
            Get competitive prices for your old and scrap ACs. Final price depends on AC type,
            condition, weight and scrap value — call us for a quick quote.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] ring-1 ring-white/15">
              <BadgeCheck size={15} className="text-azure" aria-hidden="true" />
              Best Prices
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] ring-1 ring-white/15">
              <Zap size={15} className="text-azure" aria-hidden="true" />
              Instant Payment
            </span>
          </div>

          <a
            href={PHONE_TEL}
            className="mt-9 inline-flex items-center gap-2.5 rounded-xl bg-white px-7 py-4 text-base font-bold text-royal shadow-[0_20px_44px_-18px_rgba(0,0,0,0.55)] transition-all hover:-translate-y-0.5 hover:bg-ice"
          >
            <Phone size={18} aria-hidden="true" />
            GET A QUOTE
          </a>
        </Reveal>

        {/* Price tag visual */}
        <Reveal delay={140} className="relative hidden lg:block">
          <div className="relative mx-auto w-[340px] rotate-3 rounded-[26px] bg-white p-8 text-ink shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:rotate-0">
            <div
              className="absolute left-1/2 top-5 h-7 w-7 -translate-x-1/2 rounded-full border-4 border-royal-deep bg-royal-deep"
              aria-hidden="true"
            />
            <div className="mt-6 rounded-2xl border-2 border-dashed border-royal/25 px-6 py-8 text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-blue">
                Get up to
              </p>
              <p className="mt-2 text-5xl font-extrabold leading-none text-royal">₹15,000</p>
              <p className="mt-4 text-xs font-semibold text-slate-blue">
                for your old &amp; scrap AC
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.14em] text-azure-deep">
              <span>Best Prices</span>
              <span className="text-royal/30">•</span>
              <span>Instant Payment</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
