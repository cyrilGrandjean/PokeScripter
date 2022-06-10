declare class BattleFrontierBattle extends Battle {
  static alternateAttack: boolean;
  static pokemonIndex: KnockoutObservable<number>;
  static totalPokemons: KnockoutObservable<number>;
  static trainer: KnockoutObservable<number>;
  static counter: number;
  static pokemonAttack(): void;
  /**
   * Award the player with exp, gems and go to the next pokemon
   */
  static defeatPokemon(): void;
  static generateNewEnemy(): void;
}
