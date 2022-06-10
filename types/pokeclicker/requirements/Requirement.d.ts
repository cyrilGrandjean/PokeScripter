declare abstract class Requirement {
  requiredValue: number;
  option: GameConstants.AchievementOption;
  constructor(requiredValue: number, option: GameConstants.AchievementOption);
  getProgressPercentage(): string;
  isCompleted(): boolean;
  abstract getProgress(): number;
  abstract hint(): string;
}
