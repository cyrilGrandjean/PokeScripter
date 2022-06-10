declare class GymBadgeRequirement extends Requirement {
  badge: BadgeEnums;
  constructor(badge: BadgeEnums, option?: GameConstants.AchievementOption);
  getProgress(): number;
  hint(): string;
}
