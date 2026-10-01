// Cuts the display out of the iPhone render so it can sit on top of the
// screenshot. Its anti-aliased inner edge stays clean when a phone is rotated,
// where a CSS mask's edge comes out jagged in Chrome and Safari.
// Usage: node scripts/cut-phone-display.mjs
import sharp from 'sharp';

const source = new URL('../src/assets/devices/iphone-16-pro.png', import.meta.url).pathname;
const target = new URL('../src/assets/devices/iphone-16-pro-frame.png', import.meta.url).pathname;

// The display outline, minus the Dynamic Island, in the render's pixels.
const display =
  'M 64.01 2149.71 C 44 2113.96 44 2066.29 44 1970.94 L 43.99 296.04 C 43.99 200.70 43.99 153.03 64.01 117.28 C 78.16 92.02 99.02 71.16 124.28 57.01 C 160.03 37 207.70 37 303.04 37 L 793.95 37.00 C 889.29 37.00 936.96 37.00 972.71 57.01 C 997.97 71.16 1018.83 92.02 1032.98 117.28 C 1053 153.03 1053 200.70 1053 296.05 L 1053 1970.94 C 1053 2066.29 1053 2113.96 1032.98 2149.71 C 1018.83 2174.97 997.97 2195.83 972.71 2209.98 C 936.96 2230 889.29 2230 793.95 2230 L 303.05 2230 C 207.70 2230 160.03 2230 124.28 2209.98 C 99.02 2195.83 78.16 2174.97 64.01 2149.71 Z ' +
  'M 437 163.02 C 412.14 163.02 392 142.87 392 118.02 C 392 93.17 412.14 73.02 437 73.02 L 660 73.02 C 684.85 73.02 705 93.17 705 118.02 C 705 142.87 684.85 163.02 660 163.02 L 437 163.02 Z';

const { width, height } = await sharp(source).metadata();
const hole = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><path fill-rule="evenodd" d="${display}"/></svg>`,
);

await sharp(source)
  .composite([{ input: hole, blend: 'dest-out' }])
  .png({ compressionLevel: 9 })
  .toFile(target);
console.log(`wrote ${target}`);
