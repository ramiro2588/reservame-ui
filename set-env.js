const fs = require('fs');
const path = require('path');
require('dotenv').config();

const envDir = './src/environments';
const targetPath = path.join(envDir, 'environment.ts');

// 1. Verificamos y creamos la carpeta si no existe
if (!fs.existsSync(envDir)) {
    fs.mkdirSync(envDir, { recursive: true });
    console.log(`📂 Carpeta creada en: ${envDir}`);
}

// 2. Definimos el contenido (usando tus variables del .env)
const envConfigFile = `export const environment = {
  production: false,
  firebase: {
    apiKey: "${process.env.FIREBASE_API_KEY || ''}",
    authDomain: "${process.env.FIREBASE_AUTH_DOMAIN || ''}",
    projectId: "${process.env.FIREBASE_PROJECT_ID || ''}",
    appId: "${process.env.FIREBASE_APP_ID || ''}"
  }
};
`;

// 3. Escribimos el archivo
try {
    fs.writeFileSync(targetPath, envConfigFile);
    console.log(`✅ Archivo generado con éxito en ${targetPath}`);
} catch (err) {
    console.error('❌ Error al escribir el archivo:', err);
}