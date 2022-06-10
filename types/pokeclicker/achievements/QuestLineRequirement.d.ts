declare class QuestLineRequirement extends Requirement {
  private questLineName;
  constructor(questLineName: string, option?: GameConstants.AchievementOption);
  getProgress(): number;
  hint(): string;
}
