import { Strap } from './strap';
import { Syncable } from './syncable';
import { ChemicalDeliveryEntry } from './chemical-delivery-entry';

export class ChemicalStage implements Syncable {
  constructor(
    public jobId: string,
    public wellId: string,
    public date?: Date,
    public well = '',
    public stage: number = 0,
    public chemicalAdditionUnit1: Strap[] = [],
    public chemicalAdditionUnit2: Strap[] = [],
    public isosTransport: Strap[] = [],
    public dryAdd: Strap[] = [],
    public cleanTotal?: number,
    public affectedDeliveryRecords?: ChemicalDeliveryEntry[]
  ) {}

  id!: string;
  ts!: number;
  created: number = new Date().getTime();

  getAllSubmittedStraps(): Strap[] {
    let result: Strap[] = [];
    result = result.concat(...this.chemicalAdditionUnit1);
    result = result.concat(...this.chemicalAdditionUnit2);
    result = result.concat(...this.isosTransport);
    result = result.concat(...this.dryAdd);
    return result;
  }
}
