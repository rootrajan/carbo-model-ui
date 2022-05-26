export class DailyJobRecord {
  constructor(
    public id: string,
    public date: Date,
    public jobId: string,
    public fleet: string,
    public operator: string,
    public targetStagePerDay: number,
    public actualStagePerDay: number,
    public nptHours: number,
    public scheduledHours: number
  ) {}
}
