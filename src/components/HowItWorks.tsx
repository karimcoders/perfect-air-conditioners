import { Banknote, MessageSquareText, PhoneCall, Scale } from "lucide-react";
import Reveal from "./Reveal";

const STEPS = [
  {
    num: "01",
    icon: PhoneCall,
    title: "Call Us",
    desc: "Tell us what AC or scrap you want to sell.",
  },
  {
    num: "02",
    icon: MessageSquareText,
    title: "Share Details",
    desc: "Discuss the material and relevant buying details.",
  },
  {
    num: "03",
    icon: Scale,
    title: "Sell Your Scrap",
    desc: "Proceed once the buying terms are agreed.",
  },
  {
    num: "04",
    icon: Banknote,
    title: "Get Paid",
    desc: "Receive payment quickly — instant payment, no delays.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-azure-deep">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-[40px] sm:leading-[1.1]">
            Sell your scrap in 4 simple steps
          </h2>
        </Reveal>

        <ol className="relative mt-14 grid gap-10 lg:grid-cols-4 lg:gap-6">
          {/* connector line (desktop) */}
          <div
            className="absolute left-0 right-0 top-7 hidden border-t-2 border-dashed border-azure/30 lg:block"
            aria-hidden="true"
          />
          {STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 110}>
              <li className="relative flex gap-5 lg:block">
                {/* vertical connector (mobile) */}
                {i < STEPS.length - 1 && (
                  <span
                    className="absolute left-7 top-16 h-[calc(100%-2rem)] w-0.5 bg-azure/25 lg:hidden"
                    aria-hidden="true"
                  />
                )}
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-royal text-white shadow-[0_14px_28px_-12px_rgba(23,71,181,0.7)]">
                  <step.icon size={24} aria-hidden="true" />
                </div>
                <div className="lg:mt-6">
                  <p className="text-sm font-extrabold tracking-[0.2em] text-azure">{step.num}</p>
                  <h3 className="mt-1.5 text-lg font-bold text-ink">{step.title}</h3>
                  <p className="mt-2 max-w-[240px] text-sm leading-relaxed text-slate-blue">
                    {step.desc}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
