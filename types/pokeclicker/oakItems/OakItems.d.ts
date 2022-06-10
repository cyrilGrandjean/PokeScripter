declare class OakItems implements Feature {
  private multiplier;
  name: string;
  saveKey: string;
  itemList: OakItem[];
  unlockRequirements: number[];
  defaults: Record<string, any>;
  constructor(unlockRequirements: number[], multiplier: Multiplier);
  canAccess(): boolean;
  initialize(): void;
  calculateBonus(item: OakItemType, useItem?: boolean): number;
  isUnlocked(item: OakItemType): boolean;
  use(item: OakItemType, scale?: number): void;
  maxActiveCount(): number;
  activeCount(): number;
  hasAvailableSlot(): boolean;
  fromJSON(json: Record<string, any>): void;
  toJSON(): Record<string, any>;
  update(delta: number): void;
  isActive(item: OakItemType): boolean;
  activate(item: OakItemType): void;
  deactivateAll(): void;
  deactivate(item: OakItemType): void;
  private addMultiplier;
  private createMultiplierFunction;
}
