import { Phone } from "lucide-react";
import Reveal from "./Reveal";
import { PHONE_DISPLAY, PHONE_TEL } from "../lib/site";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-royal py-20 text-white lg:py-24">
      <div className="dot-grid-light pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-20 bottom-[-90px] h-64 w-64 rounded-full border-[10px] border-white/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[-70px] top-[-70px] h-56 w-56 rounded-full border-[10px] border-azure/25"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1200px] px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Got an old AC?
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-azure sm:text-4xl lg:text-5xl">
            Let&apos;s turn it into cash.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white/80 sm:text-base">
            Call Perfect Air Conditioners today to discuss your old AC or scrap.
          </p>

          <a
            href={PHONE_TEL}
            className="pulse-ring mt-10 inline-flex items-center gap-3 rounded-2xl bg-white px-9 py-5 text-xl font-extrabold text-royal shadow-[0_26px_54px_-20px_rgba(0,0,0,0.55)] transition-all hover:-translate-y-1 hover:bg-ice sm:text-2xl"
          >
            <Phone size={26} aria-hidden="true" />
            CALL {PHONE_DISPLAY}
          </a>

          <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
            Best Prices <span className="text-azure">•</span> Instant Payment{" "}
            <span className="text-azure">•</span> Fast Service
          </p>
        </Reveal>
      </div>
    </section>
  );
}
