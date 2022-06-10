declare enum areaStatus {
  currentLocation = 0,
  locked = 1,
  unlockedUnfinished = 2,
  questAtLocation = 3,
  uncaughtPokemon = 4,
  uncaughtShinyPokemonAndMissingAchievement = 5,
  uncaughtShinyPokemon = 6,
  missingAchievement = 7,
  completed = 8,
}
declare class MapHelper {
  static moveToRoute: (route: number, region: GameConstants.Region) => void;
  static routeExist(route: number, region: GameConstants.Region): boolean;
  static normalizeRoute(route: number, region: GameConstants.Region): number;
  static accessToRoute: (route: number, region: GameConstants.Region) => boolean;
  static getCurrentEnvironment(): GameConstants.Environment;
  static calculateBattleCssClass(): string;
  static calculateRouteCssClass(route: number, region: GameConstants.Region): string;
  static calculateTownCssClass(townName: string): string;
  static accessToTown(townName: string): boolean;
  static moveToTown(townName: string): void;
  static validRoute(route?: number, region?: GameConstants.Region): boolean;
  static openShipModal(): void;
  static ableToTravel(): boolean;
  static travelToNextRegion(): void;
}
