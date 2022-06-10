declare class Farming implements Feature {
  private multiplier;
  name: string;
  saveKey: string;
  berryData: Berry[];
  mutations: Mutation[];
  farmHands: FarmHands;
  externalAuras: KnockoutObservable<number>[];
  mutationCounter: number;
  wanderCounter: number;
  queuedAuraReset: number;
  defaults: {
    berryList: number[];
    unlockedBerries: boolean[];
    mulchList: number[];
    plotList: Plot[];
    shovelAmt: number;
    mulchShovelAmt: number;
  };
  berryList: KnockoutObservable<number>[];
  unlockedBerries: KnockoutObservable<boolean>[];
  mulchList: KnockoutObservable<number>[];
  plotList: Array<Plot>;
  shovelAmt: KnockoutObservable<number>;
  mulchShovelAmt: KnockoutObservable<number>;
  highestUnlockedBerry: KnockoutComputed<number>;
  constructor(multiplier: Multiplier);
  initialize(): void;
  getGrowthMultiplier(): number;
  getReplantMultiplier(): number;
  getMutationMultiplier(): number;
  update(delta: number): void;
  handleNotification(farmNotiType: FarmNotificationType, wander?: any): void;
  resetAuras(): void;
  static unlockMatrix: BerryType[];
  unlockPlot(index: number): void;
  allPlotsUnlocked(): boolean;
  canBuyPlot(index: number): boolean;
  plotFPCost(index: number): number;
  plotBerryCost(index: number): {
    type: BerryType;
    amount: number;
  };
  plant(index: number, berry: BerryType, suppressResetAura?: boolean): void;
  plantAll(berry: BerryType): void;
  /**
   * Harvest a plot at the given index
   * @param index The index of the plot to harvest
   */
  harvest(index: number, suppressResetAura?: boolean): void;
  /**
   * Try to harvest all plots
   */
  harvestAll(): void;
  /**
   * Handles using the Berry Shovel to remove a Berry plant
   * @param index The plot index
   */
  shovel(index: number): void;
  /**
   * Handles using the Mulch Shovel to remove mulch from a plot
   * @param index The plot index
   */
  shovelMulch(index: number): void;
  /**
   * Adds mulch to a plot
   * @param index The plot index
   * @param mulch The MulchType to be added
   * @param amount The amount of mulch to apply. Defaults to 1
   */
  addMulch(index: number, mulch: MulchType, amount?: number): void;
  /**
   * Attempts to add mulch to all plots
   * @param mulch The MulchType to be added
   * @param amount The amount of mulch to apply to each plot. Defaults to 1
   */
  mulchAll(mulch: MulchType, amount?: number): void;
  private canMulch;
  /**
   * Gives the player a random Berry from the first 8 types
   * @param amount Amount of berries to give. Defaults to 1.
   * @param disableNotification Set to true to not notify the player. Defaults to false.
   */
  gainRandomBerry(amount?: number, disableNotification?: boolean): void;
  gainBerry(berry: BerryType, amount?: number, farming?: boolean): void;
  hasBerry(berry: BerryType): boolean;
  hasMulch(mulch: MulchType): boolean;
  canAccess(): boolean;
  unlockBerry(berry: BerryType): void;
  /**
   * Checks whether a Berry plant exists on the farm
   * @param berry The Berry type
   * @param stage The stage of the Berry plant. Defaults to PlotStage.Berry
   */
  berryInFarm(berry: BerryType, stage?: PlotStage): boolean;
  toJSON(): Record<string, any>;
  fromJSON(json: Record<string, any>): void;
  static genBounds: number[];
  static getGeneration(gen: number): BerryType[];
  static getColor(color: BerryColor): BerryType[];
}
