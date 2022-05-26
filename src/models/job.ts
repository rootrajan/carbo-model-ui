import { Syncable } from './syncable';
import { Well } from './well';
import { Standby } from './standby';
import { BucketTest } from './bucket-test';
import { Vendor } from './vendor';
import { ChemicalOrder } from './chemical-order';
import { ChemicalBOLEmail } from './chemical-bol-email';
import { StartStageEmail } from './start-stage-email';
import { EndStageEmail } from './end-stage-email';
import { OperatorEndStageEmail } from './operator-end-stage-email';
import { UpdateEmail } from './update-email';
import { PostJobEmail } from './post-job-email';
import { EmailGroup } from './email-group';
import { OnSiteEquipment } from './on-site-equipment';
import { User } from './user';
import { ChemicalDeliveryEntry } from './chemical-delivery-entry';
import { ChannelConfig } from './channel-config';
import {
  ContainerType,
  ProppantDeliveryEntry,
} from './proppant-delivery-entry';
import { SetupContainer } from './setup-container';
import { DailyJobRecord } from './daily-job-record';
import { ActivityLogEntry } from './activity-log-entry';

export enum JobStatus {
  IN_PROGRESS = 'In Progress',
  COMPLETED = 'Completed',
}

export enum SilosPackConfig {
  SINGLE = 6,
  DOUBLE = 12,
}

export class Job implements Syncable {
  constructor(
    public jobNumber = '',
    public fleet = '',
    public operator = '',
    public pad = '',
    public location = '',
    public zipper = false,
    public wells: Well[] = [],
    public targetStagesPerDay = 0,
    public targetDailyPumpTime = 0,
    public chemicalDeliveries: ChemicalDeliveryEntry[] = [],
    public totesOnStandby: Standby[] = [],
    public bucketsOnStandby: Standby[] = [],
    public numberOfUnits: number = 3,
    public bucketTest = new BucketTest(),
    public proppantSchematics: Record<string, SetupContainer> = {},
    public proppantDeliveries: ProppantDeliveryEntry[] = [],
    public proppantSchematicType = ContainerType.silos,
    public vendors: Vendor[] = [],
    public blenders: OnSiteEquipment[] = [],
    public hydrationUnits: OnSiteEquipment[] = [],
    public pumps: OnSiteEquipment[] = [],
    public chemAds: OnSiteEquipment[] = [],
    public ironManifolds: OnSiteEquipment[] = [],
    public dataVans: OnSiteEquipment[] = [],
    public silos: OnSiteEquipment[] = [],
    public emails: Record<string, EmailGroup[]> = {},
    public chemicalOrders: ChemicalOrder[] = [],
    public chemicalBOLEmails: ChemicalBOLEmail[] = [],
    public startStageEmails: StartStageEmail[] = [],
    public endStageEmails: EndStageEmail[] = [],    
    public operatorEndStageEmails: OperatorEndStageEmail[] = [],
    public updateEmails: UpdateEmail[] = [],
    public postJobEmails: PostJobEmail[] = [],
    public curWellId: string = '',
    public curStage: string = '',
    public users: User[] = [],
    public discounts?: Record<string, number>,
    public startDate?: number,
    public startDateStr?: string,
    public status: JobStatus = JobStatus.IN_PROGRESS,
    public coneLbs = 14000,
    public beltDirection: string = 'left',
    public mileageChargeDistance = 0,
    public wellheadCo?: string,
    public wirelineCo?: string,
    public goToMeetingId?: string,
    public includeToeStage?: boolean,
    public modified?: number,
    public lastModifiedBy?: string,
    public activityLogStartTime: string = '00:00',
    public organizationId?: string,
    public rts?: number,
    public disableOffline?: boolean,
    public predefinedChannels: string[] = [],
    public channelConfigs?: ChannelConfig,
    public sharedWithOrganizationId?: string,
    public serviceCompany?: string,
    public isHide?: boolean
  ) {}

  id!: string;
  ts!: number;
  created: number = new Date().getTime();

  getAllOnSiteEquipments(): OnSiteEquipment[] {
    let result: OnSiteEquipment[] = [];
    result = result.concat(...this.blenders);
    result = result.concat(...this.hydrationUnits);
    result = result.concat(...this.chemAds);
    result = result.concat(...this.ironManifolds);
    result = result.concat(...this.pumps);
    result = result.concat(...this.dataVans);
    result = result.concat(...this.silos);
    return result;
  }

  estimatedFinishedDate(): Date | undefined {
    if (!this.startDate) {
      return undefined;
    } else {
      const totalStageCount = this.wells
        .map((well) => (well.totalStages ? well.totalStages : 0))
        .reduce((sum, current) => sum + +current, 0);
      if (this.targetStagesPerDay) {
        const numOfDays = totalStageCount / this.targetStagesPerDay;
        const startDate = new Date(this.startDate);
        startDate.setDate(startDate.getDate() + numOfDays);
        return startDate;
      } else {
        return undefined;
      }
    }
  }

  getPercentDone(dailyJobRecords: DailyJobRecord[]): number {
    const totalStages = this.wells.reduce(
      (sum, current) => sum + +current.totalStages,
      0
    );
    if (totalStages > 0) {
      const jobRecords = dailyJobRecords.filter(
        (each) => each.jobId === this.id
      );
      const curTotalStages = jobRecords.reduce(
        (sum, current) => sum + +current.actualStagePerDay,
        0
      );
      const percentDone = (curTotalStages / totalStages) * 100;
      return percentDone <= 100 ? percentDone : 100;
    } else {
      return 0;
    }
  }

  getTargetPercent(): number {
    const totalStages = this.wells.reduce(
      (sum, current) => sum + +current.totalStages,
      0
    );
    if (totalStages > 0 && this.startDate) {
      const today = new Date().getTime();
      const daysSinceStarted = (today - this.startDate) / (1000 * 3600 * 24);
      const targetCompleted = daysSinceStarted * this.targetStagesPerDay;
      const targetPercent = (targetCompleted / totalStages) * 100;
      return targetPercent;
    } else {
      return 0;
    }
  }

  getLastDate(latestActivity: ActivityLogEntry | undefined): Date | undefined {
    if (this.startDate && latestActivity && latestActivity.day) {
      const lastDate = new Date(this.startDate);
      lastDate.setDate(lastDate.getDate() + latestActivity.day - 1);
      return lastDate;
    } else {
      return undefined;
    }
  }
}
