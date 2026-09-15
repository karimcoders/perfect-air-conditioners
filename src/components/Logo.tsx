import { useState } from "react";
import { cn } from "../utils/cn";
import { LOGO_URL } from "../lib/cdn";

type LogoProps = {
  /** height utility for the lockup, e.g. "h-11" (navbar) / "h-24" (footer) */
  className?: string;
  /** wraps the lockup in a white plate for dark backgrounds */
  dark?: boolean;
};

/** Compact inline fallback shown only if the hosted logo ever fails to load. */
function FallbackLogo() {
  return (
    <span className="inline-flex items-center gap-2.5 leading-none">
      <svg width="42" height="42" viewBox="0 0 96 96" aria-hidden="true" className="shrink-0">
        <circle cx="48" cy="48" r="44" fill="none" stroke="#37BDF2" strokeWidth="6" />
        <circle cx="48" cy="48" r="36" fill="#1B3FA6" />
        <path
          d="M38 35l7-6 7 6M45 29v13M58 42l6 7-7 6M64 49H51M45 63l-7-6 6-7M38 57h13"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M32 66c4 5 20 5 24 0" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
        <path d="M66 26l1.5 3.4 3.4 1.5-3.4 1.5-1.5 3.4-1.5-3.4-3.4-1.5 3.4-1.5z" fill="#ffffff" />
      </svg>
      <span className="flex flex-col gap-[3px]">
        <span className="text-[12px] font-extrabold tracking-[0.2em] text-royal-700">PERFECT</span>
        <span className="text-[9px] font-black tracking-[0.13em] text-[#141414]">SCRAP DEALS</span>
      </span>
    </span>
  );
}

/**
 * Perfect Scrap Deals — the client's EXACT uploaded logo (hosted in the
 * project repo). Renders with a small inline fallback for safety.
 */
export default function Logo({ className = "h-12", dark = false }: LogoProps) {
  const [failed, setFailed] = useState(false);

  return (
    <span
      className={cn(
        "inline-flex items-center",
        dark && "rounded-2xl bg-white px-4 py-2.5 shadow-[0_16px_40px_-14px_rgb(0_0_0/0.6)]"
      )}
    >
      {failed ? (
        <FallbackLogo />
      ) : (
        <img
          src={LOGO_URL}
          alt="Perfect Scrap Deals logo"
          onError={() => setFailed(true)}
          className={cn("w-auto object-contain", className)}
          width={512}
          height={446}
          loading="eager"
          decoding="async"
        />
      )}
    </span>
  );
}
