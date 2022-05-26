import { Syncable } from './syncable';

export class District implements Syncable {
  constructor(public name = '') {}

  id!: string;
  ts!: number;
  created: number = new Date().getTime();
}
