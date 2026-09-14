import { Layers, Rocket, TrendingUp, Zap } from "lucide-react";
import Reveal from "./Reveal";
import WHY_IMG from "../assets/images/recycling-yard.jpg";

const BENEFITS = [
  {
    icon: TrendingUp,
    title: "Competitive Prices",
    desc: "Get a fair buying price for your scrap.",
  },
  {
    icon: Zap,
    title: "Instant Payment",
    desc: "Fast and straightforward payment process.",
  },
  {
    icon: Layers,
    title: "Multiple Scrap Categories",
    desc: "ACs, copper, aluminium, iron, brass, motors and more.",
  },
  {
    icon: Rocket,
    title: "Fast Service",
    desc: "Simple communication and quick service.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-mist py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* Benefits */}
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-azure-deep">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-[40px] sm:leading-[1.1]">
            A simple, honest way to sell your scrap.
          </h2>

          <ul className="mt-10 space-y-7">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 90}>
                <li className="group flex gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-royal/15 bg-white text-royal shadow-sm transition-all duration-300 group-hover:border-royal group-hover:bg-royal group-hover:text-white">
                    <b.icon size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-ink">{b.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-blue">{b.desc}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </Reveal>

        {/* Image */}
        <Reveal delay={120} className="relative">
          <div className="absolute -left-5 -top-5 h-24 w-24 rounded-2xl border-[6px] border-azure/25" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[28px] shadow-[0_36px_70px_-30px_rgba(8,29,82,0.5)] ring-1 ring-royal/10">
            <img
              src={WHY_IMG}
              alt="Magnet crane lifting scrap metal at a recycling yard"
              width={940}
              height={650}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent px-6 pb-5 pt-14">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-white">
                Fast Service <span className="text-azure">•</span> Best Rates
              </p>
            </div>
          </div>
          <div className="absolute -bottom-5 right-6 rounded-xl bg-white px-5 py-3 shadow-[0_18px_38px_-16px_rgba(8,29,82,0.5)] ring-1 ring-royal/10">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-blue">
              Recycling-friendly
            </p>
            <p className="text-sm font-extrabold text-royal">Responsible disposal</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
