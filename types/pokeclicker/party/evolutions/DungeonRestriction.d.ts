declare function ByDungeon<EvoClass extends MinimalEvo>(
  Base: EvoClass
): {
  new (...args: any[]): {
    dungeon: string;
    atLocation(): boolean;
    getEvolvedPokemon: () => PokemonNameType;
    type: EvolutionType[];
    basePokemon: PokemonNameType;
    isSatisfied(): boolean;
    evolve(notification?: boolean): boolean;
  };
} & EvoClass;
declare type DungeonRestrictedT<T extends Constructor<any>> = new (
  dungeon: string,
  ...rest: ConstructorParameters<T>
) => InstanceType<T>;
declare function DungeonRestricted<T extends Constructor<any>>(Base: T): DungeonRestrictedT<T>;
declare const AnyDungeonRestricted: <
  T extends Constructor<Pick<Evolution, "getEvolvedPokemon"> & Evolution>
>(
  Base: T
) => T;
