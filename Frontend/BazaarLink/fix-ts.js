import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pagesDir = path.join(__dirname, 'src', 'pages');

const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  let content = fs.readFileSync(path.join(pagesDir, file), 'utf8');
  
  // Remove import React from 'react';
  content = content.replace(/import React from 'react';\n/g, '');
  
  // Fix boolean attributes: checked="checked", checked="", disabled="disabled"
  content = content.replace(/checked="[^"]*"/g, 'checked={true}')
                   .replace(/checked\s*>/g, 'checked={true}>')
                   .replace(/selected="[^"]*"/g, 'selected={true}')
                   .replace(/disabled="[^"]*"/g, 'disabled={true}')
                   .replace(/required="[^"]*"/g, 'required={true}');

  fs.writeFileSync(path.join(pagesDir, file), content);
}

// Also fix App.tsx
const appFile = path.join(__dirname, 'src', 'App.tsx');
let appContent = fs.readFileSync(appFile, 'utf8');
appContent = appContent.replace(/import React from 'react';\n/g, '');
fs.writeFileSync(appFile, appContent);

console.log('Fixed TypeScript errors.');
