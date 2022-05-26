import { Email, EmailType } from './email';

export class StartStageEmail extends Email {
  constructor(
    public jobId: string,
    public to = '',
    public cc = '',
    public subject = '',
    public body = '',
    public well = '[Well]',
    public owTime = '[OW Time]',
    public goToAccess = '[GoToMeeting ID]',
    public stage = '[Stage]',
    public pad = '[Pad]',
    public owPressure = 0.0,
    public pumpsOnline = 0,
    public type: EmailType = EmailType.START_STAGE
  ) {
    super(jobId, to, cc, subject, body);
  }
}
