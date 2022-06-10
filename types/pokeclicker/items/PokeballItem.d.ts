declare class PokeballItem extends Item {
  type: GameConstants.Pokeball;
  constructor(
    type: GameConstants.Pokeball,
    basePrice: number,
    currency?: GameConstants.Currency,
    options?: ShopOptions,
    displayName?: string
  );
  gain(amt: number): void;
}
