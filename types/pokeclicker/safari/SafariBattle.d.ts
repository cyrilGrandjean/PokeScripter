declare class SafariBattle {
  static _enemy: KnockoutObservable<SafariPokemon>;
  static busy: KnockoutObservable<boolean>;
  static text: KnockoutObservable<string>;
  static escapeAttempts: number;
  static particle: any;
  static get enemy(): SafariPokemon;
  static set enemy(pokemon: SafariPokemon);
  static load(enemy?: SafariPokemon): void;
  static throwBall(): void;
  private static delay;
  private static startCapture;
  private static startBounce;
  private static calcIndex;
  private static delayRoll;
  private static finishCapture;
  private static startRoll;
  private static safariRoll;
  private static capturePokemon;
  static throwBait(baitType: BaitType): void;
  static throwRock(): void;
  static run(): void;
  private static enemyTurn;
  private static endBattle;
  private static gameOver;
  private static dropParticle;
}
declare namespace SafariBattle {
  const Speed: {
    animation: number;
    ballThrow: number;
    ballBounce: number;
    ballRoll: number;
    enemyTransition: number;
  };
  const CATCH_MESSAGES: string[];
}
