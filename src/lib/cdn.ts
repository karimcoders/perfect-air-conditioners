// Brand + photo assets.
// Logo lives in the project's own GitHub repository (client's exact Logo.png).
const RAW =
  "https://raw.githubusercontent.com/karimcoders/perfect-air-conditioners/main/src/assets";

export const LOGO_URL = `${RAW}/Logo.png`;
export const FAVICON_URL = `${RAW}/favicon.png`;

export const HERO_AC_PILE = `${RAW}/images/hero-ac-pile.jpg`;

// Scrap category photos — clear, recognisable metal subjects (full photos;
// the circle crop is handled in CSS).
const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600`;

export const SCRAP_IMAGES = {
  copper: px(28772266), // pile of warm copper-toned pipes
  aluminium: px(6575655), // crumpled shiny aluminium
  iron: px(11255038), // heavy rusted iron surface
  brass: px(38028966), // brass-toned industrial pipe fitting
  motors: px(12093056), // electric motor mechanical parts
  compressors: px(29452977), // HVAC compressor / condenser unit
  steel: px(35898707), // steel structural lattice
  mixed: px(9742093), // mixed metal scrap pile
} as const;
