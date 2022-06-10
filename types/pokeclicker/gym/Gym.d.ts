/**
 * Data list that contains all gymLeaders, accessible by townName.
 */
interface gymFlags {
  quest?: boolean;
  achievement?: boolean;
}
/**
 * Gym class.
 */
declare class Gym extends TownContent {
  leaderName: string;
  town: string;
  pokemons: GymPokemon[];
  badgeReward: BadgeEnums;
  moneyReward: number;
  defeatMessage: string;
  rewardFunction: () => void;
  buttonText: string;
  tooltip: string;
  cssClass(): "btn btn-secondary" | "btn btn-success";
  text(): string;
  isVisible(): boolean;
  onclick(): void;
  flags: {
    quest: boolean;
    achievement: boolean;
  };
  areaStatus(): areaStatus;
  clears(): number;
  constructor(
    leaderName: string,
    town: string,
    pokemons: GymPokemon[],
    badgeReward: BadgeEnums,
    moneyReward: number,
    defeatMessage: string,
    requirements?: (OneFromManyRequirement | Requirement)[],
    rewardFunction?: () => void,
    { quest, achievement }?: gymFlags
  );
  private isAchievementsComplete;
  private isThereQuestAtLocation;
  static getLeaderByBadge(badge: BadgeEnums): string;
  firstWinReward(): void;
  get imagePath(): string;
}
