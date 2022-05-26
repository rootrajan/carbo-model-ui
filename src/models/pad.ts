import { Syncable } from './syncable';

export class Pad implements Syncable {
  constructor(
    public name = '',
    public operatorId: string = '',
    public serviceCompanyId?: string,
    public timezone?: string
  ) {}

  id!: string;
  ts!: number;
  created: number = new Date().getTime();
}
