declare class OakItemLoadouts implements Saveable {
  private static MAX_SLOTS;
  saveKey: string;
  defaults: {};
  loadouts: Array<KnockoutObservableArray<number>>;
  selectedLoadout: KnockoutObservable<number>;
  activateLoadout(index: number): void;
  toggleItem(item: OakItemType): void;
  hasItem(item: OakItemType): KnockoutComputed<boolean>;
  fromJSON(json: Array<Array<number>>): void;
  toJSON(): number[][];
}
