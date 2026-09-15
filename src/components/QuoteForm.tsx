import { useRef, useState, type FormEvent } from "react";
import { BadgeCheck, CheckCircle2, Clock, PhoneCall, Send, Zap } from "lucide-react";
import Reveal from "./Reveal";
import { PHONE_DISPLAY, PHONE_TEL } from "../constants";

const SCRAP_OPTIONS = [
  "Old / Dead AC (Split)",
  "Old / Dead AC (Window)",
  "AC Outdoor Unit / Compressor",
  "Copper Scrap",
  "Aluminium Scrap",
  "Iron / Steel Scrap",
  "Brass Scrap",
  "Motors",
  "Other Metal Scrap",
] as const;

const PERKS = [
  { icon: BadgeCheck, text: "Best Prices" },
  { icon: Zap, text: "Instant Payment" },
  { icon: Clock, text: "Fast Service" },
] as const;

const inputClass =
  "w-full rounded-xl border border-royal-200 bg-mist/60 px-4 py-3.5 text-sm text-navy placeholder:text-ink/35 transition-all duration-200 focus:border-royal-600 focus:bg-white focus:ring-4 focus:ring-royal-600/10";

export default function QuoteForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState<string>(SCRAP_OPTIONS[0]);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [clientName, setClientName] = useState("");
  const [clientCategory, setClientCategory] = useState("");
  const statusRef = useRef<HTMLDivElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Normalise + validate the phone (digits only, accept leading + and 00)
    const digits = phone.replace(/[\s-]/g, "");
    const valid = /^(\+?\d{10,13}|00\d{10,13})$/.test(digits);
    if (!name.trim() || !valid) {
      e.currentTarget.reportValidity();
      return;
    }
    setClientName(name.trim().split(" ")[0] || "there");
    setClientCategory(category);
    setSubmitted(true);
    // Move focus to the confirmation for screen-reader + keyboard users
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  function reset() {
    setSubmitted(false);
    setName("");
    setPhone("");
    setCategory(SCRAP_OPTIONS[0]);
    setMessage("");
  }

  return (
    <section id="get-quote" className="scroll-mt-24 bg-mist py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          {/* -------- Left pitch -------- */}
          <Reveal className="lg:sticky lg:top-28">
            <p className="text-[13.5px] font-bold tracking-[0.2em] text-cyan-brand">GET A QUOTE</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Request a callback.
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink/60">
              Fill in your details and call us to confirm — get the best price for your
              old AC or metal scrap today.
            </p>

            <a
              href={PHONE_TEL}
              className="group mt-8 flex max-w-md items-center gap-4 rounded-2xl border border-royal-100 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover"
              aria-label={`Call now at ${PHONE_DISPLAY}`}
            >
              <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-royal-600 text-white shadow-[0_12px_24px_-8px_rgb(28_73_197/0.7)] transition-transform duration-300 group-hover:scale-105">
                <PhoneCall className="h-6 w-6" aria-hidden="true" strokeWidth={2.2} />
              </span>
              <span className="leading-tight">
                <span className="block text-[10.5px] font-bold tracking-[0.2em] text-ink/50">
                  PREFER TO TALK? CALL NOW
                </span>
                <span className="block text-2xl font-extrabold tabular-nums tracking-tight text-royal-800">
                  {PHONE_DISPLAY}
                </span>
              </span>
            </a>

            <ul className="mt-8 flex flex-wrap gap-3">
              {PERKS.map((perk) => (
                <li
                  key={perk.text}
                  className="inline-flex items-center gap-2 rounded-full border border-royal-100 bg-white px-4 py-2.5 text-[11px] font-bold tracking-[0.12em] text-royal-800 shadow-card"
                >
                  <perk.icon className="h-4 w-4 text-cyan-brand" aria-hidden="true" strokeWidth={2.4} />
                  {perk.text.toUpperCase()}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* -------- Form card -------- */}
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-[28px] border border-royal-100 bg-white p-6 shadow-hero sm:p-9">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-royal-600 via-cyan-brand to-royal-600"
              />

              {submitted ? (
                <div ref={statusRef} tabIndex={-1} role="status" className="py-6 text-center sm:py-10">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-brand/15 text-royal-700">
                    <CheckCircle2 className="h-9 w-9" aria-hidden="true" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-navy">
                    Thanks, {clientName}!
                  </h3>
                  <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ink/60">
                    Your request for <span className="font-bold text-royal-700">{clientCategory}</span>{" "}
                    is ready. Call us now and mention your details to get an instant quote.
                  </p>
                  <a
                    href={PHONE_TEL}
                    className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-royal-600 px-7 py-4 text-sm font-bold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-royal-700 sm:w-auto"
                    aria-label={`Call now at ${PHONE_DISPLAY}`}
                  >
                    <PhoneCall className="h-4.5 w-4.5" aria-hidden="true" strokeWidth={2.5} />
                    CALL {PHONE_DISPLAY}
                  </a>
                  <div>
                    <button
                      type="button"
                      onClick={reset}
                      className="mt-5 text-xs font-bold tracking-[0.14em] text-royal-600 underline-offset-4 transition-colors hover:text-royal-800 hover:underline"
                    >
                      SUBMIT ANOTHER REQUEST
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate={false}>
                  <h3 className="text-lg font-extrabold tracking-tight text-navy">
                    Tell us what you want to sell
                  </h3>
                  <p className="mt-1.5 text-[13px] text-ink/55">
                    Takes less than a minute.
                  </p>

                  <div className="mt-6 grid gap-4.5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="qf-name" className="mb-1.5 block text-[12px] font-bold tracking-wide text-navy">
                        Your Name <span aria-hidden="true" className="text-royal-600">*</span>
                      </label>
                      <input
                        id="qf-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rahul Kumar"
                        maxLength={80}
                        autoCapitalize="words"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="qf-phone" className="mb-1.5 block text-[12px] font-bold tracking-wide text-navy">
                        Phone Number <span aria-hidden="true" className="text-royal-600">*</span>
                      </label>
                      <input
                        id="qf-phone"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        required
                        minLength={10}
                        maxLength={15}
                        pattern="[0-9+\-\s]{10,15}"
                        title="Enter a valid 10 digit phone number"
                        autoCapitalize="off"
                        spellCheck={false}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 98765 43210"
                        className={inputClass}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="qf-category" className="mb-1.5 block text-[12px] font-bold tracking-wide text-navy">
                        What are you selling? <span aria-hidden="true" className="text-royal-600">*</span>
                      </label>
                      <select
                        id="qf-category"
                        name="category"
                        required
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className={inputClass}
                      >
                        {SCRAP_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="qf-message" className="mb-1.5 block text-[12px] font-bold tracking-wide text-navy">
                        Details <span className="font-medium text-ink/40">(optional)</span>
                      </label>
                      <textarea
                        id="qf-message"
                        name="message"
                        rows={3}
                        value={message}
                        maxLength={600}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="e.g. 2 old split ACs, 1 window AC + some copper pipe"
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="group mt-6 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-royal-600 px-7 py-4 text-sm font-bold tracking-wide text-white shadow-[0_18px_38px_-14px_rgb(28_73_197/0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-royal-700"
                  >
                    <Send
                      className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                      strokeWidth={2.5}
                    />
                    REQUEST A CALLBACK
                  </button>
                  <p className="mt-4 text-center text-[11px] leading-relaxed text-ink/45">
                    Or call directly:{" "}
                    <a href={PHONE_TEL} className="font-bold text-royal-700 hover:underline">
                      {PHONE_DISPLAY}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
