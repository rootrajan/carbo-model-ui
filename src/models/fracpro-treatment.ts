/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export class FracproTreatment {
  constructor(
    public id: number,
    public name: string,
    public number: number,
    public timeStart: number,
    public timeEnd: number,
    public wellOpenTime: number,
    public wellheadOpeningPressure: number,
    public minPres: number,
    public maxPres: number,
    public maxFluidRate: number,
    public averagePres: number,
    public avgSlurryReturnRate: number,
    public totalVolume: number,
    public baseTreatmentDateTime: number,
    public timeZone: number,
    public dayLight: number,
    public formationName: string,
    public fpDiagnostics: any,
    public wellClosePres: number
  ) {}
}
