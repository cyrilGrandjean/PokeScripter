/**
 * Main game class.
 */
declare class Game {
  update: Update;
  profile: Profile;
  breeding: Breeding;
  pokeballs: Pokeballs;
  wallet: Wallet;
  keyItems: KeyItems;
  badgeCase: BadgeCase;
  oakItems: OakItems;
  oakItemLoadouts: OakItemLoadouts;
  categories: PokemonCategories;
  party: Party;
  gems: Gems;
  underground: Underground;
  farming: Farming;
  logbook: LogBook;
  redeemableCodes: RedeemableCodes;
  statistics: Statistics;
  quests: Quests;
  specialEvents: SpecialEvents;
  discord: Discord;
  achievementTracker: AchievementTracker;
  challenges: Challenges;
  battleFrontier: BattleFrontier;
  multiplier: Multiplier;
  frameRequest: any;
  static achievementCounter: number;
  private _gameState;
  private worker;
  /**
   * TODO(@Isha) pass all features through the constructor
   */
  constructor(
    update: Update,
    profile: Profile,
    breeding: Breeding,
    pokeballs: Pokeballs,
    wallet: Wallet,
    keyItems: KeyItems,
    badgeCase: BadgeCase,
    oakItems: OakItems,
    oakItemLoadouts: OakItemLoadouts,
    categories: PokemonCategories,
    party: Party,
    gems: Gems,
    underground: Underground,
    farming: Farming,
    logbook: LogBook,
    redeemableCodes: RedeemableCodes,
    statistics: Statistics,
    quests: Quests,
    specialEvents: SpecialEvents,
    discord: Discord,
    achievementTracker: AchievementTracker,
    challenges: Challenges,
    battleFrontier: BattleFrontier,
    multiplier: Multiplier
  );
  load(): void;
  initialize(): void;
  computeOfflineEarnings(): void;
  checkAndFix(): void;
  start(): void;
  stop(): void;
  gameTick(): void;
  save(): void;
  get gameState(): GameConstants.GameState;
  set gameState(value: GameConstants.GameState);
}
