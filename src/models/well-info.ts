export class WellInfo {
  constructor(
    public jobId: string,
    public wellId: string,
    public id: string,
    public perfSize: number,
    public kop: number,
    public heel: number,
    public stages: StageInfo[]
  ) {}
}

export class StageInfo {
  constructor(
    public stageNumber: number,
    public top: number,
    public bottom: number,
    public tvd: number,
    public plug: number
  ) {}
}
