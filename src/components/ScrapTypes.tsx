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

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6 lg:mt-14 lg:grid-cols-4">
          {SCRAPS.map((scrap, i) => (
            <Reveal key={scrap.name} delay={(i % 4) * 80}>
              <figure className="group flex flex-col items-center text-center">
                <div className="relative">
                  <div className="overflow-hidden rounded-full bg-white shadow-card ring-4 ring-white transition-shadow duration-300 group-hover:shadow-card-hover">
                    <img
                      src={scrap.img}
                      alt={scrap.alt}
                      width={400}
                      height={400}
                      loading="lazy"
                      decoding="async"
                      className="h-28 w-28 object-cover transition-transform duration-500 group-hover:scale-110 sm:h-32 sm:w-32 lg:h-36 lg:w-36"
                    />
                  </div>
                  <span className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-brand text-royal-950 shadow ring-2 ring-white lg:h-9 lg:w-9">
                    <Check className="h-4 w-4" aria-hidden="true" strokeWidth={3.5} />
                  </span>
                </div>
                <figcaption className="mt-4 text-[13px] font-bold uppercase tracking-[0.1em] text-royal-800 transition-colors group-hover:text-royal-600">
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
