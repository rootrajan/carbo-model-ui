export class ConsumableSummary {
  constructor(consumable: string) {
    this.consumable = consumable;
  }

  consumable: string;
  delivered = 0;
  used = 0;
  onLocation = 0;
}

export class ConsumableSummaryByPump {
  constructor(consumable: string) {
    this.consumable = consumable;
  }

  consumable: string;
  [key: number]: number;
}
