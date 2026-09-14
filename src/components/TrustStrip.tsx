import { IndianRupee, ShieldCheck, Wallet, TrendingUp } from "lucide-react";
import Reveal from "./Reveal";

const STATS = [
  { icon: IndianRupee, value: "₹4,000–₹15,000", label: "AC Price Range" },
  { icon: ShieldCheck, value: "All Brands", label: "Old & Scrap ACs" },
  { icon: Wallet, value: "Instant Payment", label: "Fast & Simple" },
  { icon: TrendingUp, value: "Best Prices", label: "Fast Service" },
];

export default function TrustStrip() {
  return (
    <section aria-label="Why sellers choose Perfect Air Conditioners" className="relative z-10 bg-mist pb-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <Reveal>
          <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-royal/10 bg-white shadow-[0_24px_60px_-30px_rgba(8,29,82,0.4)] sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex items-center gap-4 px-6 py-6 transition-colors hover:bg-ice/60 ${
                  i > 0 ? "border-t border-royal/10 sm:border-t-0 sm:border-l" : ""
                } ${i === 2 ? "sm:border-t sm:border-l-0 lg:border-t-0 lg:border-l" : ""} ${
                  i === 3 ? "sm:border-t lg:border-t-0" : ""
                }`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-azure/12 text-azure-deep">
                  <stat.icon size={22} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-base font-extrabold leading-tight text-ink sm:text-[17px]">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-blue">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
