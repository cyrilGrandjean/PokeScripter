declare abstract class AchievementRequirement extends Requirement {
  achievementType: GameConstants.AchievementType;
  constructor(
    requiredValue: number,
    option: GameConstants.AchievementOption,
    achievementType?: GameConstants.AchievementType
  );
}
