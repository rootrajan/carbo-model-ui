import { ChemicalUsed } from './chemical-used';
import { Syncable } from './syncable';

export class ChemicalDeliveryEntry implements Syncable {
  constructor(
    public jobId: string,
    public date?: Date,
    public chemical = '',
    public vendor?: string,
    public bol = '',
    public po?: string,
    public received = 0,
    public bolQuantity = 0,
    public strengthBaume: string | null = null,
    public rawGallons: number | null = null,
    public usedIn: ChemicalUsed[] = [],
    public uom: string = '',
    public returned?: number,
    public transferredToJobId?: string,
    public transferredFromJobId?: string,
    public transferredToJob?: number,
    public transferredToYard?: number,
    public writeOffBalance?: number,
    public inventoryType: string = '',
    public status?: string
  ) {}

  id!: string;
  ts!: number;
  created: number = new Date().getTime();

  usedAmount(): number {
    let amount = 0;

    if (this.usedIn) {
      amount =
        Math.round(
          this.usedIn
            .map((each) => each.submittedAmount ?? 0)
            .reduce((sum, current) => sum + current, 0) * 10
        ) / 10;
    }

    return amount;
  }

  bolAmount(): number {
    return this.received;
  }

  bolRawAmount(): number {
    return this.rawGallons ? this.rawGallons : this.received;
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
      if (this.uom === 'lb' && this.strengthBaume && this.rawGallons) {
        const specificGravity = this.received / (this.rawGallons * 8.34);
        return returnedValue / (specificGravity * 8.34);
      } else {
        return returnedValue;
      }
    } else {
      return 0;
    }
  }

  remainAmount(): number {
    const used = this.usedAmount();
    return (
      Math.round((this.bolRawAmount() - used - this.getReturned()) * 10) / 10
    );
  }
}
