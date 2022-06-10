/**
 * Helper class to retrieve information from RoutePokemon
 */
declare class RouteHelper {
  /**
   * Retrieves a list of all Pokémon that can be caught on that route.
   * @param route
   * @param region
   * @param includeHeadbutt
   * @returns {string[]} list of all Pokémon that can be caught
   */
  static getAvailablePokemonList(
    route: number,
    region: GameConstants.Region,
    includeHeadbutt?: boolean
  ): PokemonNameType[];
  /**
   * Checks if all Pokémon on this route are caught by the player.
   * @param route
   * @param region
   * @param includeShiny
   * @param includeHeadbutt
   * @returns {boolean} true if all Pokémon on this route are caught.
   */
  static routeCompleted(
    route: number,
    region: GameConstants.Region,
    includeShiny: boolean,
    includeHeadbutt?: boolean
  ): boolean;
  static listCompleted(possiblePokemon: PokemonNameType[], includeShiny: boolean): boolean;
  static isAchievementsComplete(route: number, region: GameConstants.Region): boolean;
  static isThereQuestAtLocation(route: number, region: GameConstants.Region): boolean;
}
