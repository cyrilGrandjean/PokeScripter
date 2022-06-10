declare type TmpGameType = {
  gameState: GameState;
  update: any;
  profile: Profile;
  breeding: any;
  pokeballs: any;
  wallet: Wallet;
  keyItems: any;
  badgeCase: BadgeCase;
  oakItems: OakItems;
  oakItemLoadouts: OakItemLoadouts;
  categories: PokemonCategories;
  party: any;
  gems: any;
  underground: any;
  farming: any;
  logbook: LogBook;
  redeemableCodes: any;
  statistics: Statistics;
  quests: any;
  specialEvents: any;
  discord: any;
  achievementTracker: any;
  challenges: Challenges;
  multiplier: Multiplier;
};
declare type TmpAppType = {
  game: TmpGameType;
  start: () => void;
};
declare type TmpPokemonListData = {
  id: number;
  name: PokemonNameType;
  nativeRegion?: Region;
  catchRate: number;
  evolutions?: any[];
  type: PokemonType[];
  base: {
    hitpoints: number;
    attack: number;
    specialAttack: number;
    defense: number;
    specialDefense: number;
    speed: number;
  };
  levelType: LevelType;
  exp: number;
  eggCycles: number;
  baby?: boolean;
  attack?: number;
  heldItem?: BagItem;
};
declare type TmpSaveType = {
  key: string;
};
declare type TmpMapHelperType = {
  moveToRoute: (route: number, region: Region) => void;
  routeExist: (route: number, region: Region) => boolean;
  normalizeRoute: (route: number, region: Region) => number;
  accessToRoute: (route: number, region: Region) => boolean;
  getCurrentEnvironment: () => Environment;
  calculateBattleCssClass: () => string;
  calculateRouteCssClass: (route: number, region: Region) => string;
  calculateTownCssClass: (townName: string) => string;
  accessToTown: (townName: string) => boolean;
  moveToTown: (townName: string) => void;
  validRoute: (route: number, region: Region) => boolean;
  openShipModal: () => void;
  ableToTravel: () => boolean;
  travelToNextRegion: () => void;
};
declare type TmpPokemonMapProxy = Record<PokemonNameType | number, TmpPokemonListData> & {
  random: (max?: number, min?: number) => TmpPokemonListData;
  randomRegion: (max?: Region, min?: Region) => TmpPokemonListData;
} & Array<TmpPokemonListData>;
declare global {
  const App: TmpAppType;
  const pokemonMap: TmpPokemonMapProxy;
  const player: any;
  const Save: TmpSaveType;
  const MapHelper: TmpMapHelperType;
}
