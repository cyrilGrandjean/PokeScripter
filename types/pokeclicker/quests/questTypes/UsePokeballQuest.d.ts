declare class UsePokeballQuest extends Quest implements QuestInterface {
  private pokeball;
  constructor(amount: number, reward: number, pokeball: GameConstants.Pokeball);
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
