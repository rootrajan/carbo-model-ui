export class MorningReportInfo {
  constructor(  
    public dailyCost: number | null,
    public cumCost: number | null,
    public afeCumCost: number | null,
    public percAfeSpent: number | null,
    public days: number | null,
    public sand: number | null,
    public bbls: number | null,
    public ftg: number | null,  
  ) {}
}
