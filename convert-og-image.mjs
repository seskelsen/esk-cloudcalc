#!/usr/bin/env node
import sharp from 'sharp';
import { writeFileSync } from 'fs';

async function convertSvgToPng() {
  try {
    const svgBuffer = await sharp('assets/og-image.svg')
      .png()
      .resize(1200, 630, { fit: 'fill' })
      .toBuffer();
    
    writeFileSync('assets/og-image.png', svgBuffer);
    console.log('✅ og-image.svg → og-image.png (1200×630) convertido com sucesso');
    console.log(`Tamanho: ${(svgBuffer.length / 1024).toFixed(2)} KB`);
  } catch (error) {
    console.error('❌ Erro na conversão:', error.message);
    process.exit(1);
  }
}

convertSvgToPng();
