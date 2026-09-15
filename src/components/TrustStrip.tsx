import { AirVent, BadgeCheck, IndianRupee, Zap } from "lucide-react";
import Reveal from "./Reveal";

const STATS = [
  { icon: IndianRupee, value: "₹4,000–₹15,000", label: "AC PRICE RANGE" },
  { icon: AirVent, value: "ALL BRANDS", label: "OLD & SCRAP ACs" },
  { icon: Zap, value: "INSTANT PAYMENT", label: "FAST & SIMPLE" },
  { icon: BadgeCheck, value: "BEST PRICES", label: "FAST SERVICE" },
] as const;

export default function TrustStrip() {
  return (
    <section aria-label="Key highlights" className="relative z-10 bg-white">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid -translate-y-5 grid-cols-1 gap-4 sm:grid-cols-2 lg:-translate-y-7 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <div className="group flex h-full items-center gap-4 rounded-2xl border border-royal-100 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-royal-50 to-cyan-brand/20 text-royal-700 transition-colors duration-300 group-hover:from-royal-600 group-hover:to-royal-700 group-hover:text-white">
                  <stat.icon className="h-5.5 w-5.5" aria-hidden="true" strokeWidth={2.2} />
                </span>
                <span className="leading-tight">
                  <span className="block text-[15px] font-extrabold tabular-nums tracking-tight text-navy">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-[10.5px] font-bold tracking-[0.16em] text-ink/50">
                    {stat.label}
                  </span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
