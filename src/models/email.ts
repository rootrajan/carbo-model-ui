import { AttachedFileMetaData } from './attached-file-meta-data';
import { Syncable } from './syncable';
import { generateObjectId } from '../utils/object-id';

export enum EmailType {
  CHEMICAL_ORDER = 'CHEMICAL_ORDER',
  CHEMICAL_BOL = 'CHEMICAL_BOL',
  START_STAGE = 'START_STAGE',
  END_STAGE = 'END_STAGE',
  UPDATE = 'UPDATE',
  POST_JOB = 'POST_JOB',
  GENERIC = 'GENERIC',
  DEBUG = 'DEBUG',
  OPERATOR_END_STAGE = 'OPERATOR_END_STAGE',
  OPERATOR_MORNING_REPORT = 'OPERATOR_MORNING_REPORT',
  SHIFT_REPORT = 'SHIFT_REPORT',
}

export class Email implements Syncable {
  constructor(
    public jobId: string,
    public to: string,
    public cc: string,
    public subject: string,
    public body: string,
    public attachedFiles: AttachedFileMetaData[] = [],
    public sentAt?: Date,
    public status?: string,
    public by?: string
  ) {}

  readonly id!: string;
  ts!: number;
  created: number = new Date().getTime();
  emailId: string = generateObjectId();
}
