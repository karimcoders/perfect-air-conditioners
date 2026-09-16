// Site / contact configuration

// Where lead notifications are delivered.
export const LEAD_EMAILS = [
  "perfectscrapdeals@gmail.com", // business inbox
  "techncalkarimullah@gmail.com", // testing / technical copy
] as const;

export const BUSINESS_EMAIL = LEAD_EMAILS[0];

// Key-free form backend: https://formsubmit.co — no signup, no API key.
// On the FIRST real submission it sends a one-time activation email that
// must be confirmed once, after that every lead is emailed automatically.
export const FORM_ENDPOINT = `https://formsubmit.co/ajax/${BUSINESS_EMAIL}`;
