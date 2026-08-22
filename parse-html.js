const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('../Novelle_Academy_Website/index.original.html', 'utf-8');
const $ = cheerio.load(html);

const mainHtml = $('#main').html();

if (!mainHtml) {
  console.error('No #main found');
  process.exit(1);
}

// Convert HTML to JSX
let jsx = mainHtml
  // class to className
  .replace(/class=/g, 'className=')
  // SVG attributes
  .replace(/fill-rule=/g, 'fillRule=')
  .replace(/clip-rule=/g, 'clipRule=')
  .replace(/stroke-width=/g, 'strokeWidth=')
  .replace(/stroke-linecap=/g, 'strokeLinecap=')
  .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
  .replace(/stroke-dasharray=/g, 'strokeDasharray=')
  .replace(/stroke-miterlimit=/g, 'strokeMiterlimit=')
  // style attribute (naive conversion for inline styles)
  // We'll just remove style tags for now if they are simple, or we have to convert "style='min-height:100vh'" to "style={{minHeight: '100vh'}}"
  // Let's do a basic replacement for style strings
  .replace(/style="([^"]*)"/g, (match, styleString) => {
    if (!styleString) return 'style={{}}';
    const styleObj = {};
    styleString.split(';').forEach(rule => {
      if (!rule) return;
      const [key, value] = rule.split(':').map(s => s.trim());
      if (key && value) {
        // camelCase the key
        const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
        styleObj[camelKey] = value;
      }
    });
    return `style={${JSON.stringify(styleObj)}}`;
  })
  // close void tags
  .replace(/<img([^>]*)>/g, '<img$1 />')
  .replace(/<input([^>]*)>/g, '<input$1 />')
  .replace(/<br([^>]*)>/g, '<br$1 />')
  .replace(/<hr([^>]*)>/g, '<hr$1 />')
  // Framer specific data attributes
  .replace(/data-framer-name=/g, 'data-framer-name=')
  .replace(/<!--.*?-->/g, '');

fs.writeFileSync('src/app/page.tsx', `
export default function Home() {
  return (
    <div id="main">
      ${jsx}
    </div>
  );
}
`);

console.log('JSX written to src/app/page.tsx');
