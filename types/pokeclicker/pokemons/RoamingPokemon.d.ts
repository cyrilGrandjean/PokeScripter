declare class RoamingPokemon {
    pokemonName: PokemonNameType;
    unlockRequirement?: Requirement | MultiRequirement | OneFromManyRequirement;
    pokemon: PokemonListData;
    constructor(pokemonName: PokemonNameType, unlockRequirement?: Requirement | MultiRequirement | OneFromManyRequirement);
    isRoaming(): boolean;
}
