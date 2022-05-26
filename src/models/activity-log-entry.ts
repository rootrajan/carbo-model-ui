import moment from 'moment';
import { Syncable } from './syncable';

export class ActivityLogEntry implements Syncable {
  constructor(
    public jobId?: string,
    public date?: Date,
    public day?: number,
    public start?: string,
    public end?: string,
    public well?: string,
    public stage?: number,
    public opsActivity?: string,
    public eventOrNptCode?: string,
    public complete?: boolean,
    public completedDate?: number,
    public subNptCode?: string,
    public equipment?: string,
    public equipmentIssueId?: string,
    public comments?: string,
    public endTimeOnNextDay: boolean = false
  ) {}
  id!: string;
  ts!: number;
  created: number = new Date().getTime();

  get duration(): number {
    let duration = 0;

    if (this.end) {
      const format = this.end.length === 5 ? 'HH:mm' : 'YYYYMMDD HH:mm';
      let end = moment(this.end, format);
      if (this.end === '00:00') {
        end = end.add(1, 'days');
      }
      duration = end.diff(moment(this.start, format));
    }

    return duration;
  }

  isNPT(): boolean {
    return this.opsActivity !== 'Scheduled Time';
  }

  getLatestActivityCode(): string | undefined {
    if (this.subNptCode) {
      return this.subNptCode;
    } else {
      return this.eventOrNptCode;
    }
  }
}
