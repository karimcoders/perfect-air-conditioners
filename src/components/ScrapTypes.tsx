import { useState, useEffect, useCallback } from "react";
import { Check, X, ZoomIn } from "lucide-react";
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

type ScrapItem = (typeof SCRAPS)[number];

export default function ScrapTypes() {
  const [active, setActive] = useState<ScrapItem | null>(null);

  const close = useCallback(() => setActive(null), []);
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close]);

  return (
    <section id="scrap-types" className="scroll-mt-24 bg-mist py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[13.5px] font-bold tracking-[0.2em] text-cyan-brand">METAL SCRAP</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            WE ALSO BUY ALL TYPES OF SCRAPS
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
            Along with your old AC, we purchase common ferrous and non-ferrous metals. Tap a photo
            to view it full size.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6 lg:mt-14 lg:grid-cols-4">
          {SCRAPS.map((scrap, i) => (
            <Reveal key={scrap.name} delay={(i % 4) * 80}>
              <figure className="group flex flex-col items-center text-center">
                <button
                  type="button"
                  onClick={() => setActive(scrap)}
                  aria-label={`View ${scrap.name} scrap photo full size`}
                  className="relative cursor-zoom-in rounded-full outline-none focus-visible:ring-4 focus-visible:ring-cyan-brand/40"
                >
                  <div className="overflow-hidden rounded-full bg-white shadow-card ring-4 ring-white transition-shadow duration-300 group-hover:shadow-card-hover">
                    <img
                      src={scrap.img}
                      alt={scrap.alt}
                      width={600}
                      height={600}
                      loading="lazy"
                      decoding="async"
                      className="h-32 w-32 object-cover transition-transform duration-500 group-hover:scale-110 sm:h-40 sm:w-40 lg:h-44 lg:w-44"
                    />
                  </div>
                  <span className="absolute bottom-0 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-cyan-brand text-royal-950 shadow ring-2 ring-white lg:h-11 lg:w-11">
                    <Check className="h-4 w-4 lg:h-5 lg:w-5" aria-hidden="true" strokeWidth={3.5} />
                  </span>
                  {/* zoom hint on hover (desktop) */}
                  <span className="pointer-events-none absolute inset-0 hidden items-center justify-center rounded-full bg-royal-950/35 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:flex">
                    <ZoomIn className="h-9 w-9 text-white drop-shadow" aria-hidden="true" />
                  </span>
                </button>
                <figcaption className="mt-5 text-sm font-bold uppercase tracking-[0.1em] text-royal-800 transition-colors group-hover:text-royal-600 sm:text-[15px]">
                  {scrap.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Fullscreen lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-royal-950/90 p-4 backdrop-blur-sm sm:p-8"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`${active.name} scrap photo`}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close full image"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/30 sm:right-6 sm:top-6"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
          <figure
            className="flex max-h-full max-w-4xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.img}
              alt={active.alt}
              className="max-h-[82vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <figcaption className="mt-4 rounded-full bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.15em] text-white">
              {active.name}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
