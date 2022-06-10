declare class BerryDeal {
  berries: {
    berryType: BerryType;
    amount: number;
  }[];
  item: {
    itemType: Item | UndergroundItem;
    amount: number;
  };
  static list: Record<GameConstants.Region, KnockoutObservableArray<BerryDeal>>;
  constructor(
    berry: BerryType[],
    berryAmount: number[],
    item: Item | UndergroundItem,
    itemAmount: number
  );
  private static randomBerry;
  private static randomBattleItem;
  private static randomEvoItem;
  private static randomUndergroundItem;
  private static randomPokeballDeal;
  static getDeals(region: GameConstants.Region): KnockoutObservableArray<BerryDeal>;
  static generateDeals(date: Date): void;
  private static generateJohtoDeals;
  private static generateHoennDeals;
  private static generateSinnohDeals;
  static canUse(region: GameConstants.Region, i: number): boolean;
  static use(region: GameConstants.Region, i: number, tradeTimes?: number): void;
}
