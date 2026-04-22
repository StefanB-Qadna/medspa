// Brand color hex values — mirror of the --color-* tokens in
// src/app/design-tokens.css. Used at runtime where a JS hex string is
// required (WebGL shader inputs, inline SVG filter color stops) and the
// CSS variable cannot be consumed directly.
// If you change these, update design-tokens.css too (and vice versa).
export const BRAND = {
  cream: "#FDFBF7",
  linen: "#F0E6D8",
  warmDark: "#3D3530",
  warmDarker: "#2A2420",
  brass: "#B08D57",
  brassDark: "#9A7A48",
  brassLight: "#C8A876",
  brassLabel: "#8C6937",
  forest: "#4E6349",
} as const;
