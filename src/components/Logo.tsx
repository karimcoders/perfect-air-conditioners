import logoUrl from "../assets/logo.jpg";
import { cn } from "../utils/cn";

type LogoProps = {
  /** Render the PERFECT / SCRAP DEALS wordmark under the emblem */
  wordmark?: boolean;
  /** Dark-background variant — places the lockup on a white plate */
  light?: boolean;
  /** Emblem size in px (the whole lockup scales from this) */
  size?: number;
  className?: string;
};

/**
 * Client's exact brand lockup: the circular emblem (cyan ring, royal disc
 * with recycle-in-hand mark, pile of scrap AC units) with the words
 * PERFECT / SCRAP DEALS underneath, matching the supplied logo artwork.
 */
export default function Logo({ wordmark = true, light = false, size = 42, className }: LogoProps) {
  return (
    <span
      className={cn(
        "inline-flex flex-col items-center leading-none",
        light && "rounded-2xl bg-white px-2.5 py-2 shadow-[0_10px_26px_-10px_rgba(0,0,0,0.6)]",
        className
      )}
    >
      <img
        src={logoUrl}
        alt="Perfect Scrap Deals logo — pile of scrap air conditioners with a recycling symbol"
        width={size}
        height={size}
        className="block h-auto w-auto select-none object-contain"
        style={{ width: size, height: size }}
        draggable={false}
      />
      {wordmark && (
        <span className="mt-1 flex flex-col items-center leading-none">
          <span
            className="font-extrabold text-royal"
            style={{ fontSize: Math.round(size * 0.32), letterSpacing: "0.16em" }}
          >
            PERFECT
          </span>
          <span
            className="mt-[3px] font-extrabold text-navy-ink"
            style={{ fontSize: Math.round(size * 0.27), letterSpacing: "0.1em" }}
          >
            SCRAP DEALS
          </span>
        </span>
      )}
    </span>
  );
}
