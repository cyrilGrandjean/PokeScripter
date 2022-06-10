declare class Party implements Feature {
  private multiplier;
  name: string;
  saveKey: string;
  _caughtPokemon: KnockoutObservableArray<PartyPokemon>;
  defaults: {
    caughtPokemon: any[];
  };
  hasMaxLevelPokemon: KnockoutComputed<boolean>;
  constructor(multiplier: Multiplier);
  gainPokemonById(id: number, shiny?: boolean, suppressNotification?: boolean): void;
  gainPokemon(pokemon: PartyPokemon, suppressNotification?: boolean): void;
  gainExp(exp?: number, level?: number, trainer?: boolean): void;
  /**
   * Calculate the attack of all your Pokémon
   * @param type1
   * @param type2 types of the enemy we're calculating damage against.
   * @returns {number} damage to be done.
   */
  calculatePokemonAttack(
    type1?: PokemonType,
    type2?: PokemonType,
    ignoreRegionMultiplier?: boolean,
    region?: GameConstants.Region,
    includeBreeding?: boolean,
    useBaseAttack?: boolean,
    overrideWeather?: WeatherType,
    ignoreLevel?: boolean,
    includeFlute?: boolean
  ): number;
  calculateOnePokemonAttack(
    pokemon: PartyPokemon,
    type1: PokemonType,
    type2: PokemonType,
    region: GameConstants.Region,
    ignoreRegionMultiplier: boolean,
    includeBreeding: boolean,
    useBaseAttack: boolean,
    overrideWeather: WeatherType,
    ignoreLevel?: boolean,
    includeFlute?: boolean
  ): number;
  getRegionAttackMultiplier(highestRegion?: any): number;
  pokemonAttackObservable: KnockoutComputed<number>;
  getPokemon(id: number): PartyPokemon;
  alreadyCaughtPokemonByName(name: PokemonNameType, shiny?: boolean): boolean;
  alreadyCaughtPokemon(id: number, shiny?: boolean): boolean;
  calculateClickAttack(useItem?: boolean): number;
  canAccess(): boolean;
  fromJSON(json: Record<string, any>): void;
  initialize(): void;
  toJSON(): Record<string, any>;
  update(delta: number): void;
  get caughtPokemon(): PartyPokemon[];
  set caughtPokemon(pokemon: PartyPokemon[]);
}
