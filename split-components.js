const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('src/app/template.html', 'utf-8');
const $ = cheerio.load(html, { xmlMode: false });
const wrapper = $("body").children().first().children().eq(2);
const children = wrapper.children();

const components = [
  { name: 'Hero', index: 0 },
  { name: 'AboutIntro', index: 1 },
  { name: 'Services', index: 2 },
  { name: 'DoctorProfile', index: 3 },
  { name: 'Standards', index: 4 },
  { name: 'Signature1', index: 5 },
  { name: 'WhyNovelle', index: 6 },
  { name: 'Signature2', index: 7 },
  { name: 'BookConsultation', index: 8 },
  { name: 'FAQs', index: 9 },
  { name: 'Footer', index: 10 }
];

if (!fs.existsSync('src/components')) {
  fs.mkdirSync('src/components');
}

let pageTsx = `import React from 'react';\n`;

components.forEach(comp => {
  const compHtml = $.html(children.eq(comp.index));
  const compCode = `import React from 'react';
import content from '../content.json';

const rawHtml = \`${compHtml.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;

export default function ${comp.name}() {
  let html = rawHtml;
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
`;
  fs.writeFileSync(`src/components/${comp.name}.tsx`, compCode);
  pageTsx += `import ${comp.name} from '../components/${comp.name}';\n`;
});

const navHtml = $.html($("body").children().first().children().eq(0));
const navCode = `import React from 'react';
const rawHtml = \`${navHtml.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;
export default function Navigation() {
  return <div dangerouslySetInnerHTML={{ __html: rawHtml }} />;
}
`;
fs.writeFileSync(`src/components/Navigation.tsx`, navCode);
pageTsx += `import Navigation from '../components/Navigation';\n`;

pageTsx += `
export default function Home() {
  return (
    <div id="main">
      <div className="framer-gXhT5 framer-1qabwpf" data-layout-template="true" style={{ minHeight: '100vh', width: 'auto' }}>
        <Navigation />
        <style dangerouslySetInnerHTML={{ __html: "" }} />
        <div className="framer-qmqIC framer-XXWUU framer-Naw1U framer-i4JDF framer-Q9Gwa framer-7eo9h framer-O1pck framer-MYh3Z framer-Jq7uo framer-MM3Ad framer-2g1c8 framer-TMEg4 framer-W0jBF framer-72rtr7">
          <Hero />
          <AboutIntro />
          <Services />
          <DoctorProfile />
          <Standards />
          <Signature1 />
          <WhyNovelle />
          <Signature2 />
          <BookConsultation />
          <FAQs />
          <Footer />
        </div>
      </div>
    </div>
  );
}
`;

fs.writeFileSync('src/app/page.tsx', pageTsx);
console.log("Components extracted successfully!");

fs.writeFileSync('src/content.json', JSON.stringify({
  brandName: "Novelle",
  phone: "(422) 820 820"
}, null, 2));

