declare function ByRegion<EvoClass extends MinimalEvo>(
  Base: EvoClass
): {
  new (...args: any[]): {
    region: string;
    atLocation(): boolean;
    getEvolvedPokemon: () => PokemonNameType;
    type: EvolutionType[];
    basePokemon: PokemonNameType;
    isSatisfied(): boolean;
    evolve(notification?: boolean): boolean;
  };
} & EvoClass;
declare type RegionRestrictedT<T extends Constructor<any>> = new (
  region: GameConstants.Region,
  ...rest: ConstructorParameters<T>
) => InstanceType<T>;
declare function RegionRestricted<T extends Constructor<any>>(Base: T): RegionRestrictedT<T>;
