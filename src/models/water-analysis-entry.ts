import { Syncable } from './syncable';

export class WaterAnalysisEntry implements Syncable {
  constructor(
    public jobId: string,
    public wellId: string,
    public stage: number = 0,
    public date: Date,
    public source: string,
    public ph: number,
    public specificGravity: number,
    public h2s: string,
    public temp: number,
    public siverNitrate: number,
    // calciums
    public calciumVolumeTitr: number,
    public calciumSampleSize: number,
    public calciumFactor: number,
    // magnesium
    public magnesiumVolumeTitr: number,
    public magnesiumSampleSize: number,
    public magnesiumFactor: number,
    // bicarbs
    public bicarbsVolumeTitr: number,
    public bicarbsSampleSize: number,
    public bicarbsFactor: number,
    // carbonate
    public carbonateVolumeTitr: number,
    public carbonateSampleSize: number,
    public carbonateFactor: number,
    // chloride
    public chlorideVolumeTitr: number,
    public chlorideSampleSize: number,
    public chlorideFactor: number,
    // auto fields
    public ironResult: number,
    public sulfateResult: number,
    public bariumResult: number,
    public potassiumResult: number,

    public peraceticAcid?: string,
  ) { }

  id!: string;
  ts!: number;
  created: number = new Date().getTime();
}