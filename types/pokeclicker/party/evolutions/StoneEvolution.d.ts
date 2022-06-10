declare class StoneEvolution extends Evolution {
  evolvedPokemon: PokemonNameType;
  stone: GameConstants.StoneType;
  constructor(
    basePokemon: PokemonNameType,
    evolvedPokemon: PokemonNameType,
    stone: GameConstants.StoneType
  );
  getEvolvedPokemon(): PokemonNameType;
}
