// Brand + photo assets.
// Logo lives in the project's own GitHub repository (client's exact Logo.png).
const RAW =
  "https://raw.githubusercontent.com/karimcoders/perfect-air-conditioners/main/src/assets";

export const LOGO_URL = `${RAW}/Logo.png`;
export const FAVICON_URL = `${RAW}/favicon.png`;

export const HERO_AC_PILE = `${RAW}/images/hero-ac-pile.jpg`;

// Scrap category photos — client-supplied real scrap photos, named by category.
const scrap = (name: string) => `${RAW}/images/${name}`;

export const SCRAP_IMAGES = {
  copper: scrap("scrap-copper.jpg"),
  aluminium: (() => {
    const id = 28268141; // rows of aluminium can lids (stock)
    return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600`;
  })(),
  iron: scrap("scrap-iron.jpg"),
  brass: scrap("scrap-brass.jpg"),
  motors: scrap("scrap-motors.jpg"),
  compressors: (() => {
    const id = 29452977; // HVAC compressor / condenser unit (stock)
    return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600`;
  })(),
  steel: scrap("scrap-steel.jpg"),
  mixed: (() => {
    const id = 9742093; // mixed metal scrap pile (stock)
    return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600`;
  })(),
} as const;
