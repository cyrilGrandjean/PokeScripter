import TypeColor = GameConstants.TypeColor;
declare class PokedexHelper {
  static toggleStatisticShiny: KnockoutObservable<boolean>;
  static toggleAllShiny: KnockoutObservable<boolean>;
  static getBackgroundColors(name: PokemonNameType): string;
  /**
   * Returns true if you have seen the pokemon
   * @param {number} id
   * @returns {boolean}
   */
  static pokemonSeen(id: number): KnockoutComputed<boolean>;
  static filteredList: KnockoutObservableArray<Record<string, any>>;
  static populateFilters(): void;
  static updateList(): void;
  static getList(): Array<Record<string, any>>;
  private static getFilters;
  static getImage(id: number): string;
  static getImageStatistics(id: number): string;
  private static isPureType;
}
