declare class EvolutionStone extends CaughtIndicatingItem {
  type: GameConstants.StoneType;
  unlockedRegion: GameConstants.Region;
  constructor(
    type: GameConstants.StoneType,
    basePrice: number,
    currency: GameConstants.Currency,
    displayName: string,
    unlockedRegion?: GameConstants.Region
  );
  gain(n: number): void;
  use(pokemon?: PokemonNameType): boolean;
  getCaughtStatus: KnockoutComputed<CaughtStatus>;
}
