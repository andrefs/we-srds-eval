import { DsPartition } from "./DsPartition";
import {
  ali27,
  atlasify240,
  baker143,
  bg100k,
  card660,
  emocon,
  geresid50,
  gm30,
  gtrd,
  lm659,
  lxrw2034,
  lxsimlex999,
  lxws353,
  ma28,
  mayoSRS,
  mc30,
  medin34,
  men3000,
  mervis210,
  mesh2,
  miniMSRS,
  mt287,
  mturk771,
  multisimlex,
  pap900,
  ps65,
  pt65,
  rd27,
  rel122,
  resnik28,
  reword26,
  rg65,
  scws2003,
  semeval17,
  simlex999,
  simverb3500,
  sl7576,
  srw2034,
  sstars13,
  tr9856,
  tversky42,
  umnsrs,
  umnsrsMod,
  word19k,
  wp300,
  ws353,
  ws353split,
  yp130,
  zie55
} from "punuy-datasets";

export const ali27_main = DsPartition.fromDataset(ali27, "main");
export const atlasify240_main = DsPartition.fromDataset(atlasify240, "main");
export const baker143_main = DsPartition.fromDataset(baker143, "main");
export const bg100k_all = DsPartition.fromDataset(bg100k, "all");
export const card660_main = DsPartition.fromDataset(card660, "main");
export const emocon_pairwise = DsPartition.fromDataset(emocon, "pairwise");
export const geresid50_rel = DsPartition.fromDataset(geresid50, "rel");
export const geresid50_sim = DsPartition.fromDataset(geresid50, "sim");
export const gm30_main = DsPartition.fromDataset(gm30, "main");
export const gtrd_main = DsPartition.fromDataset(gtrd, "main");
export const lm659_rel = DsPartition.fromDataset(lm659, "rel");
export const lm659_sim = DsPartition.fromDataset(lm659, "sim");
export const lxrw2034_main = DsPartition.fromDataset(lxrw2034, "main");
export const lxsimlex999_main = DsPartition.fromDataset(lxsimlex999, "main");
export const lxws353_main = DsPartition.fromDataset(lxws353, "main");
export const ma28_main = DsPartition.fromDataset(ma28, "main");
export const mayoSRS_mean = DsPartition.fromDataset(mayoSRS, "mean");
export const mc30_table1 = DsPartition.fromDataset(mc30, "table1");
export const medin34_main = DsPartition.fromDataset(medin34, "main");
export const men3000_full = DsPartition.fromDataset(men3000, "full");
export const mervis210_main = DsPartition.fromDataset(mervis210, "main");
export const mesh2_main = DsPartition.fromDataset(mesh2, "main");
export const miniMSRS_cod = DsPartition.fromDataset(miniMSRS, "cod");
export const miniMSRS_phy = DsPartition.fromDataset(miniMSRS, "phy");
export const mt287_mturk = DsPartition.fromDataset(mt287, "mturk");
export const mturk771_mturk = DsPartition.fromDataset(mturk771, "mturk");
export const multisimlex_ENG = DsPartition.fromDataset(multisimlex, "ENG");
export const pap900_rel = DsPartition.fromDataset(pap900, "rel");
export const pap900_sim = DsPartition.fromDataset(pap900, "sim");
export const ps65_main = DsPartition.fromDataset(ps65, "main");
export const pt65_main = DsPartition.fromDataset(pt65, "main");
export const rd27_cont = DsPartition.fromDataset(rd27, "cont");
export const rd27_nocont = DsPartition.fromDataset(rd27, "nocont");
export const rel122_main = DsPartition.fromDataset(rel122, "main");
export const resnik28_main = DsPartition.fromDataset(resnik28, "main");
export const reword26_g26 = DsPartition.fromDataset(reword26, "g26");
export const rg65_table1 = DsPartition.fromDataset(rg65, "table1");
export const scws2003_main = DsPartition.fromDataset(scws2003, "main");
export const semeval17_main = DsPartition.fromDataset(semeval17, "main");
export const simlex999_main = DsPartition.fromDataset(simlex999, "main");
export const simverb3500_dev = DsPartition.fromDataset(simverb3500, "dev");
export const sl7576_main = DsPartition.fromDataset(sl7576, "main");
export const srw2034_rw = DsPartition.fromDataset(srw2034, "rw");
export const sstars13_main = DsPartition.fromDataset(sstars13, "main");
export const tr9856_main = DsPartition.fromDataset(tr9856, "main");
export const tversky42_main = DsPartition.fromDataset(tversky42, "main");
export const umnsrs_rel = DsPartition.fromDataset(umnsrs, "rel");
export const umnsrs_sim = DsPartition.fromDataset(umnsrs, "sim");
export const umnsrsMod_rel = DsPartition.fromDataset(umnsrsMod, "rel");
export const umnsrsMod_sim = DsPartition.fromDataset(umnsrsMod, "sim");
export const word19k_test = DsPartition.fromDataset(word19k, "test");
export const word19k_train = DsPartition.fromDataset(word19k, "train");
export const wp300_wp = DsPartition.fromDataset(wp300, "wp");
export const ws353_combined = DsPartition.fromDataset(ws353, "combined");
export const ws353split_rel = DsPartition.fromDataset(ws353split, "rel");
export const ws353split_sim = DsPartition.fromDataset(ws353split, "sim");
export const yp130_verbpairs = DsPartition.fromDataset(yp130, "verbpairs");
export const zie55_B0 = DsPartition.fromDataset(zie55, "B0");
export const zie55_B1 = DsPartition.fromDataset(zie55, "B1");        
