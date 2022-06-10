declare class TemporaryBattleRunner {
  static timeLeft: KnockoutObservable<number>;
  static timeLeftPercentage: KnockoutObservable<number>;
  static battleObservable: KnockoutObservable<TemporaryBattle>;
  static running: KnockoutObservable<boolean>;
  static startBattle(battle: TemporaryBattle): void;
  private static hideGif;
  static resetGif(): void;
  static tick(): void;
  static battleLost(): void;
  static battleWon(battle: TemporaryBattle): void;
  static timeLeftSeconds: KnockoutComputed<string>;
}
