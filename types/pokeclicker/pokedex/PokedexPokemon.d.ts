declare class PokedexPokemon implements PokemonInterface {
    name: string;
    id: number;
    type1: PokemonType;
    type2: PokemonType;
    kills: number;
    catches: number;
    shiny: boolean;
    constructor(name: string, id: number, type1: PokemonType, type2: PokemonType, kills: number, catches: number, shiny: boolean);
}
