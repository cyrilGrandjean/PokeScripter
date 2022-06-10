declare enum PokemonLocationType {
  Route = 0,
  Roaming = 1,
  Dungeon = 2,
  DungeonBoss = 3,
  Evolution = 4,
  Egg = 5,
  Baby = 6,
  Shop = 7,
  Fossil = 8,
  Safari = 9,
  BattleFrontier = 10,
  Wandering = 11,
}
declare class PokemonHelper {
  static getPokemonsWithEvolution(evoType: GameConstants.StoneType): PartyPokemon[];
  static getEvolution(id: number, evoType: GameConstants.StoneType): string;
  static getPokemonById(id: number): DataPokemon;
  static getPokemonByName(name: PokemonNameType): DataPokemon;
  static typeStringToId(id: string): any;
  static typeIdToString(id: number): string;
  static getImage(pokemon: PokemonInterface, shiny: boolean): string;
  static getPokeballImage(pokemonName: PokemonNameType): string;
  static calcNativeRegion(pokemonName: PokemonNameType): number;
  static calcUniquePokemonsByRegion(region: GameConstants.Region): number;
  static getPokemonRegionRoutes(pokemonName: PokemonNameType, maxRegion?: GameConstants.Region): {};
  static getPokemonDungeons(
    pokemonName: PokemonNameType,
    maxRegion?: GameConstants.Region
  ): Array<string>;
  static getPokemonBossDungeons(
    pokemonName: PokemonNameType,
    maxRegion?: GameConstants.Region
  ): Array<string>;
  static getPokemonEggs(
    pokemonName: PokemonNameType,
    maxRegion?: GameConstants.Region
  ): Array<string>;
  static getPokemonShops(
    pokemonName: PokemonNameType,
    maxRegion?: GameConstants.Region
  ): Array<string>;
  static getPokemonRoamingRegions(
    pokemonName: PokemonNameType,
    maxRegion?: GameConstants.Region
  ): Array<string>;
  static getPokemonParents(
    pokemonName: PokemonNameType,
    maxRegion?: GameConstants.Region
  ): Array<string>;
  static getPokemonFossils(pokemonName: PokemonNameType): Array<string>;
  static getPokemonSafariChance(pokemonName: PokemonNameType): number;
  static getPokemonPrevolution(
    pokemonName: PokemonNameType,
    maxRegion?: GameConstants.Region
  ): Array<Evolution>;
  static getPokemonLevelPrevolution(
    pokemonName: PokemonNameType,
    maxRegion?: GameConstants.Region
  ): Evolution;
  static getPokemonStonePrevolution(
    pokemonName: PokemonNameType,
    maxRegion?: GameConstants.Region
  ): Evolution;
  static getPokemonBattleFrontier(pokemonName: PokemonNameType): Array<string>;
  static getPokemonWandering(pokemonName: PokemonNameType): Array<string>;
  static getPokemonLocations: (
    pokemonName: PokemonNameType,
    maxRegion?: GameConstants.Region
  ) => {};
}
