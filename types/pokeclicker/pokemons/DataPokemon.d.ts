declare class DataPokemon implements PokemonInterface {
    id: number;
    name: PokemonNameType;
    catchRate: number;
    evolutions: Evolution[];
    type1: PokemonType;
    type2: PokemonType;
    attack: number;
    hitpoints: number;
    levelType: LevelType;
    exp: number;
    eggCycles: number;
    heldItem: BagItem | null;
    shiny: boolean;
    constructor(id: number, name: PokemonNameType, catchRate: number, evolutions: Evolution[], type1: PokemonType, type2: PokemonType, attack: number, hitpoints: number, levelType: LevelType, exp: number, eggCycles: number, heldItem: BagItem | null);
}
