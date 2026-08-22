const fs = require('fs');
const html = fs.readFileSync('../Novelle_Academy_Website/index.original.html', 'utf-8');
const cheerio = require('cheerio');
const $ = cheerio.load(html);

const mainHtml = $('#main').html();
fs.writeFileSync('src/app/template.html', mainHtml);
console.log('Main HTML extracted to src/app/template.html');
