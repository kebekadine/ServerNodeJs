const Parser = require('rss-parser');

const parser = new Parser();

const fs = require('fs');

const wstream = fs.createWriteStream('fichier.csv');

(async () => {
  const feed = await parser.parseURL('https://www.lepoint.fr/politique/rss.xml');
  let cpt = 1;
  feed.items.forEach((item) => {
    let k = 68;
    if (item.content.charAt(k) !== ' ') {
      while (item.content.charAt(k) !== ' ') {
        k++;
      }
    }
    wstream.write(`${cpt} ${item.title},${item.content.substring(0, k)}...,${item.link},${item.enclosure.url},${item.enclosure.length / 1000} \n`, (err) => {
      if (err) throw err;
    });
    cpt++;
  });
})();
