import { Chemical } from './chemical';
import { Proppant } from './proppant';
import { ChemicalStage } from './chemical-stage';
import { ProppantStage } from './proppant-stage';
import { Syncable } from './syncable';
import { ThreeDWell } from './3d/three-d-well';

export class Well implements Syncable {
  constructor(
    public name = '',
    public api = '',
    public afeNumber = '',
    public totalStages = 0,
    public acidAdditives: Chemical[] = [],
    public slickwaters: Chemical[] = [],
    public linearGelCrosslinks: Chemical[] = [],
    public diverters: Chemical[] = [],
    public additionalChemicalTypes: Record<string, Chemical[]> = {},
    public proppants: Proppant[] = [],
    public inProgressChemicalStage?: ChemicalStage,
    public inProgressProppantStage?: ProppantStage,
    public submittedChemicalStages: ChemicalStage[] = [],
    public submittedProppantStages: ProppantStage[] = [],
    public longitude?: number,
    public latitude?: number,
    public fracproId: number = 0,
    public operatorId: string = '',
    public padId: string = '',
    public additionalFieldTicketNames: string[] = [],
    public additionalSubStageNames: number[] = [],
    public threeDWell?: ThreeDWell
  ) {}
  id!: string;
  ts!: number;
  created: number = new Date().getTime();

  getAllConfiguredChemicals(): Chemical[] {
    let result: Chemical[] = [];
    if (this.diverters) {
      result = result.concat(...this.diverters);
    }
    if (this.acidAdditives) {
      result = result.concat(...this.acidAdditives);
    }
    if (this.slickwaters) {
      result = result.concat(...this.slickwaters);
    }
    if (this.linearGelCrosslinks) {
      result = result.concat(...this.linearGelCrosslinks);
    }
    if (this.additionalChemicalTypes) {
      Object.values(this.additionalChemicalTypes).forEach((chemicals) => {
        result = result.concat(...chemicals);
      });
    }
    return result.map((each) => Object.assign(new Chemical(), each));
  }
}
