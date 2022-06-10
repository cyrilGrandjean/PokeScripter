declare class AchievementHandler {
  static achievementList: Achievement[];
  static navigateIndex: KnockoutObservable<number>;
  static maxBonus: KnockoutObservableArray<number>;
  static achievementListFiltered: KnockoutObservableArray<Achievement>;
  static numberOfTabs: KnockoutObservable<number>;
  static setNavigateIndex(index: number): void;
  static navigateRight(): void;
  static navigateLeft(): void;
  static isNavigateDirectionDisabled(navigateBackward: boolean): boolean;
  static calculateNumberOfTabs(): void;
  static filter: {
    status: KnockoutObservable<number>;
    type: KnockoutObservable<number>;
    region: KnockoutObservable<number>;
  };
  static getAchievementListWithIndex(): Achievement[];
  static getAchievementList(): Achievement[];
  static filterAchievementList(retainPage?: boolean): void;
  static compareBy(
    option: AchievementSortOptions,
    direction: boolean
  ): (a: Achievement, b: Achievement) => number;
  static preCheckAchievements(): void;
  static checkAchievements(): void;
  static addAchievement(
    name: string,
    description: string,
    property: AchievementRequirement,
    bonus: number,
    region?: GameConstants.Region,
    achievableFunction?: () => boolean | null
  ): void;
  static calculateBonus(): void;
  static calculateMaxBonus(): void;
  static bonusUnlocked(): number;
  static achievementBonus(): number;
  static achievementBonusPercent(): string;
  static findByName(name: string): Achievement;
  static initialize(multiplier: Multiplier, challenges: Challenges): void;
  static load(): void;
}
