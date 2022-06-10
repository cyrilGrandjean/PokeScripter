declare class DungeonRunner {
  static dungeon: Dungeon;
  static timeLeft: KnockoutObservable<number>;
  static timeLeftPercentage: KnockoutObservable<number>;
  static fighting: KnockoutObservable<boolean>;
  static map: DungeonMap;
  static chestsOpened: number;
  static currentTileType: any;
  static fightingBoss: KnockoutObservable<boolean>;
  static defeatedBoss: KnockoutObservable<boolean>;
  static dungeonFinished: KnockoutObservable<boolean>;
  static initializeDungeon(dungeon: any): boolean;
  static tick(): void;
  /**
   * Handles the click event in the dungeon view
   */
  static handleClick(): void;
  static lootInput(): Loot;
  static openChest(): void;
  static gainLoot(input: any, amount: any): any;
  static startBossFight(): void;
  static dungeonLeave(): void;
  private static dungeonLost;
  static dungeonWon(): void;
  static timeLeftSeconds: KnockoutComputed<string>;
  static dungeonCompleted(dungeon: Dungeon, includeShiny: boolean): boolean;
  static isAchievementsComplete(dungeon: Dungeon): boolean;
  static isThereQuestAtLocation(dungeon: Dungeon): boolean;
  static hasEnoughTokens(): boolean;
  static dungeonLevel(): number;
}
