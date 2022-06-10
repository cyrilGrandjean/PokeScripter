declare class VitaminController {
  static multiplier: string[];
  static multiplierIndex: KnockoutObservable<number>;
  static incrementMultiplier(): void;
  static decrementMultiplier(): void;
  static getMultiplier(): number;
}
