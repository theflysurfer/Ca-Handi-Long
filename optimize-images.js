import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const eventsDir = 'public/images/events';

async function optimizeImagesInDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await optimizeImagesInDirectory(filePath);
    } else if (file.match(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/)) {
      const webpPath = filePath.replace(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/, '.webp');

      // Skip if WebP already exists
      if (fs.existsSync(webpPath)) {
        console.log(`✓ Already exists: ${webpPath}`);
        continue;
      }

      try {
        await sharp(filePath)
          .resize(1920, 1080, {
            fit: 'inside',
            withoutEnlargement: true
          })
          .webp({ quality: 85 })
          .toFile(webpPath);

        const originalSize = fs.statSync(filePath).size;
        const webpSize = fs.statSync(webpPath).size;
        const reduction = ((1 - webpSize / originalSize) * 100).toFixed(1);

        console.log(`✓ Converted: ${file} → ${path.basename(webpPath)} (${reduction}% smaller)`);
      } catch (error) {
        console.error(`✗ Error converting ${file}:`, error.message);
      }
    }
  }
}

console.log('🖼️  Starting image optimization...\n');
optimizeImagesInDirectory(eventsDir).then(() => {
  console.log('\n✅ Image optimization complete!');
}).catch(error => {
  console.error('Error:', error);
  process.exit(1);
});
