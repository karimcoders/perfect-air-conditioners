import { Check } from "lucide-react";
import Reveal from "./Reveal";
import { SCRAP_IMAGES } from "../lib/cdn";

const {
  copper: scrapCopper,
  aluminium: scrapAluminium,
  iron: scrapIron,
  brass: scrapBrass,
  motors: scrapMotors,
  compressors: scrapCompressors,
  steel: scrapSteel,
  mixed: scrapMixed,
} = SCRAP_IMAGES;

const SCRAPS = [
  { name: "Copper", img: scrapCopper, alt: "Copper scrap pipes and fittings" },
  { name: "Aluminium", img: scrapAluminium, alt: "Aluminium scrap profiles and sheets" },
  { name: "Iron", img: scrapIron, alt: "Iron scrap metal pieces" },
  { name: "Brass", img: scrapBrass, alt: "Brass scrap valves and connectors" },
  { name: "Motors", img: scrapMotors, alt: "Old electric motor scrap with copper windings" },
  { name: "Compressors", img: scrapCompressors, alt: "Used AC compressor scrap units" },
  { name: "Steel", img: scrapSteel, alt: "Stainless steel scrap sheets and pipes" },
  { name: "Other Metal Scrap", img: scrapMixed, alt: "Mixed metal scrap collection" },
] as const;

export default function ScrapTypes() {
  return (
    <section id="scrap-types" className="scroll-mt-24 bg-mist py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[13.5px] font-bold tracking-[0.2em] text-cyan-brand">METAL SCRAP</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            WE ALSO BUY ALL TYPES OF SCRAPS
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
            Along with your old AC, we purchase common ferrous and non-ferrous metals.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-4 sm:gap-x-6 lg:mt-14">
          {SCRAPS.map((scrap, i) => (
            <Reveal key={scrap.name} delay={(i % 4) * 80}>
              <figure className="group text-center">
                <div className="relative mx-auto aspect-square w-full max-w-[190px]">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-royal-600 to-cyan-brand opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-30"
                  />
                  <img
                    src={scrap.img}
                    alt={scrap.alt}
                    width={380}
                    height={380}
                    loading="lazy"
                    decoding="async"
                    className="relative h-full w-full rounded-full object-cover shadow-card ring-4 ring-white transition-all duration-500 group-hover:scale-[1.06] group-hover:shadow-card-hover group-hover:ring-cyan-brand/40"
                  />
                  <span className="absolute -bottom-1 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-royal-600 text-white shadow-md ring-4 ring-mist transition-colors duration-300 group-hover:bg-cyan-brand">
                    <Check className="h-4 w-4" aria-hidden="true" strokeWidth={3} />
                  </span>
                </div>
                <figcaption className="mt-4 text-[12.5px] font-bold uppercase tracking-[0.14em] text-royal-800">
                  {scrap.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
