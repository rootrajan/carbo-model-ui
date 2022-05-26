import { Contact } from './contact';
import { Syncable } from './syncable';

export class Vendor implements Syncable {
  constructor(
    public name = '',
    /** @deprecated */
    public poNumbers: string[] = [],
    public contacts: Contact[] = [],
    public delimiter?: string,
    public example?: string,
    public availableFields?: string[],
    public mappedFields?: string[],
    public type?: VendorType,
    public poNumberValues?: string,
    public poItems?: PoItem[]
  ) {}

  id!: string;
  ts!: number;
  created: number = new Date().getTime();

  public getDisplayContacts(): string {
    const allEmails: string = this.contacts
      .map((each) => each.email)
      .join('; ');
    return allEmails;
  }
}

export enum VendorType {
  CHEMICAL = 'Chemical',
  PROPPANT = 'Proppant',
  WELLHEAD = 'Wellhead',
  WIRELINE = 'Wireline',
}

export class PoItem {
  constructor(public poNumber: string = '', public proppantId?: string) {}
}
