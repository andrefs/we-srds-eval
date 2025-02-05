import { buildFTLangFn } from 'we-cos-sim';
import pcorrTest from '@stdlib/stats-pcorrtest';
import { type Partition } from 'punuy-datasets';
import { getRandom } from './utils';
import * as datasets from './ds-adapters';

export interface Pair {
  term1: string;
  term2: string;
  score: number;
}

export type FullPair = Pair & { cosSim: number };
export type CosSimFnType = (term1: string, term2: string) => Promise<number | null>;


export async function calcPairsCosSim(
  allPairs: Pair[],
  sampleSize: number,
  cosSimFn: CosSimFnType
) {
  const res = [];
  const pairs = getRandom(allPairs, 1000);
  let i = 0;
  while (res.length < sampleSize && i < pairs.length) {
    const p = pairs[i++];
    if (p) {
      const { term1, term2, score } = p;
      const cosSim = await cosSimFn(term1, term2);
      if (cosSim === null) {
        continue;
      }
      res.push({ term1, term2, score, cosSim });
    }
  }
  return res;
}


export async function calcPairsCorr(pairs: FullPair[]) {
  const x = pairs.map(pair => pair.score);
  const y = pairs.map(pair => pair.cosSim);
  return pcorrTest(x, y);
}

export function getPairsFromDataset(ds: Partition) {
  const pairs = [];
  for (const { term1, term2, value, values } of ds.data) {
    let score = value;
    if (value === undefined || value === null) {
      const vals = values!.filter(v => v !== undefined && v !== null) as number[];
      if (vals.length === 0) {
        continue
      }
      score = vals.reduce((acc, cur) => acc + cur, 0) / vals.length;
    }
    pairs.push({ term1, term2, score: score as number });
  }
  return pairs;
}

export async function procDataset(ds: Partition, cosSimFn: CosSimFnType) {
  const pairs = getPairsFromDataset(ds);
  const pairsWithCosSim = await calcPairsCosSim(pairs, 30, cosSimFn);
  if (pairsWithCosSim.length < 10) {
    return { corr: null, pairCount: pairsWithCosSim.length };
  }
  const { pcorr } = await calcPairsCorr(pairsWithCosSim);
  return { corr: pcorr, pairCount: pairsWithCosSim.length };
}

export async function procAllDatasets() {
  console.warn('Processing all datasets');
  const cosSimFn = await buildFTLangFn('en', true)
  const res = [];
  for (const [dsName, ds] of Object.entries(datasets)) {
    console.warn(`Processing ${dsName}`);
    const { corr, pairCount } = await procDataset(ds, cosSimFn);
    res.push({ dsName, corr, pairCount });
  }
  return res;
}
