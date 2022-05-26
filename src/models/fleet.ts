import { Syncable } from './syncable';

export class Fleet implements Syncable {
  constructor(public name = '', public districtId: string = '') {}

  id!: string;
  ts!: number;
  created: number = new Date().getTime();
}
