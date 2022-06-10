declare class GainFarmPointsQuest extends Quest implements QuestInterface {
  constructor(amount: number, reward: number);
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
