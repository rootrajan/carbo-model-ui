export class Chemical {
  constructor(
    public id = '',
    public name = '',
    public subtype?: ChemicalSubType,
    public types: ChemicalType[] = [],
    public concentration = '',
    public volumePerStage: number = 0,
    public code: string = '',
    public price: number = 0,
    public uom: string = '',
    public description?: string,
    public accountGroup?: string,
    public isCustomerSupplied?: boolean,
    public acidName?: string,
    public acidDilutionRate?: number
  ) {}

  public get fullName(): string {
    if (this.description) {
      return this.name + ' - ' + this.description;
    } else {
      return this.name;
    }
  }
}

export enum ChemicalSubType {
  ACID = 'Acid',
  IRON_CONTROL = 'Iron Control',
  CORROSION_INHIBITOR = 'Corrosion Inhibitor',
  SURFACTANT = 'Surfactant',
  FRICTION_REDUCER = 'Friction Reducer',
  BIOCIDE = 'Biocide',
  SCALE_INHIBITOR = 'Scale Inhibitor',
  BREAKER = 'Breaker',
  CLAY_STABILIZER = 'Clay Stabilizer',
  MINERAL_OIL = 'Mineral Oil',
  OXYGEN_SCAVENGER = 'Oxygen Scavenger',
  GELLING_AGENT = 'Gelling Agent',
  CROSSLINKER = 'Crosslinker',
  PH_ADJUSTING_AGENT = 'Ph Adjusting Agent',
  DIVERTER = 'Diverter',
  H2S_SCAVENGER = 'H2S Scavenger',
  SOLVENT = 'Solvent',
  NEUTRALIZER = 'Neutralizer',
  FOAMING_AGENT = 'Foaming Agent',
  ACID_ADDITIVE_COMBO_CI_FE_NE = 'Acid Additive Combo (CI/FE/NE)',
}

export enum ChemicalType {
  ACID_ADDITIVES,
  SLICKWATER,
  LINEAR_GEL_CROSSLINK,
  DIVERTER,
}
