import { Email, EmailType } from './email';
import { MorningReportInfo } from './morning-report-info';

export class MorningReportEmail extends Email {
  constructor(
    public jobId: string,
    public to = '',
    public cc = '',
    public subject = '',
    public body = '',
    public well = '[Well]',
    public stage = '[Well Stage]',
    public pad = '[Pad]',  
    public morningReportInfo?: MorningReportInfo,
    public type: EmailType = EmailType.OPERATOR_MORNING_REPORT
  ) {
    super(jobId, to, cc, subject, body);
  }
}
