declare abstract class Evolution {
  basePokemon: PokemonNameType;
  type: EvolutionType[];
  constructor(basePokemon: PokemonNameType);
  isSatisfied(): boolean;
  abstract getEvolvedPokemon(): PokemonNameType;
  evolve(notification?: boolean): boolean;
}
declare type MinimalEvo = ConstructorImplementing<Evolution, "getEvolvedPokemon">;
declare function restrictEvoWith(
  restrictionTest: () => boolean,
  type?: EvolutionType
): <T extends Constructor<Pick<Evolution, "getEvolvedPokemon"> & Evolution>>(Base: T) => T;
