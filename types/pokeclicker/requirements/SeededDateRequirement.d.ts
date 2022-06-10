declare class SeededDateRequirement extends Requirement {
  seededRandFunction: () => boolean;
  constructor(seededRandFunction: () => boolean, option?: AchievementOption);
  getProgress(): number;
  hint(): string;
}
