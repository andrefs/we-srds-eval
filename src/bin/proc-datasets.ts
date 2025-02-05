import { procAllDatasets } from "../lib/we-srd-corr";

procAllDatasets().then((results) => {
  console.warn('Here are the results');
  console.log(results);

  console.warn('And the average correlation is',
    results
      .filter(r => r.corr !== null)
      .reduce((acc, cur) => acc + cur.corr!, 0) / results.length)
})
  .catch((err) => {
    console.error(err);
  })

