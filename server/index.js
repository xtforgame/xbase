import express from 'express';
import fs from 'fs';
import { Liquid } from 'liquidjs';
const app = express()
const port = 3000


const toCamel = str => str.replace(/_([a-z])/g, g => g[1].toUpperCase());
const toUnderscore = str => str.replace(/([-])/g, '_').replace(/([A-Z])/g, g => `_${g.toLowerCase()}`);
const capitalizeFirstLetter = str => (str.charAt(0).toUpperCase() + str.slice(1));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use((req, res, next) => {
  const engine = new Liquid({
    root: 'src/liquids',
  });
  engine.plugin(function (Liquid) {
    this.registerFilter('toCamel', toCamel);
    this.registerFilter('toUnderscore', toUnderscore);
    this.registerFilter('capitalizeFirstLetter', capitalizeFirstLetter);
    this.registerFilter('debugPrint', (value) => {
      console.log('value :', value);
      return value;
    });

    this.registerFilter('toUnderscoredWcName', str => toUnderscore(str.split('_')[0]));
    this.registerFilter('toWcName', str => str.split('_')[0]);
  });
  if (req.url !== '/') {
    return next();
  }
  const results = engine.parse(`{% render 'main.liquid', schemasMetadata: schemasMetadata, schemas: schemas %}`)
  results.forEach((t) => {
    // console.log('t.token :', t);
  });
  let indexJsFileName = ''; 
  let appGlobalFileName = ''; 

  const componentMap = {};
  fs.readdirSync('www/build').forEach(file => {
    if (file.startsWith('index-')) {
      indexJsFileName = file;
    }
    if (file.startsWith('app-globals-')) {
      appGlobalFileName = file;
    }
    if (file.endsWith('.entry.js')) {
      const componentName = file.substr(0, file.length - '.entry.js'.length);
      componentMap[componentName] = file;
    }
  });
  const content = fs.readFileSync('src/liquids/main.liquid', 'utf8');
  const results2 = engine.parse(content)
  results2.forEach((t) => {
    // console.log('t.token :', t);
  });
  const x = engine.render(results2, { jsName: { index: indexJsFileName, appGlobal: appGlobalFileName }, componentMap, schemasMetadata: {}, schemas: {} });
  // console.log('x :', x.then(console.log));
  x.then((data) => {
    // res.status(404);
    res.send(data);
  })
  .catch((e) => {
    console.log('e :', e);
    res.status(404);
    res.send('');
    // return next();
  });
})
app.use('/static', express.static('public'));
app.use(express.static('www'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
