declare class DailyDeal {
  item1: UndergroundItem;
  item2: UndergroundItem;
  amount1: number;
  amount2: number;
  static list: KnockoutObservableArray<DailyDeal>;
  constructor();
  static generateDeals(maxDeals: number, date: Date): void;
  private static randomItem;
  private static randomAmount;
  private isValid;
  private static sameDealExists;
  private static reverseDealExists;
  static canUse(i: number): boolean;
  static use(i: number, tradeTimes?: number): void;
}
