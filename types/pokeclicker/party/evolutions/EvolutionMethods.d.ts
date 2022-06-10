declare function TimeRestrictedBase<T extends MinimalEvo>(
  Base: T
): (
  start: number,
  end: number,
  ...rest: ConstructorParameters<T>
) => {
  startHour: number;
  endHour: number;
  isWithinTime(): boolean;
  isSatisfied(): boolean;
  getEvolvedPokemon: () => PokemonNameType;
  type: EvolutionType[];
  basePokemon: PokemonNameType;
  evolve(notification?: boolean): boolean;
} & Pick<Evolution, "getEvolvedPokemon"> &
  Evolution;
declare const TimeRestrictedLevelEvolution: (
  start: number,
  end: number,
  basePokemon: PokemonNameType,
  evolvedPokemon: PokemonNameType,
  level: number
) => {
  startHour: number;
  endHour: number;
  isWithinTime(): boolean;
  isSatisfied(): boolean;
  getEvolvedPokemon: () => PokemonNameType;
  type: EvolutionType[];
  basePokemon: PokemonNameType;
  evolve(notification?: boolean): boolean;
} & Pick<Evolution, "getEvolvedPokemon"> &
  Evolution;
declare const DayTimedLevelEvolution: {
  new (...args: any[]): {
    startHour: number;
    endHour: number;
    isWithinTime(): boolean;
    isSatisfied(): boolean;
    getEvolvedPokemon: () => PokemonNameType;
    type: EvolutionType[];
    basePokemon: PokemonNameType;
    evolve(notification?: boolean): boolean;
  };
} & typeof LevelEvolution;
declare const NightTimedLevelEvolution: {
  new (...args: any[]): {
    startHour: number;
    endHour: number;
    isWithinTime(): boolean;
    isSatisfied(): boolean;
    getEvolvedPokemon: () => PokemonNameType;
    type: EvolutionType[];
    basePokemon: PokemonNameType;
    evolve(notification?: boolean): boolean;
  };
} & typeof LevelEvolution;
declare const DayTimedStoneEvolution: {
  new (...args: any[]): {
    startHour: number;
    endHour: number;
    isWithinTime(): boolean;
    isSatisfied(): boolean;
    getEvolvedPokemon: () => PokemonNameType;
    type: EvolutionType[];
    basePokemon: PokemonNameType;
    evolve(notification?: boolean): boolean;
  };
} & typeof StoneEvolution;
declare const NightTimedStoneEvolution: {
  new (...args: any[]): {
    startHour: number;
    endHour: number;
    isWithinTime(): boolean;
    isSatisfied(): boolean;
    getEvolvedPokemon: () => PokemonNameType;
    type: EvolutionType[];
    basePokemon: PokemonNameType;
    evolve(notification?: boolean): boolean;
  };
} & typeof StoneEvolution;
declare const DungeonRestrictedLevelEvolution: DungeonRestrictedT<typeof LevelEvolution>;
declare const AnyDungeonLevelEvolution: typeof LevelEvolution;
declare const AnyGymLevelEvolution: typeof LevelEvolution;
declare const EnvironmentRestrictedLevelEvolution: EnvironmentRestrictedT<typeof LevelEvolution>;
declare const EnvironmentDungeonLevelEvolution: EnvironmentRestrictedT<typeof LevelEvolution>;
declare const EnvironmentGymLevelEvolution: EnvironmentRestrictedT<typeof LevelEvolution>;
declare const RegionStoneEvolution: RegionRestrictedT<typeof StoneEvolution>;
declare const RegionLevelEvolution: RegionRestrictedT<typeof LevelEvolution>;
