declare class KeyItems implements Feature {
  name: string;
  saveKey: string;
  itemList: KeyItem[];
  defaults: Record<string, any>;
  constructor();
  initialize(): void;
  hasKeyItem(item: KeyItemType): boolean;
  gainKeyItem(item: KeyItemType, silent?: boolean): void;
  canAccess(): boolean;
  fromJSON(json: Record<string, any>): void;
  toJSON(): Record<string, any>;
  update(delta: number): void;
}
