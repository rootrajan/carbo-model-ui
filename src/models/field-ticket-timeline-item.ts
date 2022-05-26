import { Syncable } from './syncable';
import { ChangeLogEntry } from './change-log-entry';

export enum FieldTicketTimelineItemAction {
  GENERATED = 'Generated New Field Ticket',
  UPDATED = 'Updated Field Ticket',
  CREATED_NEW_VERSION = 'Created a New Version',
  SENT_FOR_APPROVAL = 'Sent for Approval',
  APPROVED = 'Approved Field Ticket',
  REJECTED = 'Rejected Field Ticket',
  SHARED = 'Shared Field Ticket',
  COMMENTED = 'Commented on Field Ticket',
  ARCHIVED = 'Archived Version',
}

export class FieldTicketTimelineItem implements Syncable {
  constructor(
    public jobId: string,
    public fieldTicketId: string,
    public version: number,
    public when: Date,
    public who: string,
    public action: FieldTicketTimelineItemAction,
    public content: string,
    public changeLog?: ChangeLogEntry,
    public likes: string[] = []
  ) {}
  id!: string;
  ts!: number;
  created: number = new Date().getTime();
}
