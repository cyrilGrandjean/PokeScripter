declare class RoamingPokemonList {
  static list: Partial<Record<GameConstants.Region, Array<RoamingPokemon>>>;
  static increasedChanceRoute: Array<KnockoutObservable<RegionRoute>>;
  constructor();
  static add(region: GameConstants.Region, roamer: RoamingPokemon): void;
  static remove(region: GameConstants.Region, pokemonName: PokemonNameType): void;
  static getRegionalRoamers(region: GameConstants.Region): Array<RoamingPokemon>;
  static getIncreasedChanceRouteByRegion(
    region: GameConstants.Region
  ): KnockoutObservable<RegionRoute>;
  private static period;
  static generateIncreasedChanceRoutes(date?: Date): void;
}
