interface LocationRestricted extends Evolution {
    atLocation(): boolean;
}
declare type LocationEvo = ConstructorImplementing<LocationRestricted, 'getEvolvedPokemon' | 'atLocation'>;
declare function LocationRestricted<EvoClass extends LocationEvo>(Base: EvoClass): {
    new (...args: any[]): {
        isSatisfied(): boolean;
        getEvolvedPokemon: () => PokemonNameType;
        atLocation: () => boolean;
        type: EvolutionType[];
        basePokemon: PokemonNameType;
        evolve(notification?: boolean): boolean;
    };
} & EvoClass;
