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
  brass: `${RAW}/images/scrap-brass.png`, // real pile of old brass taps/fittings (client photo)
  motors: `${RAW}/images/scrap-motors.png`, // client photo — electric motors scrap
  compressors: px(29452977), // HVAC compressor / condenser unit
  steel: `${RAW}/images/scrap-steel.png`, // client photo — steel scrap
  mixed: px(9742093), // mixed metal scrap pile
} as const;
