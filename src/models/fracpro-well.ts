/* eslint-disable @typescript-eslint/no-explicit-any */

export class FracProWell {
  constructor(
    public id: number,
    public wellName: string,
    public wellAPI: string,
    public wellUid: string,
    public completionDate: string,
    public operator: string,
    public serviceCompany: string,
    public formation: string,
    public county: string,
    public state: string,
    public avgPerfTVD: number,
    public totalProppant: number,
    public lateralLength: number,
    public timeZone: string,
    public treatmentList: any[],
    public longitude = null,
    public latitude = null,
    public treatmentIntervalCount = 0
  ) {}
}
