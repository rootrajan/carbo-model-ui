import { Email, EmailType } from './email';

export class EndStageEmail extends Email {
  constructor(
    public jobId: string,
    public to = '',
    public cc = '',
    public subject = '',
    public body = '',
    public well = '[Well]',
    public stage = '[Well Stage]',
    public pad = '[Pad]',
    public startTime = '[Start Time]',
    public finishTime = '[Finish Time]',
    public pumpStart = 0,
    public pumpEnd = 0,
    public fieldCoordinator = '[Field Coordinator]',
    public serviceSupervisor = '[Service Supervisor]',
    public targetStagesPerDay = 0,
    public actualStagesPerDay = 0,
    public averagePressure = 0,
    public averageRate = 0,
    public totalCleanFluid = 0,
    public blender = '[Blender]',
    public additionalComments = '',
    public formationName = '',
    public type: EmailType = EmailType.END_STAGE
  ) {
    super(jobId, to, cc, subject, body);
  }
}
