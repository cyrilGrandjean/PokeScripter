declare class EggItem extends CaughtIndicatingItem {
  type: GameConstants.EggItemType;
  constructor(
    type: GameConstants.EggItemType,
    basePrice: number,
    currency?: GameConstants.Currency,
    displayName?: string
  );
  use(): boolean;
  getCaughtStatus(): CaughtStatus;
}
