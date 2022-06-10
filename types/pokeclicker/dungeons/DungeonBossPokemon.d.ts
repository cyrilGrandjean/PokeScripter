declare class DungeonBossPokemon {
    name: PokemonNameType;
    baseHealth: number;
    level: number;
    options?: EnemyOptions;
    constructor(name: PokemonNameType, baseHealth: number, level: number, options?: EnemyOptions);
}
