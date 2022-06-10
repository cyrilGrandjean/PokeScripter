declare class DungeonBattle extends Battle {
  static trainer: KnockoutObservable<DungeonTrainer>;
  static trainerPokemonIndex: KnockoutObservable<number>;
  static remainingTrainerPokemon: KnockoutComputed<number>;
  static defeatedTrainerPokemon: KnockoutComputed<number>;
  /**
   * Award the player with money and exp, and throw a Pokéball if applicable
   */
  static defeatPokemon(): void;
  /**
   * Handles defeating a trainer Pokemon
   */
  private static defeatTrainerPokemon;
  static generateNewEnemy(): void;
  static generateNewLootEnemy(pokemon: PokemonNameType): void;
  /**
   * Handles generating the enemy Trainer Pokemon
   */
  static generateTrainerPokemon(): void;
  static generateNewBoss(): void;
}
