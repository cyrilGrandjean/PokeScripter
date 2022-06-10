interface EnemyOptions {
  weight?: number;
  requirement?: MultiRequirement | OneFromManyRequirement | Requirement;
  reward?: Amount;
  hide?: boolean;
}
interface DetailedPokemon {
  pokemon: PokemonNameType;
  options: EnemyOptions;
}
interface Loot {
  loot: ItemNameType | PokemonNameType | UndergroundItemNameType | BerryNameType;
  weight?: number;
  requirement?: MultiRequirement | OneFromManyRequirement | Requirement;
  amount?: number;
}
declare type Enemy = PokemonNameType | DetailedPokemon | DungeonTrainer;
declare type Boss = DungeonBossPokemon | DungeonTrainer;
interface EncounterInfo {
  image: string;
  shiny: boolean;
  hide: boolean;
  hidden: boolean;
  locked: boolean;
  lockMessage: string;
}
declare const DungeonGainGymBadge: (gym: Gym, badge: BadgeEnums) => void;
/**
 * Gym class.
 */
declare class Dungeon {
  name: string;
  enemyList: Enemy[];
  itemList: Loot[];
  baseHealth: number;
  bossList: Boss[];
  tokenCost: number;
  difficultyRoute: number;
  rewardFunction: () => void;
  constructor(
    name: string,
    enemyList: Enemy[],
    itemList: Loot[],
    baseHealth: number,
    bossList: Boss[],
    tokenCost: number,
    difficultyRoute: number, // Closest route in terms of difficulty, used for egg steps, dungeon tokens etc.
    rewardFunction?: () => void
  );
  isUnlocked(): boolean;
  /**
   * Finds the possible Bosses in the dungeon
   * @param includeTrainers Whether to include Trainer Bosses. Defaults to true
   * @param ignoreRequirement Whether to check if requirements are met. Defaults to false
   */
  availableBosses(includeTrainers?: boolean, ignoreRequirement?: boolean): Boss[];
  /**
   * Retreives the weights for all the possible bosses
   */
  get bossWeightList(): number[];
  /**
   * Returns the possible enemies in the dungeon.
   * @param ignoreRequirement Whether to check if requirements are met. Defaults to false
   */
  availableMinions(ignoreRequirement?: boolean): Enemy[];
  /**
   * Gets all available Pokemon in the dungeon
   */
  allAvailablePokemon(): PokemonNameType[];
  /**
   * Retrieves the weights for all the possible enemies
   */
  get weightList(): number[];
  /**
   * Retrieves the weights for all the possible Loot, weight values are utilized as 10^Weight. Should use values in Dungeon Initialization from 0 (least likely) to 4 (most likely), anything > 4 is probably too much
   */
  get lootWeightList(): number[];
  /**
   * Returns the possible minion Pokemon in the dungeon.
   * Filters out Trainers and collapses DetailedPokemon
   */
  get pokemonList(): PokemonNameType[];
  /**
   * Returns the possible boss Pokemon in the dungeon.
   * Filters out Trainers
   */
  get bossPokemonList(): PokemonNameType[];
  /**
   * Gets all possible Pokemon in the dungeon
   */
  get allPokemon(): PokemonNameType[];
  /**
   * Gets all non-boss Pokemon encounters in the dungeon
   * Used for generating the dungeon encounter list view
   */
  get normalEncounterList(): EncounterInfo[];
  /**
   * Gets all boss encounters in the dungeon
   * Used for generating the dungeon encounter list view
   */
  get bossEncounterList(): EncounterInfo[];
}
/**
 * Data list that contains all dungeons, accessible by name.
 */
declare const dungeonList: {
  [dungeonName: string]: Dungeon;
};
declare const AlphUnownList: string[];
declare const SolaceonUnownList: string[];
