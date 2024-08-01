/**
 * Tints a colour by mixing it with another colour.
 *
 * @param {string} colour1 - The base colour to be tinted.
 * @param {string} colour2 - The colour to mix with the base colour.
 * @param {number} percentage - The percentage of the mixing colour to add to the base colour.
 * @return {string} The tinted colour.
 */
export function tintColour(
  colour1: string,
  colour2: string,
  percentage: number
) {
  const rgb1 = hexToRgb(colour1);
  const rgb2 = hexToRgb(colour2);

  const r = Math.round(rgb1.r + (rgb2.r - rgb1.r) * percentage);
  const g = Math.round(rgb1.g + (rgb2.g - rgb1.g) * percentage);
  const b = Math.round(rgb1.b + (rgb2.b - rgb1.b) * percentage);

  return rgbToHex(r, g, b);
}

export function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function rgbToHex(r: number, g: number, b: number) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
