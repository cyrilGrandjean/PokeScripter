declare class HarvestBerriesQuest extends Quest implements QuestInterface {
  private berryType;
  constructor(amount: number, reward: number, berryType: BerryType);
  static canComplete(): boolean;
  static generateData(): any[];
  private static calcReward;
  get description(): string;
  toJSON(): {
    index: number;
    customDescription: string;
    data: any[];
    initial: any;
    claimed: boolean;
    notified: boolean;
  };
}
