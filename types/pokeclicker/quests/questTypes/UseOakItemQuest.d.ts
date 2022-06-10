declare class UseOakItemQuest extends Quest implements QuestInterface {
  private item;
  constructor(amount: number, reward: number, item: OakItemType);
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
