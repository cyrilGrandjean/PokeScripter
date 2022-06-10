declare class Mine {
  static maxSkips: number;
  static grid: Array<Array<KnockoutObservable<number>>>;
  static rewardGrid: Array<Array<any>>;
  static itemsFound: KnockoutObservable<number>;
  static itemsBuried: KnockoutObservable<number>;
  static rewardNumbers: Array<number>;
  static surveyResult: KnockoutObservable<any>;
  static skipsRemaining: KnockoutObservable<number>;
  static toolSelected: KnockoutObservable<Mine.Tool>;
  private static loadingNewLayer;
  static loadMine(): void;
  private static getRandomCoord;
  private static canAddReward;
  private static alreadyHasRewardId;
  private static addReward;
  private static rotateReward;
  private static calculateRotation;
  static survey(): void;
  private static rewardSummary;
  private static updatesurveyResult;
  static click(i: number, j: number): void;
  private static hammer;
  private static chisel;
  static bomb(): void;
  private static skipLayer;
  private static breakTile;
  private static normalizeX;
  private static normalizeY;
  static getHeight(): number;
  static checkItemsRevealed(): void;
  static checkItemRevealed(id: number): boolean;
  static checkCompleted(): void;
  private static completed;
  static loadSavedMine(mine: any): void;
  static save(): Record<string, any>;
}
declare namespace Mine {
  enum Tool {
    "Chisel" = 0,
    "Hammer" = 1,
  }
}
