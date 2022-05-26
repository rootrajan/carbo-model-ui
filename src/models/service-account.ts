export class ServiceAccount {
  constructor(
    public organizationId: string,
    public organizationIds: string[],
    public microservices: string[] = []
  ) {}
  id!: string;
}
