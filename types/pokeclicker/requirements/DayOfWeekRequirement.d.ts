declare class DayOfWeekRequirement extends Requirement {
  static date: KnockoutObservable<Number>;
  DayOfWeekNum: number;
  constructor(DayOfWeekNum: number, option?: GameConstants.AchievementOption);
  getProgress(): number;
  hint(): string;
}
