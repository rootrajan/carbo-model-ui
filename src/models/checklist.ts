import { CheckItem } from './check-item';

export class Checklist {
  constructor(
    public id = '',
    public jobId: string,
    public day: number,
    public shift: string,
    public items: CheckItem[] = [],
    public locked = false
  ) {}
}
