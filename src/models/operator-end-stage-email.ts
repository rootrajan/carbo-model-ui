import { Email, EmailType } from './email';

export class OperatorEndStageEmail extends Email {
  constructor(
    public jobId: string,
    public to = '',
    public cc = '',
    public subject = '',
    public body = '',
    public well = '[Well]',
    public stage = '[Stage]',
    public pad = '[Pad]',
    public type: EmailType = EmailType.OPERATOR_END_STAGE
  ) {
    super(jobId, to, cc, subject, body);
  }
}
