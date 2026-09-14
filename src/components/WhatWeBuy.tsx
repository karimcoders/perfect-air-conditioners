import { AirVent, Cable, Cog, Hammer, Recycle, IndianRupee } from "lucide-react";
import Reveal from "./Reveal";

const ITEMS = [
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
];

export default function WhatWeBuy() {
  return (
    <section id="what-we-buy" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-azure-deep">
            What We Buy
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-[40px] sm:leading-[1.1]">
            More than just old ACs.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-blue">
            We buy a wide range of AC and metal scrap materials.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 90}>
              <article className="group h-full rounded-2xl border border-royal/10 bg-white p-7 shadow-[0_10px_30px_-18px_rgba(8,29,82,0.25)] transition-all duration-300 hover:-translate-y-1.5 hover:border-azure/40 hover:shadow-[0_26px_50px_-22px_rgba(23,71,181,0.35)]">
                <span className="flex h-13 w-13 items-center justify-center rounded-xl bg-ice p-3 text-royal transition-colors duration-300 group-hover:bg-royal group-hover:text-white">
                  <item.icon size={24} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-blue">{item.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
