import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pagesDir = path.join(__dirname, 'src', 'pages');

const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  let content = fs.readFileSync(path.join(pagesDir, file), 'utf8');
  
  // Strip HTML comments
  content = content.replace(/<!--[\s\S]*?-->/g, '');
  
  // Fix attributes with dashes
  const attrsToFix = [
    'clip-path', 'stroke-width', 'stroke-linecap', 'stroke-linejoin', 'clip-rule', 'fill-rule',
    'stroke-miterlimit', 'stroke-dasharray', 'stroke-dashoffset', 'xmlns:xlink', 'xml:space',
    'stop-color', 'stop-opacity', 'stroke-opacity', 'fill-opacity'
  ];
  
  attrsToFix.forEach(attr => {
    const camelAttr = attr.includes(':') 
      ? attr.split(':').map((p, i) => i === 0 ? p : p.charAt(0).toUpperCase() + p.slice(1)).join('')
      : attr.replace(/-([a-z])/gi, g => g[1].toUpperCase());
    content = content.replace(new RegExp(`\\b${attr}=`, 'gi'), `${camelAttr}=`);
  });

  // Handle styles correctly (avoid syntax errors if there's an empty style)
  // Sometimes style={{ background-image: ... }} is generated incorrectly if our previous regex missed a dash.
  // Actually, we can just replace style="..." entirely if we know what to expect, but since it's already style={{ ... }} 
  // Let's just catch background-image and such.
  content = content.replace(/background-image/g, 'backgroundImage')
                   .replace(/background-color/g, 'backgroundColor')
                   .replace(/border-radius/g, 'borderRadius');

  // SVG self-closing tags (path, rect, circle, polyline, line, polygon, ellipse, use)
  const svgTags = ['path', 'rect', 'circle', 'polyline', 'line', 'polygon', 'ellipse', 'use', 'source'];
  svgTags.forEach(tag => {
    // If tag is not self-closed and has no inner content before </tag>, or has no closing tag
    // Actually, simple regex to self-close tags that are open and then immediately closed:
    const regex = new RegExp(`<${tag}([^>]*?)><\\/${tag}>`, 'g');
    content = content.replace(regex, `<${tag}$1 />`);
    
    // Also, handle unclosed tags if there's any? HTML parser usually doesn't have unclosed path tags.
    // The previous script handled img, input, br, hr.
  });

  fs.writeFileSync(path.join(pagesDir, file), content);
}
console.log('Fixed JSX syntax issues.');
