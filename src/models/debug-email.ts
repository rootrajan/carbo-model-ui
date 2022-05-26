import { Email, EmailType } from './email';

export class DebugEmail extends Email {
  constructor(
    public jobId: string,
    public to = '',
    public cc = '',
    public subject = '',
    public body = '',
    public additionalComments = '',
    public type: EmailType = EmailType.UPDATE
  ) {
    super(jobId, to, cc, subject, body);
  }
}
