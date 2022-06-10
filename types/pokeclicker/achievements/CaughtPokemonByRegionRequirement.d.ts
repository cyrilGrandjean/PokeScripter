declare class CaughtUniquePokemonsByRegionRequirement extends AchievementRequirement {
  private region;
  constructor(
    region: GameConstants.Region,
    amount?: number,
    option?: GameConstants.AchievementOption
  );
  getProgress(): number;
  hint(): string;
}
