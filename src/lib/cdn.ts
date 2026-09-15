// Brand + photo assets live in the project's own GitHub repository.
// LOGO_URL is the client's EXACT uploaded logo file ("Logo PNG.png", ~521 KB).
const RAW =
  "https://raw.githubusercontent.com/karimcoders/perfect-air-conditioners/main/src/assets";

export const LOGO_URL = `${RAW}/Logo.png`;
export const FAVICON_URL = `${RAW}/favicon.png`;

export const HERO_AC_PILE = `${RAW}/images/hero-ac-pile.jpg`;

export const SCRAP_IMAGES = {
  copper: `${RAW}/images/copper.jpg`,
  aluminium: `${RAW}/images/aluminium.jpg`,
  iron: `${RAW}/images/iron.jpg`,
  brass: `${RAW}/images/brass.jpg`,
  motors: `${RAW}/images/motors.jpg`,
  compressors: `${RAW}/images/compressors.jpg`,
  steel: `${RAW}/images/steel.jpg`,
  mixed: `${RAW}/images/other-metal-scrap.jpg`,
} as const;
