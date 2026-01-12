import { visit } from 'unist-util-visit';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const productsPath = join(__dirname, '../src/data/products.json');

// Load products.json once at module initialization
let productMap;
try {
  const data = readFileSync(productsPath, 'utf-8');
  productMap = JSON.parse(data);
} catch (error) {
  throw new Error(`Failed to load products.json: ${error.message}`);
}

export default function remarkProductLinks() {
  return (tree, file) => {
    visit(tree, 'text', (node, index, parent) => {
      const { value } = node;
      const regex = /\[\[([A-Z0-9]+)\]\]/g;

      // Quick check if pattern exists in this text node
      if (!regex.test(value)) return;

      // Reset regex lastIndex for actual matching
      regex.lastIndex = 0;

      const children = [];
      let lastIndex = 0;
      let match;

      while ((match = regex.exec(value)) !== null) {
        const [fullMatch, code] = match;
        const startIndex = match.index;

        // Add text before the match
        if (startIndex > lastIndex) {
          children.push({
            type: 'text',
            value: value.slice(lastIndex, startIndex)
          });
        }

        // Create link node or keep as text if code not found
        const url = productMap[code];
        if (url) {
          children.push({
            type: 'link',
            url: url,
            children: [{ type: 'text', value: code }]
          });
        } else {
          // Unknown code - leave unchanged and warn
          console.warn(`[remark-product-links] Unknown product code: ${code} in ${file.path || 'unknown file'}`);
          children.push({
            type: 'text',
            value: fullMatch
          });
        }

        lastIndex = startIndex + fullMatch.length;
      }

      // Add remaining text after last match
      if (lastIndex < value.length) {
        children.push({
          type: 'text',
          value: value.slice(lastIndex)
        });
      }

      // Replace the single text node with multiple nodes
      parent.children.splice(index, 1, ...children);

      // Return skip directive and adjusted index to avoid re-visiting inserted nodes
      return [visit.SKIP, index + children.length];
    });
  };
}
