import { PhoneCall } from "lucide-react";
import Reveal from "./Reveal";
import { PHONE_DISPLAY, PHONE_TEL } from "../constants";

export default function FinalCTA() {
  return (
    <section aria-labelledby="final-cta-heading" className="relative overflow-hidden bg-royal-900 py-20 lg:py-28">
      {/* decorative layers */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(90%_110%_at_50%_-10%,#1c49c5_0%,#0d2563_52%,#0a1a45_100%)]" />
        <div className="dot-grid absolute inset-0 opacity-30 [mask-image:radial-gradient(55%_60%_at_50%_45%,black,transparent)]" />
        <div className="absolute -left-28 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border-[30px] border-cyan-brand/10" />
        <div className="absolute -right-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full border-[38px] border-white/[0.07]" />
      </div>

      <div className="relative mx-auto max-w-[820px] px-5 text-center sm:px-8">
        <Reveal>
          <h2
            id="final-cta-heading"
            className="text-[clamp(2.1rem,5.4vw,3.6rem)] font-extrabold leading-[1.08] tracking-tight text-white"
          >
            GOT AN OLD AC?
            <span className="mt-1 block bg-gradient-to-r from-cyan-soft via-cyan-brand to-cyan-soft bg-clip-text text-transparent">
              LET&rsquo;S TURN IT INTO CASH.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-white/70">
            Call Perfect Air Conditioners today to discuss your old AC or scrap.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <a
            href={PHONE_TEL}
            className="group mt-9 inline-flex w-full items-center justify-center gap-3.5 rounded-2xl bg-white px-8 py-5 text-base font-extrabold tracking-wide text-royal-800 shadow-[0_24px_50px_-16px_rgb(0_0_0/0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_60px_-16px_rgb(0_0_0/0.6)] sm:w-auto sm:text-lg"
            aria-label={`Call ${PHONE_DISPLAY}`}
          >
            <span className="animate-pulse-ring flex h-11 w-11 items-center justify-center rounded-full bg-royal-600 text-white transition-colors duration-300 group-hover:bg-royal-700">
              <PhoneCall
                className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12"
                aria-hidden="true"
                strokeWidth={2.5}
              />
            </span>
            CALL {PHONE_DISPLAY}
          </a>
        </Reveal>

        <Reveal delay={280}>
          <p className="mt-7 text-[11px] font-bold tracking-[0.22em] text-white/60">
            BEST PRICES <span className="mx-1.5 text-cyan-brand">•</span> INSTANT PAYMENT{" "}
            <span className="mx-1.5 text-cyan-brand">•</span> FAST SERVICE
          </p>
        </Reveal>
      </div>
    </section>
  );
}
