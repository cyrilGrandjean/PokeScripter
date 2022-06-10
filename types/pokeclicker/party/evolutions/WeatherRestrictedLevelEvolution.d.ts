declare class WeatherRestrictedLevelEvolution extends LevelEvolution {
    weather: WeatherType[];
    constructor(basePokemon: PokemonNameType, evolvedPokemon: PokemonNameType, level: number, weather: WeatherType[]);
    isSatisfied(): boolean;
}
