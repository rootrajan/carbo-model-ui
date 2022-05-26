export class ChargeGroupProduct {
  constructor(
    public name: string = '',
    public description: string = '',
    public code: string = '',
    public price: number = 0,
    public uom: string = '',
    public group: string = '',
    public subtype: string = ''
  ) {}

  get fullName(): string {
    if (this.description) {
      return this.name + ' - ' + this.description;
    } else {
      return this.name;
    }
  }
}
