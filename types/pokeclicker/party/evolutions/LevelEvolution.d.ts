declare class LevelEvolution extends Evolution {
  evolvedPokemon: PokemonNameType;
  level: number;
  triggered: boolean;
  constructor(basePokemon: PokemonNameType, evolvedPokemon: PokemonNameType, level: number);
  getEvolvedPokemon(): PokemonNameType;
  isSatisfied(): boolean;
  evolve(): boolean;
}
