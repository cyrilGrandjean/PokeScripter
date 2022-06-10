declare function ByGym<EvoClass extends MinimalEvo>(
  Base: EvoClass
): {
  new (...args: any[]): {
    town: string;
    atLocation(): boolean;
    getEvolvedPokemon: () => PokemonNameType;
    type: EvolutionType[];
    basePokemon: PokemonNameType;
    isSatisfied(): boolean;
    evolve(notification?: boolean): boolean;
  };
} & EvoClass;
declare type GymRestrictedT<T extends Constructor<any>> = new (
  town: string,
  ...rest: ConstructorParameters<T>
) => InstanceType<T>;
declare function GymRestricted<T extends Constructor<any>>(Base: T): GymRestrictedT<T>;
declare const AnyGymRestricted: <
  T extends Constructor<Pick<Evolution, "getEvolvedPokemon"> & Evolution>
>(
  Base: T
) => T;
