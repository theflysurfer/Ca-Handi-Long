import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const eventsDir = 'public/images/events';

async function fixPhotoOrientation(filePath) {
  try {
    const metadata = await sharp(filePath).metadata();

    // Si l'image a une orientation EXIF différente de 1 (normal), elle doit être corrigée
    if (metadata.orientation && metadata.orientation !== 1) {
      console.log(`🔄 Rotating: ${path.basename(filePath)} (orientation: ${metadata.orientation})`);

      // Créer un backup du fichier original
      const backupPath = filePath + '.backup';
      if (!fs.existsSync(backupPath)) {
        fs.copyFileSync(filePath, backupPath);
      }

      // Lire l'image et appliquer la rotation automatique
      await sharp(filePath)
        .rotate() // Auto-rotate basé sur EXIF
        .toFile(filePath + '.tmp');

      // Remplacer le fichier original
      fs.renameSync(filePath + '.tmp', filePath);

      return true;
    }

    return false;
  } catch (error) {
    console.error(`❌ Error processing ${path.basename(filePath)}:`, error.message);
    return false;
  }
}

async function scanAndFixDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  let totalImages = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      const result = await scanAndFixDirectory(filePath);
      fixedCount += result.fixed;
      totalImages += result.total;
    } else if (file.match(/\.(webp|jpg|jpeg|png)$/i)) {
      totalImages++;
      const wasFixed = await fixPhotoOrientation(filePath);
      if (wasFixed) fixedCount++;
    }
  }

  return { fixed: fixedCount, total: totalImages };
}

console.log('📸 Scanning photos for orientation issues...\n');

scanAndFixDirectory(eventsDir).then(({ fixed, total }) => {
  console.log(`\n✅ Scan complete!`);
  console.log(`   Total images: ${total}`);
  console.log(`   Fixed: ${fixed}`);
  console.log(`   Already correct: ${total - fixed}`);

  if (fixed > 0) {
    console.log('\n💾 Backups saved with .backup extension');
  }
}).catch(error => {
  console.error('Error:', error);
  process.exit(1);
});
