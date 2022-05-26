export class FieldTicketLineItem {
  constructor(
    public code: string,
    public quantity: number,
    public description: string,
    public price: number,
    public uom: string,
    public discount?: number,
    public readOnly?: boolean,
    public doNotTransform?: boolean,
    public isCustomerSupplied?: boolean,
    public stage?: number
  ) {}
}
