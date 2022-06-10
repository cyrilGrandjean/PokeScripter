/**
 * Handles all logic related to battling
 */
declare class Battle {
  static enemyPokemon: KnockoutObservable<BattlePokemon>;
  static counter: number;
  static catching: KnockoutObservable<boolean>;
  static catchRateActual: KnockoutObservable<number>;
  static pokeball: KnockoutObservable<GameConstants.Pokeball>;
  static lastPokemonAttack: number;
  static lastClickAttack: number;
  static route: any;
  /**
   * Probably not needed right now, but might be if we add more logic to a gameTick.
   */
  static tick(): void;
  /**
   * Attacks with Pokémon and checks if the enemy is defeated.
   */
  static pokemonAttack(): void;
  /**
   * Attacks with clicks and checks if the enemy is defeated.
   */
  static clickAttack(): void;
  /**
   * Award the player with money and exp, and throw a Pokéball if applicable
   */
  static defeatPokemon(): void;
  /**
   * Generate a new enemy based on the current route and region.
   * Reset the counter.
   */
  static generateNewEnemy(): void;
  protected static calculateActualCatchRate(
    enemyPokemon: BattlePokemon,
    pokeBall: GameConstants.Pokeball
  ): number;
  protected static prepareCatch(
    enemyPokemon: BattlePokemon,
    pokeBall: GameConstants.Pokeball
  ): void;
  protected static attemptCatch(enemyPokemon: BattlePokemon): void;
  static catchPokemon(enemyPokemon: BattlePokemon): void;
  static gainItem(): void;
}
