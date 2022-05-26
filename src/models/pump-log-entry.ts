export class PumpLogEntry {
  constructor(
    public jobId?: string,
    public date?: Date,
    public day?: number,
    public start?: string,
    public end?: string,
    public well?: string,
    public stage?: number,
    public opsActivity?: string,
    public eventOrNptCode?: string,
    public complete?: boolean,
    public completedDate?: number,
    public subNptCode?: string,
    public equipment?: string,
    public equipmentIssueId?: string,
    public comments?: string,
    public endTimeOnNextDay: boolean = false,
    public owTime?: string,
    public owPressure?: number,
    public cwTime?: string,
    public cwPressure?: number,
    public notes?: string,
    public stageCount?: string
  ) {}
}
