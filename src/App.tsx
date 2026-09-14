import SiteHeader from "./components/SiteHeader";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import WhatWeBuy from "./components/WhatWeBuy";
import PriceOffer from "./components/PriceOffer";
import ScrapTypes from "./components/ScrapTypes";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactForm from "./components/ContactForm";
import FinalCTA from "./components/FinalCTA";
import SiteFooter from "./components/SiteFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <SiteHeader />
      <main>
        <Hero />
        <TrustStrip />
        <WhatWeBuy />
        <PriceOffer />
        <ScrapTypes />
        <HowItWorks />
        <WhyChooseUs />
        <ContactForm />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
