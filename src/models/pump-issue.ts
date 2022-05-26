import { Syncable } from './syncable';
import { Shift } from './shift-info';

export class PumpIssue implements Syncable {
  constructor(
    public jobId: string,
    public date: Date,
    public shift: Shift,
    public pumpNumber: string,    
    public issue: string,
    public hole: number,
    public well: string,
    public stage: number,
    public padStage: number,
    public issueCategory?: string,
  ) {}
  id!: string;
  ts!: number;
  created: number = new Date().getTime();
}
