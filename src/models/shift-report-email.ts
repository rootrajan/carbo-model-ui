/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Email, EmailType } from './email';
import { ServiceSupervisor } from './service-supervisor';
import { PumpLogEntry } from './pump-log-entry';
import { PumpIssue } from './pump-issue';
import { Checklist } from './checklist';
import { ShiftInfo } from './shift-info';

export class ShiftReportEmail extends Email {
  constructor(
    public jobId: string,
    public to = '',
    public cc = '',
    public subject = '',
    public body = '',
    public type: EmailType = EmailType.SHIFT_REPORT,
    public supervisors: ServiceSupervisor[] = [],
    public completedStages: PumpLogEntry[] = [],
    public pumpSummary = {
      totalPumpTime: '',
      organizationNPT: '',
      customerNPT: '',
      thirdPartyNPT: '',
      pumpEfficiency: '',
    },
    public pumpIssues: PumpIssue[] = [],
    public checklist: Checklist[] = [],
    public shiftInfo: ShiftInfo = new ShiftInfo(null, null, null),
    public eo?: number,
    public mechanic?: number,
    public eTech?: number,
    public fta?: number,
    public stage?: any
  ) {
    super(jobId, to, cc, subject, body);
  }
}
