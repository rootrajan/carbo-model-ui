import { ActivityDay } from './activity-day';

export class ActivityLogEntrySummary {
  constructor(
    public activityDays: ActivityDay[],
    public scheduledTimeHours: number,
    public pumpTimeHours: number,
    public nptHours: number,
    public organizationNptHours: number,
    public completedStagesByWell: Record<string, number[]>,
    public avgPumpTimeDailyMilliSec: number
  ) {}
}
