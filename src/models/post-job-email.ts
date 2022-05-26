import { Email, EmailType } from './email';

export class PostJobEmail extends Email {
  constructor(
    public jobId: string,
    public to = '',
    public cc = '',
    public subject = '',
    public body = '',
    public well = '[Well]',
    public stage = '[Stage]',
    public pad = '[Pad]',
    public type: EmailType = EmailType.POST_JOB
  ) {
    super(jobId, to, cc, subject, body);
  }
}
