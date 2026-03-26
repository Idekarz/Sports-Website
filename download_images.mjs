import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.join(__dirname, 'src');
const ASSETS_DIR = path.join(__dirname, 'public', 'assets');

if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });
  return arrayOfFiles.filter(f => f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.jsx') || f.endsWith('.js'));
}

const files = getAllFiles(SRC_DIR);

let imageCounter = 1;
const urlMap = new Map();

async function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
         return https.get(response.headers.location, (res) => {
             const file = fs.createWriteStream(dest);
             res.pipe(file);
             file.on('finish', () => { file.close(); resolve(); });
             file.on('error', (err) => { fs.unlink(dest, () => {}); reject(err); });
         }).on('error', reject);
      } else {
          const file = fs.createWriteStream(dest);
          response.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
          file.on('error', (err) => { fs.unlink(dest, () => {}); reject(err); });
      }
    }).on('error', reject);
  });
}

async function processFiles() {
  const urlRegex = /https:\/\/(images\.pexels\.com|img\.icons8\.com)[^\s'"]+/g;

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8');
    const matches = content.match(urlRegex);
    if (matches) {
      console.log(`Found images in ${file}`);
      for (const url of matches) {
        if (!urlMap.has(url)) {
          let extension = '.jpg';
          if (url.includes('.png')) extension = '.png';
          else if (url.includes('.svg')) extension = '.svg';
          
          const filename = `local-asset-${imageCounter++}${extension}`;
          urlMap.set(url, filename);
          const dest = path.join(ASSETS_DIR, filename);
          console.log(`Downloading ${url} -> ${filename}...`);
          try {
            await downloadImage(url, dest);
          } catch (e) {
            console.error(`Failed to download ${url}:`, e);
          }
        }
        
        const rootRelativePath = `/assets/${urlMap.get(url)}`;
        content = content.replace(url, rootRelativePath);
      }
      fs.writeFileSync(file, content, 'utf-8');
    }
  }
}

processFiles().then(() => console.log('Done!')).catch(console.error);
