declare class DiamondRequirement extends AchievementRequirement {
  constructor(value: number, option?: GameConstants.AchievementOption);
  getProgress(): number;
  hint(): string;
}
