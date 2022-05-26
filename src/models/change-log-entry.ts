import { Syncable } from './syncable';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export enum ChangeLogObjectType {
  FIELD_TICKET = 'Field Ticket',
}

export class ChangeLogEntry implements Syncable {
  constructor(
    public date: Date,
    public type: ChangeLogObjectType,
    public action: ChangeLogAction,
    public who: string,
    public organizationId: string,
    public before: any,
    public after: any,
    public jobId?: string,
    public additionalInfo?: any
  ) {}

  id!: string;
  created!: number;
  ts!: number;
}

export enum ChangeLogAction {
  CREATE = 'Create',
  UPDATE = 'Update',
  DELETE = 'Delete',
}
