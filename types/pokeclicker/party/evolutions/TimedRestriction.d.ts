declare function TimeRestricted<EvoClass extends MinimalEvo>(start: number, end: number, Base: EvoClass): {
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
} & EvoClass;
declare function DayTimeRestricted<EvoClass extends MinimalEvo>(Base: EvoClass): {
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
} & EvoClass;
declare function NightTimeRestricted<EvoClass extends MinimalEvo>(Base: EvoClass): {
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
} & EvoClass;
