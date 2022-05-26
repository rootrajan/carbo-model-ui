export class JobSummary {
  constructor(public jobNumber: string, public padInfo: PadInfo) {}
}

export class PadInfo {
  constructor(
    public padStageTotal: number,
    public padStageCompleted: number,
    public completedStages: number[] = []
  ) {}
}
