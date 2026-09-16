import { Clock, Layers, Tag, Zap } from "lucide-react";
import Reveal from "./Reveal";

const BENEFITS = [
  {
    icon: Tag,
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
    icon: Clock,
    title: "Fast Service",
    desc: "Simple communication and quick service.",
  },
] as const;

export default function WhyChooseUs() {
  return (
    <section aria-labelledby="why-heading" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[13.5px] font-bold tracking-[0.2em] text-cyan-brand">WHY US</p>
          <h2
            id="why-heading"
            className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl"
          >
            Why choose Perfect Scrap Deals?
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 90}>
              <article className="group h-full rounded-3xl border border-royal-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-royal-100 bg-gradient-to-br from-royal-50 to-cyan-brand/15 text-royal-700 transition-colors duration-300 group-hover:border-royal-600 group-hover:bg-royal-600 group-hover:text-white">
                  <benefit.icon className="h-5.5 w-5.5" aria-hidden="true" strokeWidth={2.1} />
                </span>
                <h3 className="mt-5 text-[15.5px] font-bold tracking-tight text-navy">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{benefit.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
