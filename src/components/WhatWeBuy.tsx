import { AirVent, Cable, Cog, Hammer, IndianRupee, Recycle } from "lucide-react";
import Reveal from "./Reveal";

const CATEGORIES = [
  {
    icon: AirVent,
    title: "Old & Scrap ACs",
    desc: "We buy dead, old and scrap air conditioners across brands.",
  },
  {
    icon: Cable,
    title: "Copper & Aluminium",
    desc: "Sell copper and aluminium scrap along with your old AC material.",
  },
  {
    icon: Cog,
    title: "Motors & Compressors",
    desc: "We also buy motors and compressors.",
  },
  {
    icon: Hammer,
    title: "Iron, Brass & Steel",
    desc: "We buy common ferrous and non-ferrous metal scrap.",
  },
  {
    icon: Recycle,
    title: "Other Metal Scrap",
    desc: "Have other metal scrap? Contact us to discuss it.",
  },
  {
    icon: IndianRupee,
    title: "Fast Payment",
    desc: "Competitive prices with instant payment.",
  },
] as const;

export default function WhatWeBuy() {
  return (
    <section id="what-we-buy" className="scroll-mt-24 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[13.5px] font-bold tracking-[0.2em] text-cyan-brand">WHAT WE BUY</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            More than just old ACs.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
            We buy a wide range of AC and metal scrap materials.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.title} delay={(i % 3) * 90}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-royal-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-royal-200 hover:shadow-card-hover">
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-cyan-brand/15 to-royal-100 transition-transform duration-500 group-hover:scale-[1.6]"
                />
                <span className="relative flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-royal-600 to-royal-800 text-white shadow-[0_12px_24px_-10px_rgb(28_73_197/0.6)] transition-transform duration-300 group-hover:scale-110 group-hover:rounded-[18px]">
                  <cat.icon className="h-6 w-6" aria-hidden="true" strokeWidth={1.9} />
                </span>
                <h3 className="relative mt-6 text-lg font-bold tracking-tight text-navy">
                  {cat.title}
                </h3>
                <p className="relative mt-2.5 text-sm leading-relaxed text-ink/60">{cat.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
