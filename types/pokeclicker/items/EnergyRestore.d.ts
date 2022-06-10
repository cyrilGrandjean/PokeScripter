declare class EnergyRestore extends Item {
  type: GameConstants.EnergyRestoreSize;
  constructor(
    type: GameConstants.EnergyRestoreSize,
    basePrice: number,
    currency?: GameConstants.Currency,
    displayName?: string
  );
  use(): boolean;
}
