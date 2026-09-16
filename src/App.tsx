import { useEffect, useState } from "react";
import { PhoneCall } from "lucide-react";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import WhatWeBuy from "./components/WhatWeBuy";
import PriceOffer from "./components/PriceOffer";
import ScrapTypes from "./components/ScrapTypes";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import QuoteForm from "./components/QuoteForm";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import { PHONE_DISPLAY, PHONE_TEL } from "./constants";
import { cn } from "./utils/cn";

/** Conversion-focused floating call button — mobile only, appears after the hero. */
function FloatingCallButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 240;
      setShow(window.scrollY > 520 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={cn(
        "fixed inset-x-4 bottom-4 z-40 transition-all duration-500 lg:hidden",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-24 opacity-0"
      )}
    >
      <a
        href={PHONE_TEL}
        tabIndex={show ? 0 : -1}
        className="flex items-center justify-center gap-3 rounded-2xl bg-royal-600 px-6 py-4 text-sm font-bold tracking-wide text-white shadow-[0_20px_44px_-12px_rgb(13_37_99/0.7)] ring-1 ring-white/20 transition-colors hover:bg-royal-700"
        aria-label={`Call now at ${PHONE_DISPLAY}`}
      >
        <PhoneCall className="h-4.5 w-4.5" aria-hidden="true" strokeWidth={2.5} />
        CALL NOW — {PHONE_DISPLAY}
      </a>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[100] rounded-xl bg-royal-800 px-5 py-3 text-sm font-bold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>

      <TopBar />
      <Navbar />

      <main id="main">
        <Hero />
        <TrustStrip />
        <HowItWorks />
        <PriceOffer />
        <WhatWeBuy />
        <ScrapTypes />
        <WhyChooseUs />
        <QuoteForm />
        <FinalCTA />
      </main>

      <Footer />
      <FloatingCallButton />
      <FloatingWhatsApp />
    </>
  );
}
