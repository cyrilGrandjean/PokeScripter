declare class Quests implements Saveable {
  saveKey: string;
  defaults: {
    xp: number;
    refreshes: number;
    freeRefresh: boolean;
  };
  xp: KnockoutObservable<number>;
  refreshes: KnockoutObservable<number>;
  lastRefresh: Date;
  lastRefreshLevel: number;
  lastRefreshRegion: number;
  freeRefresh: KnockoutObservable<boolean>;
  questList: KnockoutObservableArray<Quest>;
  questLines: KnockoutObservableArray<QuestLine>;
  level: KnockoutComputed<number>;
  questSlots: KnockoutComputed<number>;
  completedQuests: KnockoutComputed<Array<Quest>>;
  currentQuests: KnockoutComputed<Array<Quest>>;
  incompleteQuests: KnockoutComputed<Array<Quest>>;
  constructor();
  /**
   * Gets a quest line by name
   * @param name The quest line name
   */
  getQuestLine(name: string): QuestLine;
  beginQuest(index: number): void;
  quitQuest(index: number, shouldConfirm?: boolean): void;
  claimQuest(index: number): void;
  addXP(amount: number): void;
  generateQuestList(date?: Date, level?: number): void;
  private generateSeed;
  refreshQuests(free?: boolean, shouldConfirm?: boolean): Promise<void>;
  resetRefreshes(): void;
  canAffordRefresh(): boolean;
  /**
   * Formula for the Money cost for refreshing quests
   * @returns 0 when all quests are complete, ~1 million when none are
   */
  getRefreshCost(): Amount;
  canStartNewQuest(): boolean;
  /**
   * Determines if all quests have been completed and claimed.
   */
  allQuestClaimed(): boolean;
  /**
   * Formula for the amount of exp to increase quest level.
   * 1000 XP is needed for level 2, and then increases 20% each level.
   * @param level The current quest level
   */
  levelToXP(level: number): number;
  xpToLevel(xp: number): number;
  percentToNextQuestLevel(): number;
  isDailyQuestsUnlocked(): boolean;
  loadQuestList(questList: any): void;
  loadQuestLines(questLines: any): void;
  toJSON(): {
    xp: number;
    refreshes: number;
    lastRefresh: Date;
    lastRefreshLevel: number;
    lastRefreshRegion: number;
    freeRefresh: boolean;
    questList: {
      index: number;
      customDescription: string;
      data: any[];
      initial: any;
      claimed: boolean;
      notified: boolean;
    }[];
    questLines: QuestLine[];
  };
  fromJSON(json: any): void;
}
