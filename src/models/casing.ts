import { Syncable } from './syncable';

export class Casing implements Syncable {
  constructor(
    public jobId: string,
    public wellId: string,     
    public stage: string,
    public type: string,
    public casingSpec: string,
    public bottomTVD: number,
    public bottomTMD: number,
    public IDVal: number,
    public drift: number,
    public burst: number,
    public collapse: number,
    public yieldValue: number,
    public jnt: number,
    public capacity: number,
    public displace: number,
    public dvTool: number,
    public sxsCmt: string,
    public holeSize: string,
  ) {}

  id!: string;
  ts!: number;
  created: number = new Date().getTime();
}
