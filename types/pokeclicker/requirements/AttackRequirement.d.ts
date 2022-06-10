declare class AttackRequirement extends AchievementRequirement {
  private static attack;
  constructor(value: number, option?: GameConstants.AchievementOption);
  getProgress(): number;
  hint(): string;
}
