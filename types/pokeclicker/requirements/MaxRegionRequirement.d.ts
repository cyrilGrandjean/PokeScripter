declare class MaxRegionRequirement extends Requirement {
  constructor(maxRegion?: Region, option?: AchievementOption);
  getProgress(): number;
  hint(): string;
}
