declare class ItemHandler {
  static stoneSelected: KnockoutObservable<string>;
  static pokemonSelected: KnockoutObservable<PokemonNameType>;
  static amountSelected: KnockoutObservable<number>;
  static amount: KnockoutObservable<number>;
  static amountToUse: number;
  static useItem(name: string, amount?: number): boolean;
  static hasItem(name: string): boolean;
  static resetAmount(): void;
  static increaseAmount(n: number): void;
  static useStones(): void;
  static initilizeEvoStones(): void;
}
