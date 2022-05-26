export class FieldTicketLink {
  constructor(
    public id: string,
    public code: string,
    public fieldTicketId: string,
    public version: number,
    public operator: string,
    public pad: string,
    public wellName: string,
    public location: string,
    public wellAPI: string,
    public wellAFE: string,
    public owner: string,
    public organizationId: string,
    public expiredAt: Date,
    public responded?: string
  ) {}
}
