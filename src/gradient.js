// Small helpers for working with the datasets in this repo. No dependencies.

/** Build a CSS linear-gradient() string from stops [{ color, pos }]. */
export function toCss(stops, angle = 90) {
  const parts = stops.map((s) => `${s.color} ${s.pos}%`).join(", ");
  return `linear-gradient(${angle}deg, ${parts})`;
}

/** "#rrggbb" -> [r, g, b] */
export function hexToRgb(hex) {
  let h = hex.replace(/^#/, "");
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const n = parseInt(h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

/** [r, g, b] -> "#rrggbb" */
export function rgbToHex([r, g, b]) {
  const c = (v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0");
  return `#${c(r)}${c(g)}${c(b)}`;
}

/** Split a 24-char palette code into four hex colors. */
export function codeToColors(code) {
  return (code.match(/.{6}/g) || []).map((h) => `#${h}`);
}
