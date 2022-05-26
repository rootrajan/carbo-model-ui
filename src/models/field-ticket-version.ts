import { FieldTicketLineItem } from './field-ticket-line-item';
import { FieldTicketStatus } from './field-ticket';

export class FieldTicketVersion {
  constructor(
    public version = 1,
    public status: FieldTicketStatus = FieldTicketStatus.IN_PROGRESS,
    public chargeGroups: Record<string, FieldTicketLineItem[]> = {},
    public approvedDate?: number
  ) {}

  chemicalCharges: FieldTicketLineItem[] = [];
  equipmentCharges: FieldTicketLineItem[] = [];
  mileageCharges: FieldTicketLineItem[] = [];
  fuelCharges: FieldTicketLineItem[] = [];
  miscCharges: FieldTicketLineItem[] = [];
  proppantCharges: FieldTicketLineItem[] = [];

  getChargesFromChargeGroup(chargesName: string): FieldTicketLineItem[] {
    const found = this.chargeGroups[chargesName];
    if (found) {
      return found;
    } else {
      switch (chargesName) {
        case 'chemicalCharges':
          this.chargeGroups[chargesName] = this.chemicalCharges;
          return this.chargeGroups[chargesName];
        case 'equipmentCharges':
          this.chargeGroups[chargesName] = this.equipmentCharges;
          return this.chargeGroups[chargesName];
        case 'mileageCharges':
          this.chargeGroups[chargesName] = this.mileageCharges;
          return this.chargeGroups[chargesName];
        case 'fuelCharges':
          this.chargeGroups[chargesName] = this.fuelCharges;
          return this.chargeGroups[chargesName];
        case 'miscCharges':
          this.chargeGroups[chargesName] = this.miscCharges;
          return this.chargeGroups[chargesName];
        case 'proppantCharges':
          this.chargeGroups[chargesName] = this.proppantCharges;
          return this.chargeGroups[chargesName];
        default:
          // console.warn('Invalid charges name ' + chargesName);
          return [];
      }
    }
  }
}
