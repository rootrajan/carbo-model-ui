import { EmailGroup } from './email-group';

export class GeneralSetting {
  id!: string;
  generateReportAt!: string;
  timezone: string = Intl.DateTimeFormat().resolvedOptions().timeZone;
  emailRecipients: EmailGroup[] = [];
  fieldTicketStructure = '';
  pumpScheduleStepNames: string[] = [];
  checklists: string[] = [];
  costTypes = '';
  costCodes = '';
  onSiteEquipmentCfg = '';
  generateChemItemCodeInFieldTicket = false;  

  constructor() {}

  getParsedFieldTicketStructure(): any {
    return JSON.parse(
      this.fieldTicketStructure.replace(/\s/g, ' ').replace(/'/g, '"')
    );
  }

  getParsedCostTypes(): any {
    if (this.costTypes) {
      return JSON.parse(
        this.costTypes.replace(/\s/g, ' ').replace(/'/g, '"')
      );
    } else {
      return undefined;
    }
  }

  getParsedCostCodes(): any {
    if (this.costCodes) {
      return JSON.parse(
        this.costCodes.replace(/\s/g, ' ').replace(/'/g, '"')
      );
    } else {
      return undefined;
    }
  }

  getParsedOnSiteEquipmentCfg(): any {
    if (this.onSiteEquipmentCfg) {
      return JSON.parse(
        this.onSiteEquipmentCfg.replace(/\s/g, ' ').replace(/'/g, '"')
      );
    } else {
      return undefined;
    }
  }
}
