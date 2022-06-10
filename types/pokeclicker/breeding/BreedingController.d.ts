declare class BreedingController {
  static spotTypes: string[];
  static initialize(): void;
  static openBreedingModal(): void;
  static getEggImage(egg: Egg): string;
  static getEggCssClass(egg: Egg): string;
  static getEggSpots(pokemonName: PokemonNameType): string;
  static visible(partyPokemon: PartyPokemon): KnockoutComputed<boolean>;
  private static isPureType;
  static displayValue: KnockoutObservable<string>;
  static getDisplayValue(pokemon: PartyPokemon): string;
}
