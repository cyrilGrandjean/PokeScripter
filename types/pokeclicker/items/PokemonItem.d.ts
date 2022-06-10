declare class PokemonItem extends CaughtIndicatingItem {
  type: PokemonNameType;
  constructor(pokemon: PokemonNameType, basePrice: number, currency?: GameConstants.Currency);
  gain(amt: number): void;
  getCaughtStatus(): CaughtStatus;
  get image(): string;
}
