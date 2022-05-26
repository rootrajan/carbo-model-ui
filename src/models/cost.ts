import { Syncable } from './syncable';

export class Cost implements Syncable {
  constructor(
    public jobId: string,
    public wellId: string,     
    public costType: string,
    public charge: number,
    public code: string,
    public description: string,
    public vendor: string,
    public unitCost: number,
    public quantity: number,
    public carryOver: boolean,
    public date?: Date,  

  ) {}

  id!: string;
  ts!: number;
  created: number = new Date().getTime();
}
