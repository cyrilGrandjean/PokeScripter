declare class EffectEngineRunner {
  static counter: number;
  static multipliers: string[];
  static multIndex: KnockoutObservable<number>;
  static initialize(multiplier: Multiplier): void;
  static amountToUse: KnockoutComputed<number>;
  static tick(): void;
  static incrementMultiplier(): void;
  static decrementMultiplier(): void;
  static getEffect(itemName: string): any;
  static addEffect(itemName: string, amount: number): void;
  static updateFormattedTimeLeft(itemName: string): any;
  static getDungeonTokenMultiplier(): 1 | 1.5;
  static isActive(itemName: string): KnockoutComputed<boolean>;
}
