// Brand + photo assets.
// Logo lives in the project's own GitHub repository (client's exact Logo.png).
const RAW =
  "https://raw.githubusercontent.com/karimcoders/perfect-air-conditioners/main/src/assets";

export const LOGO_URL = `${RAW}/Logo.png`;
export const FAVICON_URL = `${RAW}/favicon.png`;

export const HERO_AC_PILE = `${RAW}/images/hero-ac-pile.jpg`;

// Scrap category photos — real scrap-yard / recycling photos (Pexels, free).
const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600`;

export const SCRAP_IMAGES = {
  copper: px(5279317), // tangled copper wire ready for recycling
  aluminium: px(28268141), // rows of aluminium can lids
  iron: px(21470313), // heap of rusty iron / auto parts in junkyard
  brass: px(14593018), // pile of golden brass screws & nuts
  motors: px(36772465), // heap of old mechanical motor gears in junkyard
  compressors: px(29452977), // HVAC compressor / condenser unit
  steel: px(9784001), // aerial view of scrap steel piles in a junkyard
  mixed: px(9742093), // mixed metal scrap pile
} as const;
