declare class DefeatPokemonsQuest extends Quest implements QuestInterface {
  route: number;
  region: GameConstants.Region;
  constructor(killsNeeded: number, reward: number, route: number, region: GameConstants.Region);
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
