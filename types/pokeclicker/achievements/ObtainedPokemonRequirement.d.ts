declare class ObtainedPokemonRequirement extends Requirement {
  pokemonID: number;
  constructor(pokemon: PokemonListData, uncaught?: boolean);
  getProgress(): number;
  hint(): string;
}
