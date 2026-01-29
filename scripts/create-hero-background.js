import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceImage = 'C:\\Users\\julien\\OneDrive\\Coding\\_Projets de code\\2025.12 Ca Handi Long\\Photos\\Marseille 21 novembre 2025\\Copy of LesFeesAroulettes (18).jpg';
const outputDir = join(__dirname, '..', 'public', 'images');
const outputPath = join(outputDir, 'hero-background.webp');

async function createHeroBackground() {
  try {
    console.log('🎨 Création du fond hero avec tonalités violet/rose...');

    // Traiter l'image avec overlay violet/rose et rotation
    await sharp(sourceImage)
      .rotate(90)  // Rotation de 90 degrés
      .resize(1920, 1080, {
        fit: 'contain',  // Contain pour voir tous les personnages
        position: 'center',
        background: { r: 0, g: 0, b: 0, alpha: 1 }  // Fond noir
      })
      // Appliquer un overlay violet/rose pour créer l'ambiance
      .modulate({
        brightness: 0.7,  // Assombrir légèrement
        saturation: 1.3,  // Augmenter la saturation
        hue: 280          // Décaler vers le violet/magenta
      })
      .linear(1.1, -(128 * 0.1))  // Augmenter le contraste
      .webp({
        quality: 85,
        effort: 6
      })
      .toFile(outputPath);

    console.log('✅ Image hero créée:', outputPath);

    // Créer aussi une version légèrement floue pour le fond
    const blurredPath = join(outputDir, 'hero-background-blurred.webp');
    await sharp(sourceImage)
      .rotate(90)  // Rotation de 90 degrés
      .resize(1920, 1080, {
        fit: 'contain',  // Contain pour voir tous les personnages
        position: 'center',
        background: { r: 0, g: 0, b: 0, alpha: 1 }  // Fond noir
      })
      .modulate({
        brightness: 0.7,
        saturation: 1.3,
        hue: 280
      })
      .linear(1.1, -(128 * 0.1))
      .blur(1)  // Flou très minimal
      .webp({
        quality: 85,
        effort: 6
      })
      .toFile(blurredPath);

    console.log('✅ Version floutée créée:', blurredPath);

  } catch (error) {
    console.error('❌ Erreur:', error);
  }
}

createHeroBackground();
