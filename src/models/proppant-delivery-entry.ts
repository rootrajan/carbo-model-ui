import { ProppantUsed } from './proppant-used';
import { Syncable } from './syncable';

export enum ContainerType {
  silos = 'silos',
  boxes = 'boxes',
  movers = 'movers',
  bins = 'bins',
}

export class ProppantDeliveryEntry implements Syncable {
  constructor(
    public jobId?: string,
    public date?: Date,
    public bol?: string,
    public po?: string,
    public vendor?: string,
    public proppant?: string,
    public padStage?: number,
    public wtAmount?: number,
    public silo?: string,
    public usedIn: ProppantUsed[] = [],
    public boxNumber?: string,
    public bolQuantity = 0,
    public uom: string = '',
    public moverNumber?: string,
    public binNumber?: string,
    public truckNumber?: number,
    public timeLoadout?: number,
    public transferredFromJobId?: string,
    public transferredToJobId?: string,
    public returned?: number,
    public transferredToJob?: number,
    public transferredToYard?: number,
    public writeOffBalance?: number,
    public status?: string
  ) {}

  id!: string;
  ts!: number;
  created: number = new Date().getTime();

  usedAmount(): number {
    let result = 0;

    if (this.usedIn) {
      result = this.usedIn
        .map((each) => each.adjustedAmount ?? 0)
        .reduce((sum, current) => sum + +current, 0);
    }

    return result;
  }

  allUsed(): boolean {
    return this.remainAmount() === 0;
  }

  getReturned(): number {
    if (
      this.returned ||
      this.transferredToJob ||
      this.transferredToYard ||
      this.writeOffBalance
    ) {
      let returnedValue = 0;
      if (this.returned) {
        returnedValue += this.returned;
      }
      if (this.transferredToJob) {
        returnedValue += this.transferredToJob;
      }
      if (this.transferredToYard) {
        returnedValue += this.transferredToYard;
      }
      if (this.writeOffBalance) {
        returnedValue += this.writeOffBalance;
      }
      return returnedValue;
    } else {
      return 0;
    }
  }

  remainAmount(): number {
    const used = this.usedAmount();
    const wtAmount = this.wtAmount ?? 0;

    return Math.round((wtAmount - used - this.getReturned()) * 10) / 10;
  }
}
