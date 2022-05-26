export class PumpSchedule {
  constructor(
    public jobId: string,
    public wellId: string,
    public stageNumber: number,
    public stepNumber: number,
    public stepName: string,
    public proppantType: string,
    public proppantConcentration: number,
    public proppantConcentrationTo: number,
    public rate: number,
    public cleanVol: number,
    public stageProppant?: number
  ) {}
  id!: string;
  created!: number;
  ts!: number;
}
