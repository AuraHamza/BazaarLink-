import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const screens = [
  {
    name: 'LandingPage',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2YyZTQyZmMwNWUwNzQ2YzNiMTBiN2NjY2QxY2I0OWYwEgsSBxDv-MaA2QoYAZIBIwoKcHJvamVjdF9pZBIVQhMxMzM3MzkzMDMxNTU3MjI0NDQx&filename=&opi=89354086'
  },
  {
    name: 'CustomerDashboard',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2E2ZjM1NjhmOTE3MTRhNmY5YmQ3MTEzZjEzMTZiMTc2EgsSBxDv-MaA2QoYAZIBIwoKcHJvamVjdF9pZBIVQhMxMzM3MzkzMDMxNTU3MjI0NDQx&filename=&opi=89354086'
  },
  {
    name: 'ExploreMap',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzRhYjA3MWYyNDk3ZTRhN2RiMWU4ZDAwYzdiYjQwY2VhEgsSBxDv-MaA2QoYAZIBIwoKcHJvamVjdF9pZBIVQhMxMzM3MzkzMDMxNTU3MjI0NDQx&filename=&opi=89354086'
  },
  {
    name: 'LoginPage',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzYwMTJjMWJjYmU1MzRiMDhhZGM1OWU1Y2M3ODQxYjY2EgsSBxDv-MaA2QoYAZIBIwoKcHJvamVjdF9pZBIVQhMxMzM3MzkzMDMxNTU3MjI0NDQx&filename=&opi=89354086'
  },
  {
    name: 'RegisterPage',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzA1MDY0NmExMTUyYzQ0NzM5NTZlNWQ0YmUzZGQyMTZlEgsSBxDv-MaA2QoYAZIBIwoKcHJvamVjdF9pZBIVQhMxMzM3MzkzMDMxNTU3MjI0NDQx&filename=&opi=89354086'
  },
  {
    name: 'ShopDetail',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzhmYzZiNmZlMzQ5NTQ2ZWY5YWIwODdhMGI4NDZhZmUxEgsSBxDv-MaA2QoYAZIBIwoKcHJvamVjdF9pZBIVQhMxMzM3MzkzMDMxNTU3MjI0NDQx&filename=&opi=89354086'
  },
  {
    name: 'CartCheckout',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2JiNWE2ODcxNzY0OTQwMDQ4N2YyZTI0ZDk5MzJmMjgxEgsSBxDv-MaA2QoYAZIBIwoKcHJvamVjdF9pZBIVQhMxMzM3MzkzMDMxNTU3MjI0NDQx&filename=&opi=89354086'
  }
];

function htmlToJsx(html) {
  let body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] || html;
  
  // Basic replacements
  let jsx = body
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/tabindex=/g, 'tabIndex=')
    .replace(/readonly=/g, 'readOnly=')
    .replace(/autocomplete=/g, 'autoComplete=')
    .replace(/autofocus=/g, 'autoFocus=')
    .replace(/maxlength=/g, 'maxLength=')
    .replace(/minlength=/g, 'minLength=')
    .replace(/colspan=/g, 'colSpan=')
    .replace(/rowspan=/g, 'rowSpan=')
    // self-closing tags
    .replace(/<(img|input|br|hr|meta|link)([^>]*?)(?<!\/)>/g, '<$1$2 />')
    // inline styles (simplistic regex for simple styles, might need manual touch-up)
    .replace(/style="([^"]*)"/g, (match, p1) => {
      if (!p1.trim()) return 'style={{}}';
      const styles = p1.split(';').filter(s => s.trim()).map(s => {
        const [key, value] = s.split(':').map(str => str.trim());
        if (!key || !value) return '';
        const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
        return `${camelKey}: '${value.replace(/'/g, '"')}'`;
      }).filter(Boolean);
      return `style={{ ${styles.join(', ')} }}`;
    });
    
  // SVG attributes
  const svgAttrs = [
    'stroke-width', 'stroke-linecap', 'stroke-linejoin', 'clip-rule', 'fill-rule', 
    'viewbox', 'stroke-miterlimit', 'stroke-dasharray', 'stroke-dashoffset'
  ];
  svgAttrs.forEach(attr => {
    const camelAttr = attr.replace(/-([a-z])/gi, g => g[1].toUpperCase());
    const regex = new RegExp(`\\b${attr}=`, 'gi');
    jsx = jsx.replace(regex, `${camelAttr}=`);
  });
  
  // replace viewbox correctly if it was matched differently
  jsx = jsx.replace(/viewbox=/gi, 'viewBox=');

  return jsx;
}

async function main() {
  const pagesDir = path.join(__dirname, 'src', 'pages');
  if (!fs.existsSync(pagesDir)) fs.mkdirSync(pagesDir, { recursive: true });

  for (const screen of screens) {
    try {
      console.log(`Downloading ${screen.name}...`);
      const res = await fetch(screen.url);
      const html = await res.text();
      const jsxContent = htmlToJsx(html);
      
      const componentCode = `import React from 'react';\n\nexport default function ${screen.name}() {\n  return (\n    <div className="min-h-screen bg-gray-50">\n      ${jsxContent}\n    </div>\n  );\n}\n`;
      
      fs.writeFileSync(path.join(pagesDir, `${screen.name}.tsx`), componentCode);
      console.log(`Created src/pages/${screen.name}.tsx`);
    } catch (err) {
      console.error(`Error processing ${screen.name}:`, err);
    }
  }
}

main();
