import { Syncable } from './syncable';

export class Operator implements Syncable {
  constructor(
    public name = '',
    public linkedOrganizationId = ''
  ) {}
  id!: string;
  ts!: number;
  created: number = new Date().getTime();
}
