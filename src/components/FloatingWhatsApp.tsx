/**
 * Floating WhatsApp chat button — always visible, bottom-right on desktop,
 * stacked above the mobile CALL bar so the two never overlap.
 */
const WHATSAPP_NUMBER = "918498846505";
const WHATSAPP_TEXT = encodeURIComponent(
  "Hi Perfect Scrap Deals, I want to sell old AC / metal scrap. Please share details."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Perfect Scrap Deals on WhatsApp"
      className="group fixed bottom-24 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.7)] ring-4 ring-white/60 transition-transform duration-300 hover:scale-110 hover:bg-[#1da851] lg:bottom-6 lg:right-6 lg:h-15 lg:w-15"
    >
      {/* soft pulse ring */}
      <span
        aria-hidden="true"
        className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30 [animation-duration:2.4s]"
      />
      <svg
        viewBox="0 0 32 32"
        className="relative h-7 w-7"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.001 3.199c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.6 4.46 1.73 6.4L3.2 28.8l6.6-1.7a12.74 12.74 0 0 0 6.2 1.6h.01c7.07 0 12.8-5.73 12.8-12.8 0-3.42-1.33-6.64-3.75-9.06a12.7 12.7 0 0 0-9.05-3.64Zm0 23.2h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.01 1.05 1.07-3.91-.25-.4a10.62 10.62 0 0 1-1.64-5.73c0-5.87 4.78-10.65 10.65-10.65 2.84 0 5.52 1.11 7.53 3.12a10.58 10.58 0 0 1 3.11 7.53c0 5.87-4.77 10.7-10.66 10.7Zm5.84-7.97c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.97-2.34-.25-.62-.51-.54-.71-.55l-.6-.01c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.15 3.08 1.31 3.3.16.21 2.26 3.45 5.48 4.84.77.33 1.37.53 1.84.68.77.24 1.47.21 2.03.13.62-.09 1.89-.77 2.16-1.52.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z" />
      </svg>
      {/* tooltip on desktop hover */}
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-royal-900 px-3 py-2 text-xs font-bold tracking-wide text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 lg:block">
        Chat with us
      </span>
    </a>
  );
}
