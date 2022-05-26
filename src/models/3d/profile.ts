export class Profile {
  constructor(
    public upperDiameter: number,
    public lowerDiameter: number,
    public horzLength: number,
    public vertCenter: number,
    public upperHeight: number,
    public lowerHeight: number,
    public centerDepth: number,
    public centerDepthMD: number,
    public ellLength: number,
    public padLength: number,
    public padUpperHeight: number,
    public padLowerHeight: number,
    public padCenterDepth: number,
    public xOrigin: number,
    public yOrigin: number,
    public xScale: number,
    public yScale: number,
    public shift: number,
    public profilePoints: number[],
    public lenProfilePoints: number[],
    public modelRows: number[][],
    public azimuth?: number
  ) {}
}
