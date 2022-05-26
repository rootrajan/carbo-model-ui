export class Organization {
  constructor(
    public name: string,
    public logoId: string,
    public logoFileName: string,
    public aiServiceCompanyName: string,
    public type: OrganizationType = OrganizationType.SERVICE
  ) {}
  id!: string;
}

export enum OrganizationType {
  SERVICE = 'SERVICE',
  OPERATOR = 'OPERATOR',
  PARTNER = 'PARTNER',
}
