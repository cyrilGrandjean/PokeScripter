declare class GymBattle extends Battle {
  static gym: Gym;
  static index: KnockoutObservable<number>;
  static totalPokemons: KnockoutObservable<number>;
  static pokemonAttack(): void;
  static clickAttack(): void;
  /**
   * Award the player with exp, and go to the next pokemon
   */
  static defeatPokemon(): void;
  /**
   * Reset the counter.
   */
  static generateNewEnemy(): void;
  static pokemonsDefeatedComputable: KnockoutComputed<number>;
  static pokemonsUndefeatedComputable: KnockoutComputed<number>;
}
