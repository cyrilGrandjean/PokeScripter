declare class SpecialRoutePokemon {
  pokemon: PokemonNameType[];
  req: Requirement;
  constructor(pokemon: PokemonNameType[], req: Requirement);
  isAvailable(): boolean;
}
