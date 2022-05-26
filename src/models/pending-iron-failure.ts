export class PendingIronFailure{
  constructor(
    public jobId: string,
    public equipment: string,
    public pumpIssueId: string,  
    public date: number,        
    public totalNpt?: number,   
    public startTime?: number,
    public endTime?: number
  ) {}

  id!: string;
  ts!: number;
  created: number = new Date().getTime();
}
