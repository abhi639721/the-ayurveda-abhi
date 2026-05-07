import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, 'src', 'assets');

async function optimizeImages() {
  const files = fs.readdirSync(assetsDir).filter(f => /\.(png|jpg)$/i.test(f));
  
  console.log(`Optimizing ${files.length} images...`);
  
  for (const file of files) {
    const filePath = path.join(assetsDir, file);
    const fileSize = fs.statSync(filePath).size;
    
    try {
      await sharp(filePath)
        .resize(2000, 2000, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .png({ quality: 75, progressive: true })
        .toFile(filePath + '.tmp');
      
      fs.renameSync(filePath + '.tmp', filePath);
      const newSize = fs.statSync(filePath).size;
      const reduction = (((fileSize - newSize) / fileSize) * 100).toFixed(1);
      
      console.log(`✓ ${file}: ${(fileSize/1024).toFixed(0)}KB → ${(newSize/1024).toFixed(0)}KB (${reduction}% smaller)`);
    } catch (err) {
      console.error(`✗ Failed to optimize ${file}:`, err.message);
    }
  }
  
  console.log('\nOptimization complete!');
}

optimizeImages();
