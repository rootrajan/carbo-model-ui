export class Equipment {
  constructor(
    public id: string = '',
    public name = '',
    public code: string,
    public price: number,
    public uom: string
  ) {}
}
