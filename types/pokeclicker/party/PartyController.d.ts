declare const modalUtils: {
  observableState: typeof observableState;
};
declare class PartyController {
  static getCaughtStatusByName(name: PokemonNameType): CaughtStatus;
  static getCaughtStatus(id: number): CaughtStatus;
  static getStoneEvolutionsCaughtStatus(
    id: number,
    evoType?: GameConstants.StoneType
  ): CaughtStatus[];
  static hasMultipleStoneEvolutionsAvailable(
    pokemonName: string,
    evoType: GameConstants.StoneType
  ): boolean;
  static getMaxLevelPokemonList(): Array<PartyPokemon>;
  static getSortedList: KnockoutComputed<PartyPokemon[]>;
  private static hatcherySortedList;
  static getHatcherySortedList: KnockoutComputed<any[]>;
  private static proteinSortedList;
  static getProteinSortedList: KnockoutComputed<any[]>;
  static compareBy(
    option: SortOptions,
    direction: boolean
  ): (a: PartyPokemon, b: PartyPokemon) => number;
}
