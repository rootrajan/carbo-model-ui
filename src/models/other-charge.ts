export class OtherCharge {
  constructor(
    public id: string = '',
    public name = '',
    public code: string,
    public price: number,
    public uom: string,
    public type: string
  ) {}
}

export enum OtherChargeType {
  MILEAGE = 'Mileage',
  FUEL = 'Fuel',
  MISC = 'Miscellaneous',
  DAILY = 'Daily',
  PUMPING = 'Pumping',
  MOVE_NPT = 'Move NPT Credit',
  WELL_SERVICE_TAX = 'Well Service Tax Reimbursement',
  SUPPLIED_EQUIPMENT = 'Frac Supplied Equipment',
  AUXILIARY = 'Auxiliary',
  STANDBY = 'Standby',
  BULK_DELIVERY = 'Bulk Delivery',
}
