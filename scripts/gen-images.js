// scripts/gen-images.js
import sharp from 'sharp';
import fg from 'fast-glob';
import path from 'path';
import fs from 'fs';
import { watch } from 'chokidar';

const srcDir = path.resolve('src/img');
const distDir = path.resolve('public/img');

async function processImage(file) {
  const inputPath = path.join(srcDir, file);
  const outDir = path.join(distDir, path.dirname(file));
  fs.mkdirSync(outDir, { recursive: true });

  // Оригинал
  fs.copyFileSync(inputPath, path.join(outDir, path.basename(file)));

  // webp
  const webpPath = path.join(outDir, path.basename(file, path.extname(file)) + '.webp');
  if (!fs.existsSync(webpPath)) {
    await sharp(inputPath)
      .webp({ quality: 75 })
      .toFile(webpPath);
    console.log('Сгенерировано webp:', webpPath);
  }

  // avif
  const avifPath = path.join(outDir, path.basename(file, path.extname(file)) + '.avif');
  if (!fs.existsSync(avifPath)) {
    await sharp(inputPath)
      .avif({ quality: 60 })
      .toFile(avifPath);
    console.log('Сгенерировано avif:', avifPath);
  }
}

async function buildAll() {
  const files = await fg(['**/*.{jpg,jpeg,png}'], { cwd: srcDir });
  for (const file of files) {
    await processImage(file);
  }
}

if (process.argv.includes('--watch')) {
  const chokidar = (await import('chokidar')).default;
  await buildAll();
  console.log('Watching for changes...');
  chokidar.watch(['**/*.{jpg,jpeg,png}'], { cwd: srcDir, ignoreInitial: true })
    .on('add', processImage)
    .on('change', processImage);
} else {
  await buildAll();
}