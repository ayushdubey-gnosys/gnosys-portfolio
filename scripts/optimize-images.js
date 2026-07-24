import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.resolve(__dirname, '../src/assets');

async function optimizeImages(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await optimizeImages(fullPath);
    } else if (/\.(png|jpe?g)$/i.test(entry.name)) {
      const ext = path.extname(entry.name);
      const webpPath = fullPath.replace(new RegExp(`${ext}$`, 'i'), '.webp');
      const avifPath = fullPath.replace(new RegExp(`${ext}$`, 'i'), '.avif');

      // Convert to WebP
      if (!fs.existsSync(webpPath)) {
        console.log(`Optimizing: ${entry.name} -> .webp`);
        await sharp(fullPath).webp({ quality: 80 }).toFile(webpPath);
      }

      // We skip AVIF for now to keep it simple, but you can enable it:
      // if (!fs.existsSync(avifPath)) {
      //   console.log(`Optimizing: ${entry.name} -> .avif`);
      //   await sharp(fullPath).avif({ quality: 75 }).toFile(avifPath);
      // }
    }
  }
}

async function run() {
  console.log('Starting image optimization...');
  try {
    await optimizeImages(ASSETS_DIR);
    console.log('Done! Now update your imports in projects.js to point to .webp extensions.');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

run();
