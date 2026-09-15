import { Banknote, PhoneCall, Zap } from "lucide-react";
import Reveal from "./Reveal";
import { PHONE_DISPLAY, PHONE_TEL } from "../constants";

export default function PriceOffer() {
  return (
    <section aria-labelledby="offer-heading" className="relative overflow-hidden bg-royal-800 py-16 lg:py-24">
      {/* decorative layers */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-royal-900 via-royal-800 to-royal-600" />
        <div className="dot-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]" />
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full border-[26px] border-cyan-brand/15" />
        <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full border-[34px] border-white/10" />
        <div className="absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-brand/60 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[900px] px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-[13.5px] font-bold tracking-[0.22em] text-cyan-soft">PRICE RANGE</p>
          <h2
            id="offer-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
          >
            TURN YOUR OLD AC INTO CASH
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-white">
            <span className="text-[clamp(2.4rem,7vw,4.6rem)] font-extrabold tabular-nums leading-none tracking-tight">
              ₹4,000
            </span>
            <span className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-[0.3em] text-cyan-soft">
              TO
            </span>
            <span className="bg-gradient-to-r from-cyan-soft to-cyan-brand bg-clip-text text-[clamp(2.4rem,7vw,4.6rem)] font-extrabold tabular-nums leading-none tracking-tight text-transparent">
              ₹15,000
            </span>
          </p>
          <p className="mt-6 text-[15px] leading-relaxed text-white/75">
            Get competitive prices for your old and scrap ACs.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-[11px] font-bold tracking-[0.18em] text-white backdrop-blur">
              <Banknote className="h-4 w-4 text-cyan-brand" aria-hidden="true" strokeWidth={2.4} />
              BEST PRICES
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-[11px] font-bold tracking-[0.18em] text-white backdrop-blur">
              <Zap className="h-4 w-4 text-cyan-brand" aria-hidden="true" strokeWidth={2.4} />
              INSTANT PAYMENT
            </span>
          </div>
        </Reveal>

        <Reveal delay={280}>
          <a
            href={PHONE_TEL}
            className="group mt-9 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-9 py-4.5 text-sm font-bold tracking-wide text-royal-800 shadow-[0_20px_44px_-14px_rgb(0_0_0/0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_26px_52px_-14px_rgb(0_0_0/0.55)] sm:w-auto"
            aria-label={`Get a quote, call ${PHONE_DISPLAY}`}
          >
            <PhoneCall
              className="h-4.5 w-4.5 transition-transform duration-300 group-hover:rotate-12"
              aria-hidden="true"
              strokeWidth={2.5}
            />
            GET A QUOTE
          </a>
          <p className="mt-5 text-[11.5px] leading-relaxed text-white/55">
            Get up to ₹15,000 — price depends on AC type, condition, weight and scrap value.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
