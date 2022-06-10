declare class CapturePokemonsQuest extends Quest implements QuestInterface {
  constructor(capturesNeeded: number, reward: number);
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
