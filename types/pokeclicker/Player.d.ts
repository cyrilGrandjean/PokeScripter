/**
 * Required modules before porting:
 * Save.ts
 * upgrades/Upgrade.ts
 * towns/Town.ts - Town, TownList
 * worldmap/MapHelper.ts
 * items/Item.ts - ItemList
 */
/**
 * Information about the player.
 * All player variables need to be saved.
 */
declare class Player {
  private _route;
  private _region;
  private _subregion;
  private _townName;
  private _town;
  private starter;
  private _timeTraveller;
  private _origins;
  regionStarters: Array<KnockoutObservable<number>>;
  constructor(savedPlayer?: any);
  private _itemList;
  mineInventory: KnockoutObservableArray<any>;
  _lastSeen: number;
  effectList: {
    [name: string]: KnockoutObservable<number>;
  };
  effectTimer: {
    [name: string]: KnockoutObservable<string>;
  };
  highestRegion: KnockoutObservable<GameConstants.Region>;
  highestSubRegion: KnockoutObservable<number>;
  set itemList(value: { [p: string]: KnockoutObservable<number> });
  get itemList(): {
    [p: string]: KnockoutObservable<number>;
  };
  amountOfItem(itemName: string): number;
  private _itemMultipliers;
  get itemMultipliers(): {
    [p: string]: number;
  };
  get route(): KnockoutObservable<number>;
  set route(value: KnockoutObservable<number>);
  get region(): GameConstants.Region;
  set region(value: GameConstants.Region);
  get subregion(): number;
  set subregion(value: number);
  get town(): KnockoutObservable<Town>;
  set town(value: KnockoutObservable<Town>);
  gainItem(itemName: string, amount: number): void;
  loseItem(itemName: string, amount: number): void;
  lowerItemMultipliers(multiplierDecreaser: MultiplierDecreaser, amount?: number): void;
  hasMineItems(): boolean;
  mineInventoryIndex(id: number): number;
  getUndergroundItemAmount(id: number): any;
  toJSON(): Record<string, any>;
}
