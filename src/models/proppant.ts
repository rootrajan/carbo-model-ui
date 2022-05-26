export class Proppant {
  constructor(
    public id: string = '',
    public name = '',
    public volumePerStage = 0,
    public code: string = '',
    public price: number = 0,
    public uom: string = '',
    public description?: string,
    public isCustomerSupplied?: boolean,
    public maxCapacity?: number,
    public type?: string
  ) {}

  public get fullName(): string {
    if (this.description) {
      return this.name + ' - ' + this.description;
    } else {
      return this.name;
    }
  }
}
