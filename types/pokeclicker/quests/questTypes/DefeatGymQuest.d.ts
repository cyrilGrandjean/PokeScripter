declare class DefeatGymQuest extends Quest implements QuestInterface {
  gymTown: string;
  private region;
  constructor(amount: number, reward: number, gymTown: string);
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
