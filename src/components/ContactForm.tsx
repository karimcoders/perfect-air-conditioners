import { useState, type FormEvent } from "react";
import { BadgeCheck, CheckCircle2, Phone, Send, Zap } from "lucide-react";
import Reveal from "./Reveal";
import { PHONE_DISPLAY, PHONE_TEL } from "../lib/site";
import { cn } from "../utils/cn";

const SCRAP_OPTIONS = [
  "Old / Scrap AC",
  "Copper",
  "Aluminium",
  "Iron / Brass / Steel",
  "Motors / Compressors",
  "Other Metal Scrap",
];

type Errors = { name?: string; phone?: string };

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [material, setMaterial] = useState("");
  const [details, setDetails] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^\d{10}$/.test(phone.replace(/\s/g, "")))
      next.phone = "Enter a valid 10-digit phone number.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  };

  const inputBase =
    "w-full rounded-xl border bg-white px-4 py-3 text-sm font-medium text-ink placeholder:text-slate-blue/60 transition-all focus:border-azure focus:ring-2 focus:ring-azure/30 focus:outline-none";

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-20 lg:py-24">
      <div
        className="dot-grid pointer-events-none absolute left-0 top-0 h-64 w-64 opacity-50"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-[1200px] items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        {/* Left — pitch */}
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-azure-deep">
            Get A Quote
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-[40px] sm:leading-[1.1]">
            Tell us what you&apos;re selling.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-slate-blue">
            Share your details and we&apos;ll get back to you with a competitive price. Prefer to
            talk right away? A single call is all it takes.
          </p>

          <ul className="mt-8 space-y-3">
            {["Best Prices", "Instant Payment", "Fast Service"].map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm font-bold text-ink">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-azure/12 text-azure-deep">
                  <BadgeCheck size={16} aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <a
            href={PHONE_TEL}
            className="mt-9 inline-flex items-center gap-2.5 rounded-xl border-2 border-royal/20 bg-white px-6 py-3.5 text-base font-bold text-royal transition-all hover:-translate-y-0.5 hover:border-royal hover:bg-ice"
          >
            <Phone size={18} aria-hidden="true" />
            CALL {PHONE_DISPLAY}
          </a>
        </Reveal>

        {/* Right — form card */}
        <Reveal delay={120}>
          <div className="rounded-[26px] border border-royal/10 bg-mist p-7 shadow-[0_30px_70px_-32px_rgba(8,29,82,0.45)] sm:p-9">
            {submitted ? (
              <div className="flex flex-col items-center py-10 text-center" role="status">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-azure/15 text-azure-deep">
                  <CheckCircle2 size={34} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-2xl font-extrabold text-ink">
                  Thanks, {name.trim().split(" ")[0]}!
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-blue">
                  We&apos;ve noted your details
                  {material ? ` for ${material.toLowerCase()}` : ""}. For the fastest response and
                  today&apos;s best price, give us a quick call.
                </p>
                <a
                  href={PHONE_TEL}
                  className="mt-7 inline-flex items-center gap-2.5 rounded-xl bg-royal px-7 py-4 text-base font-bold text-white shadow-[0_18px_36px_-14px_rgba(23,71,181,0.7)] transition-all hover:-translate-y-0.5 hover:bg-royal-deep"
                >
                  <Phone size={18} aria-hidden="true" />
                  CALL NOW — {PHONE_DISPLAY}
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setName("");
                    setPhone("");
                    setMaterial("");
                    setDetails("");
                  }}
                  className="mt-4 text-xs font-semibold text-slate-blue underline-offset-4 transition-colors hover:text-royal hover:underline"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-azure-deep">
                  <Zap size={14} aria-hidden="true" />
                  Quick Enquiry
                </div>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="cf-name" className="mb-1.5 block text-sm font-semibold text-ink">
                      Your Name <span className="text-royal">*</span>
                    </label>
                    <input
                      id="cf-name"
                      type="text"
                      autoComplete="name"
                      placeholder="e.g. Rahul Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      aria-invalid={!!errors.name}
                      className={cn(inputBase, errors.name ? "border-red-400" : "border-royal/15")}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs font-semibold text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="cf-phone" className="mb-1.5 block text-sm font-semibold text-ink">
                      Phone Number <span className="text-royal">*</span>
                    </label>
                    <input
                      id="cf-phone"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel"
                      placeholder="10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      aria-invalid={!!errors.phone}
                      className={cn(inputBase, errors.phone ? "border-red-400" : "border-royal/15")}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs font-semibold text-red-500">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="cf-material" className="mb-1.5 block text-sm font-semibold text-ink">
                    What are you selling?
                  </label>
                  <select
                    id="cf-material"
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                    className={cn(inputBase, "border-royal/15", !material && "text-slate-blue/60")}
                  >
                    <option value="">Select a category</option>
                    {SCRAP_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-5">
                  <label htmlFor="cf-details" className="mb-1.5 block text-sm font-semibold text-ink">
                    Quantity / Details <span className="font-normal text-slate-blue">(optional)</span>
                  </label>
                  <textarea
                    id="cf-details"
                    rows={4}
                    placeholder="e.g. 2 split ACs (1.5 ton) + some copper pipe"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className={cn(inputBase, "resize-none border-royal/15")}
                  />
                </div>

                <button
                  type="submit"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-royal px-7 py-4 text-base font-bold text-white shadow-[0_18px_36px_-14px_rgba(23,71,181,0.7)] transition-all hover:-translate-y-0.5 hover:bg-royal-deep"
                >
                  <Send size={18} aria-hidden="true" />
                  REQUEST A CALLBACK
                </button>
                <p className="mt-3 text-center text-[11px] font-medium text-slate-blue">
                  No spam — we only use your number to discuss your scrap.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
