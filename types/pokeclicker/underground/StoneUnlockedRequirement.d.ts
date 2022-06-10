declare class StoneUnlockedRequirement extends Requirement {
  constructor(stoneType: GameConstants.StoneType, option?: GameConstants.AchievementOption);
  getProgress(): number;
  hint(): string;
}
