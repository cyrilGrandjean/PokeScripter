declare class BattleFrontierRunner {
  static timeLeft: KnockoutObservable<number>;
  static timeLeftPercentage: KnockoutObservable<number>;
  static stage: KnockoutObservable<number>;
  static checkpoint: KnockoutObservable<number>;
  static highest: KnockoutObservable<number>;
  static counter: number;
  static started: KnockoutObservable<boolean>;
  constructor();
  static tick(): void;
  static start(useCheckpoint: boolean): void;
  static nextStage(): void;
  static end(): void;
  static battleLost(): void;
  static battleQuit(): void;
  static timeLeftSeconds: KnockoutComputed<string>;
  static pokemonLeftImages: KnockoutComputed<string>;
  static hasCheckpoint: KnockoutComputed<boolean>;
}
