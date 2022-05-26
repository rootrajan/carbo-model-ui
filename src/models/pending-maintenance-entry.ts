export class PendingMaintenanceEntry{
  constructor(
    public jobId: string,
    public equipment: string,
    public pumpIssueId: string,
    public issue: string
  ) {}

  id!: string;
  ts!: number;
  created: number = new Date().getTime();
}
