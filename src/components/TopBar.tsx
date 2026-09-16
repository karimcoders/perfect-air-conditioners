import { PhoneCall, Zap } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "../constants";

export default function TopBar() {
  return (
    <div className="bg-royal-900 text-white">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-3 px-5 py-2 sm:px-8">
        <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] sm:text-xs">
          <Zap className="h-3.5 w-3.5 text-cyan-brand" aria-hidden="true" strokeWidth={2.5} />
          <span className="truncate">OLD AC? TURN IT INTO CASH.</span>
        </p>
        <a
          href={PHONE_TEL}
          className="flex shrink-0 items-center gap-2 rounded-full text-[11px] font-semibold tracking-wide text-cyan-soft transition-colors hover:text-white sm:text-xs"
          aria-label={`Call Perfect Scrap Deals at ${PHONE_DISPLAY}`}
        >
          <PhoneCall className="h-3.5 w-3.5" aria-hidden="true" strokeWidth={2.5} />
          <span className="tabular-nums">Call: {PHONE_DISPLAY}</span>
        </a>
      </div>
    </div>
  );
}
