import { Email, EmailType } from './email';

export class FieldTicketEmail extends Email {
  constructor(
    public jobId: string,
    public to = '',
    public cc = '',
    public subject = '',
    public body = '',
    public well = '[Well]',
    public stage = '[Well Stage]',
    public additionalComments = '',
    public type: EmailType = EmailType.GENERIC
  ) {
    super(jobId, to, cc, subject, body);
  }
}
