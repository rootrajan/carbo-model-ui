import { Syncable } from './syncable';
import { FieldTicketVersion } from './field-ticket-version';

export enum FieldTicketStatus {
  IN_PROGRESS = 'In Progress',
  SENT_FOR_APPROVAL = 'Sent for Approval',
  ARCHIVED = 'Archived',
  APPROVED = 'Approved',
  REJECTED = 'Rejected',
}

export class FieldTicket implements Syncable {
  constructor(
    public jobId: string,
    public date: Date,
    public well: string,
    public name: string,
    public versions: FieldTicketVersion[] = []
  ) {}
  id!: string;
  ts!: number;
  created: number = new Date().getTime();
}
