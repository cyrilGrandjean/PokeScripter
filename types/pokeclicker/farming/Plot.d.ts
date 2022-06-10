declare class Plot implements Saveable {
  saveKey: string;
  defaults: {
    isUnlocked: boolean;
    berry: BerryType;
    age: number;
    mulch: MulchType;
    mulchTimeLeft: number;
  };
  _isUnlocked: KnockoutObservable<boolean>;
  _berry: KnockoutObservable<BerryType>;
  _lastPlanted: KnockoutObservable<BerryType>;
  _age: KnockoutObservable<number>;
  _mulch: KnockoutObservable<MulchType>;
  _mulchTimeLeft: KnockoutObservable<number>;
  _auras: KnockoutObservable<number>[];
  _hasWarnedAboutToWither: boolean;
  formattedStageTimeLeft: KnockoutComputed<string>;
  formattedTimeLeft: KnockoutComputed<string>;
  formattedMulchTimeLeft: KnockoutComputed<string>;
  formattedAuras: KnockoutComputed<string>;
  auraGrowth: KnockoutComputed<number>;
  auraHarvest: KnockoutComputed<number>;
  auraMutation: KnockoutComputed<number>;
  auraReplant: KnockoutComputed<number>;
  auraDeath: KnockoutComputed<number>;
  auraBoost: KnockoutComputed<number>;
  isEmpty: KnockoutComputed<boolean>;
  isMulched: KnockoutComputed<boolean>;
  stage: KnockoutComputed<number>;
  tooltip: KnockoutComputed<string>;
  notifications: FarmNotificationType[];
  constructor(
    isUnlocked: boolean,
    berry: BerryType,
    age: number,
    mulch: MulchType,
    mulchTimeLeft: number
  );
  /**
   * Handles updating the berry plant
   * @param seconds Number of seconds to add to the plants age
   * @returns Whether the plot stage has changed this update
   */
  update(seconds: number): boolean;
  private stageUpdated;
  /**
   * Handles planting a berry on the plot
   * @param berry The BerryType
   */
  plant(berry: BerryType): void;
  /**
   * Returns how many berries will be harvested
   */
  harvestAmount(): number;
  /**
   * Handles killing the berry plant
   * @param harvested Whether this death was due to the player harvesting manually, or by withering
   */
  die(harvested?: boolean): void;
  generateWanderPokemon(): any;
  /**
   * Gets the growth multiplier for this plot
   */
  getGrowthMultiplier(): number;
  /**
   * Gets the harvest multiplier for this plot
   */
  getHarvestMultiplier(): number;
  /**
   * Gets the replant multiplier for this plot
   */
  getReplantMultiplier(): number;
  /**
   * Gets the mutation multiplier for this plot
   */
  getMutationMultiplier(): number;
  /**
   * Handles adding a multiplicative aura to the Plot
   * @param auraType The AuraType
   * @param multiplier The multiplier to modify the current aura by
   */
  addAura(auraType: AuraType, multiplier: number): void;
  /**
   * Handles setting the value of an aura to the Plot
   * @param auraType The AuraType
   * @param value The value to be set
   */
  setAura(auraType: AuraType, value: number): void;
  clearAuras(): void;
  emitAura(index: number): void;
  /**
   * returns true if the plot had mulch.
   */
  clearMulch(): boolean;
  fromJSON(json: Record<string, any>): void;
  toJSON(): Record<string, any>;
  /**
   * Finds the plot indices that are around the plot in a 3x3 square
   * @param index The plot index
   */
  static findNearPlots(index: number): number[];
  /**
   * Finds the plot indices that are directly next to the plot (aka a plus sign)
   * @param index The plot index
   */
  static findPlusPlots(index: number, filter?: (n: number) => boolean): number[];
  get berryData(): Berry;
  get isUnlocked(): boolean;
  set isUnlocked(value: boolean);
  get berry(): BerryType;
  set berry(berry: BerryType);
  get lastPlanted(): BerryType;
  set lastPlanted(berry: BerryType);
  get age(): number;
  set age(value: number);
  get mulch(): MulchType;
  set mulch(value: MulchType);
  get mulchTimeLeft(): number;
  set mulchTimeLeft(value: number);
  get auras(): number[];
}
