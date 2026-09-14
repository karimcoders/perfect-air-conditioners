import { Check } from "lucide-react";
import Reveal from "./Reveal";
import copperImg from "../assets/images/copper.jpg";
import aluminiumImg from "../assets/images/aluminium.jpg";
import ironImg from "../assets/images/iron.jpg";
import brassImg from "../assets/images/brass.jpg";
import motorsImg from "../assets/images/motors.jpg";
import compressorsImg from "../assets/images/compressors.jpg";
import steelImg from "../assets/images/steel.jpg";
import otherImg from "../assets/images/other-metal-scrap.jpg";

const TYPES = [
  { name: "Copper", src: copperImg, alt: "Copper items with a warm metallic finish" },
  { name: "Aluminium", src: aluminiumImg, alt: "Rows of aluminium can lids, silver metal" },
  { name: "Iron", src: ironImg, alt: "Rusted iron metal surface" },
  { name: "Brass", src: brassImg, alt: "Ornate golden brass metalwork" },
  { name: "Motors", src: motorsImg, alt: "Mechanical motor parts and metal rings" },
  { name: "Compressors", src: compressorsImg, alt: "Industrial HVAC compressor unit close-up" },
  { name: "Steel", src: steelImg, alt: "Steel structure with a geometric pattern" },
  { name: "Other Metal Scrap", src: otherImg, alt: "Aerial view of a mixed metal scrap pile" },
];

export default function ScrapTypes() {
  return (
    <section id="scrap-types" className="bg-mist py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-azure-deep">
            Scrap Categories
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-[40px] sm:leading-[1.1]">
            We also buy all types of scraps
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-blue">
            From copper to compressors — if it&apos;s metal, talk to us before you throw it away.
          </p>
        </Reveal>

        <ul className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {TYPES.map((type, i) => (
            <Reveal key={type.name} delay={(i % 4) * 80}>
              <li className="group flex flex-col items-center text-center">
                <div className="relative">
                  <div className="overflow-hidden rounded-full ring-4 ring-white shadow-[0_18px_38px_-18px_rgba(8,29,82,0.45)] transition-shadow duration-300 group-hover:shadow-[0_24px_46px_-18px_rgba(23,71,181,0.5)]">
                    <img
                      src={type.src}
                      alt={type.alt}
                      width={320}
                      height={320}
                      loading="lazy"
                      className="h-24 w-24 object-cover transition-transform duration-500 group-hover:scale-110 sm:h-28 sm:w-28"
                    />
                  </div>
                  <span
                    className="absolute bottom-0.5 right-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-azure text-white shadow ring-2 ring-white"
                    aria-hidden="true"
                  >
                    <Check size={14} strokeWidth={3.5} />
                  </span>
                </div>
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.08em] text-ink transition-colors group-hover:text-royal">
                  {type.name}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
