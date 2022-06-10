declare class DefeatDungeonQuest extends Quest implements QuestInterface {
  dungeon: string;
  private region;
  constructor(amount: number, reward: number, dungeon: string);
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
