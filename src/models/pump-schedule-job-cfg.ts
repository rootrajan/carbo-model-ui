export class PumpScheduleJobCfg {
  constructor(
    public jobId: string,
    public casingCap?: number,
    public overflush?: number
  ) {}
  id!: string;
  created!: number;
  ts!: number;
}
