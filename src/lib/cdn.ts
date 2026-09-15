// Brand + photo assets.
// Logo lives in the project's own GitHub repository (client's exact Logo.png).
const RAW =
  "https://raw.githubusercontent.com/karimcoders/perfect-air-conditioners/main/src/assets";

export const LOGO_URL = `${RAW}/Logo.png`;
export const FAVICON_URL = `${RAW}/favicon.png`;

export const HERO_AC_PILE = `${RAW}/images/hero-ac-pile.jpg`;

// Scrap category photos — the EXACT Option A photos (same Pexels IDs).
const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600`;

export const SCRAP_IMAGES = {
  copper: px(9432572),
  aluminium: px(28268141),
  iron: px(23482502),
  brass: px(37441612),
  motors: px(12093056),
  compressors: px(29452977),
  steel: px(35898707),
  mixed: px(9742093),
} as const;
