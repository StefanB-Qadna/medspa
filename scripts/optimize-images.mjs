#!/usr/bin/env node
// One-shot image optimizer. Regenerates public/images/*.jpg in place
// at max 2400px width, mozjpeg q=80, EXIF stripped. Run with:
//   node scripts/optimize-images.mjs
// Or:
//   npm run optimize-images

import { readdir, stat, rename } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const IMAGES_DIR = new URL("../public/images/", import.meta.url).pathname;
const MAX_WIDTH = 2400;
const JPEG_QUALITY = 80;

const fmt = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
};

const optimize = async (filename) => {
  const src = join(IMAGES_DIR, filename);
  const tmp = `${src}.optimizing`;

  const before = (await stat(src)).size;
  const metadata = await sharp(src).metadata();
  const resize = metadata.width && metadata.width > MAX_WIDTH
    ? { width: MAX_WIDTH, withoutEnlargement: true }
    : undefined;

  let pipeline = sharp(src).rotate(); // auto-orient from EXIF
  if (resize) pipeline = pipeline.resize(resize);
  await pipeline
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    .withMetadata({}) // strip EXIF (empty metadata object)
    .toFile(tmp);

  const after = (await stat(tmp)).size;
  await rename(tmp, src);

  const pct = ((1 - after / before) * 100).toFixed(1);
  console.log(`${filename.padEnd(28)} ${fmt(before).padStart(10)} → ${fmt(after).padStart(10)}  (-${pct}%)`);
};

const run = async () => {
  const files = await readdir(IMAGES_DIR);
  const jpegs = files.filter((f) => /\.jpe?g$/i.test(f));
  if (jpegs.length === 0) {
    console.error(`No JPEGs found in ${IMAGES_DIR}`);
    process.exit(1);
  }
  console.log(`Optimizing ${jpegs.length} image(s) in ${IMAGES_DIR}\n`);
  for (const f of jpegs) {
    try {
      await optimize(f);
    } catch (err) {
      console.error(`FAILED: ${f} — ${err.message}`);
      process.exitCode = 1;
    }
  }
};

run();
