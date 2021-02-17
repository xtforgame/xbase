import express from 'express';
import fs from 'fs';
import { Liquid } from 'liquidjs';
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use((req, res, next) => {
  const engine = new Liquid({
    root: 'src/liquids',
  });
  engine.plugin(function (Liquid) {
    // this.registerFilter('toTsTypeExpression', (column : JsonModelAttributeInOptionsForm) => {
    //   return typeConfigs[column.type[0]].getTsTypeExpression(column);
    // });
    // this.registerFilter('toTsTypeExpressionForCreation', (column : JsonModelAttributeInOptionsForm) => {
    //   return typeConfigs[column.type[0]].getTsTypeExpressionForCreation(column);
    // });
    // this.registerFilter('getOptionalMark', (column : JsonModelAttributeInOptionsForm, optionalMark = '?') => {
    //   return column.extraOptions!.requiredOnCreation ? '' : optionalMark;
    // });
    // this.registerFilter('debugPrint', (value : any) => {
    //   console.log('value :', value);
    //   return value;
    // });
  });
  if (req.url !== '/') {
    return next();
  }
  const results = engine.parse(`{% render 'main.liquid', schemasMetadata: schemasMetadata, schemas: schemas %}`)
  results.forEach((t) => {
    console.log('t.token :', t);
  });
  const content = fs.readFileSync('src/liquids/main.liquid', 'utf8');
  const results2 = engine.parse(content)
  results2.forEach((t) => {
    console.log('t.token :', t);
  });
  const x = engine.render(results2, { schemasMetadata: {}, schemas: {} });
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
app.use('/static', express.static(__dirname + '/public'));
app.use(express.static('www'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
