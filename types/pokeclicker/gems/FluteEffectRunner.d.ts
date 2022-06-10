declare class FluteEffectRunner {
  static counter: number;
  static numActiveFlutes: KnockoutObservable<number>;
  static activeGemTypes: KnockoutObservableArray<number>;
  static initialize(multiplier: Multiplier): void;
  static tick(): void;
  static getLowestGem(itemName: string): number;
  static updateActiveGemTypes(): void;
  static gemCost(): void;
  static getEffect(itemName: GameConstants.FluteItemType): any;
  static toggleEffect(itemName: GameConstants.FluteItemType): void;
  static removeEffect(itemName: GameConstants.FluteItemType): void;
  static fluteFormattedTime(itemName: GameConstants.FluteItemType): number;
  static fluteTooltip(itemName: GameConstants.FluteItemType): string;
  static updateFormattedTimeLeft(itemName: GameConstants.FluteItemType): any;
  static getFluteMultiplier(itemName: GameConstants.FluteItemType): number;
  static isActive(itemName: GameConstants.FluteItemType): KnockoutComputed<boolean>;
}
