declare class BattleItem extends Item {
  multiplierType?: keyof typeof MultiplierType;
  multiplyBy?: number;
  type: GameConstants.BattleItemType;
  constructor(
    type: GameConstants.BattleItemType,
    description: string,
    basePrice: number,
    currency?: GameConstants.Currency,
    displayName?: string,
    multiplierType?: keyof typeof MultiplierType,
    multiplyBy?: number
  );
  use(): boolean;
  checkCanUse(): boolean;
}
