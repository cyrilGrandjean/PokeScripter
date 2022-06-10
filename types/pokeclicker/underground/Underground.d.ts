declare class Underground implements Feature {
  name: string;
  saveKey: string;
  upgradeList: Array<Upgrade>;
  defaults: Record<string, any>;
  private _energy;
  static itemSelected: any;
  static energyTick: KnockoutObservable<number>;
  static counter: number;
  static sortDirection: number;
  static lastPropSort: string;
  constructor();
  initialize(): void;
  update(delta: number): void;
  getMaxEnergy(): number;
  getMaxItems(): number;
  getEnergyGain(): number;
  getEnergyRegenTime(): number;
  getDailyDealsMax(): number;
  getBombEfficiency(): number;
  getSurvey_Cost(): number;
  getSurvey_Efficiency(): number;
  getSizeY(): number;
  getMinItems(): number;
  getUpgrade(upgrade: UndergroundUpgrade.Upgrades): Upgrade;
  static showMine(): void;
  private static mineSquare;
  static calculateCssClass(i: number, j: number): string;
  private static rewardCssClass;
  static gainMineItem(id: number, num?: number): void;
  static getDiamondNetWorth(): number;
  static getCumulativeValues(): Record<
    string,
    {
      cumulativeValue: number;
      imgSrc: string;
    }
  >;
  static netWorthTooltip: KnockoutComputed<string>;
  static getMineItemByName(name: string): UndergroundItem;
  static getMineItemById(id: number): UndergroundItem;
  gainEnergy(): void;
  gainEnergyThroughItem(item: GameConstants.EnergyRestoreSize): void;
  static sortMineItems(prop: string, flip?: boolean): void;
  static sellMineItem(id: number, amount?: number): void;
  static sellAllMineItems(): void;
  static setSellLockOfMineItem(id: number, sellLocked: boolean): void;
  private static gainProfit;
  openUndergroundModal(): void;
  openUndergroundSellAllModal(): void;
  canAccess(): boolean;
  calculateItemEffect(item: GameConstants.EnergyRestoreSize): number;
  fromJSON(json: Record<string, any>): void;
  toJSON(): Record<string, any>;
  get energy(): number;
  set energy(value: number);
}
declare namespace Underground {
  const BASE_ENERGY_MAX = 50;
  const BASE_ITEMS_MAX = 3;
  const BASE_ITEMS_MIN = 1;
  const BASE_ENERGY_GAIN = 3;
  const BASE_ENERGY_REGEN_TIME = 60;
  const BASE_DAILY_DEALS_MAX = 3;
  const BASE_BOMB_EFFICIENCY = 10;
  const BASE_SURVEY_CHARGE_EFFICIENCY = 1;
  const sizeX = 25;
  const sizeY = 12;
  const CHISEL_ENERGY = 1;
  const HAMMER_ENERGY = 3;
  const BOMB_ENERGY = 10;
  const SURVEY_ENERGY = 15;
}
