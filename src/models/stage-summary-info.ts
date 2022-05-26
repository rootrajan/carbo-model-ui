export class StageSummaryInfo {
  constructor(
    public bottomPerf?: number,
    public volumeToBottomPerf?: number,
    public vertical?: number,
    public kop?: number,
    public lateral?: number,
    public topPerf?: number,
    public volumeToTopPerf?: number,
    public heel?: number,
    public averageTVD?: number,
    public casingVolume?: number,
    public flushVolume?: number,
    public proppants: Map<string, number> = new Map()
  ) {}
}
