declare class SafariPokemon implements PokemonInterface {
    name: PokemonNameType;
    id: number;
    type1: PokemonType;
    type2: PokemonType;
    shiny: boolean;
    baseCatchFactor: number;
    baseEscapeFactor: number;
    x: number;
    y: number;
    steps: number;
    private _angry;
    private _eating;
    private _eatingBait;
    static readonly list: {
        name: PokemonNameType;
        weight: number;
    }[];
    static calcPokemonWeight(pokemon: any): number;
    constructor(name: PokemonNameType);
    get catchFactor(): number;
    get escapeFactor(): number;
    get angry(): number;
    set angry(value: number);
    get eating(): number;
    set eating(value: number);
    get eatingBait(): BaitType;
    set eatingBait(value: BaitType);
    static random(): SafariPokemon;
}
