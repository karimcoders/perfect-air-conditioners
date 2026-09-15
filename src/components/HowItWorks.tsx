import { ClipboardList, PhoneCall, Recycle, Wallet } from "lucide-react";
import Reveal from "./Reveal";

const STEPS = [
  {
    icon: PhoneCall,
    num: "01",
    title: "CALL US",
    desc: "Tell us what AC or scrap you want to sell.",
  },
  {
    icon: ClipboardList,
    num: "02",
    title: "SHARE DETAILS",
    desc: "Discuss the material and relevant buying details.",
  },
  {
    icon: Recycle,
    num: "03",
    title: "SELL YOUR SCRAP",
    desc: "Proceed once the buying terms are agreed.",
  },
  {
    icon: Wallet,
    num: "04",
    title: "GET PAID",
    desc: "Receive payment quickly, with instant payment highlighted by our offer.",
  },
] as const;

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-mist py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[13.5px] font-bold tracking-[0.2em] text-cyan-brand">PROCESS</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            SELL YOUR SCRAP IN 4 SIMPLE STEPS
          </h2>
        </Reveal>

        <ol className="relative mt-12 grid gap-10 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {/* connector line — vertical on mobile, horizontal on desktop */}
          <div
            aria-hidden="true"
            className="absolute bottom-7 left-[27px] top-7 z-0 w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-royal-600 via-cyan-brand to-royal-600 lg:bottom-auto lg:left-[12.5%] lg:right-[12.5%] lg:top-[27px] lg:h-[3px] lg:w-auto lg:translate-x-0 lg:bg-gradient-to-r"
          />
          {STEPS.map((step, i) => (
            <li key={step.num}>
              <Reveal delay={i * 110} className="h-full">
                <div className="relative z-10 flex items-start gap-5 lg:flex-col lg:items-center lg:text-center">
                  <div className="relative shrink-0">
                    <span className="flex h-[54px] w-[54px] items-center justify-center rounded-2xl bg-gradient-to-br from-royal-600 to-royal-800 text-white shadow-[0_14px_28px_-10px_rgb(28_73_197/0.65)] ring-4 ring-white">
                      <step.icon className="h-6 w-6" aria-hidden="true" strokeWidth={1.9} />
                    </span>
                    <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-cyan-brand px-1 text-[10px] font-extrabold tracking-tight text-royal-950 ring-2 ring-white">
                      {step.num}
                    </span>
                  </div>
                  <div className="min-w-0 pt-1 lg:pt-0">
                    <h3 className="text-[15px] font-extrabold tracking-[0.06em] text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/60">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
