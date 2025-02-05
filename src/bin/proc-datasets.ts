import { procAllDatasets } from "../lib/we-srd-corr";

procAllDatasets().then((results) => {
  console.warn('Here are the results');
  console.log(results);
})
  .catch((err) => {
    console.error(err);
  })

