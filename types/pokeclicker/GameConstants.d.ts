declare namespace GameConstants {
  const SECOND: number;
  const MINUTE: number;
  const HOUR: number;
  const DAY: number;
  const TICK_TIME: number;
  const BATTLE_TICK: number;
  const BATTLE_FRONTIER_TICK: number;
  const UNDERGROUND_TICK: number;
  const DUNGEON_TIME: number;
  const DUNGEON_TICK: number;
  const EFFECT_ENGINE_TICK: number;
  const SAVE_TICK: number;
  const GYM_TIME: number;
  const GYM_COUNTDOWN: number;
  const GYM_TICK: number;
  const ACHIEVEMENT_TICK: number;
  const MIN_LOAD_TIME: number;
  const MAX_LOAD_TIME: number;
  const MUTATION_TICK: number;
  const WANDER_TICK: number;
  const TEMP_BATTLE_TIME: number;
  const TEMP_BATTLE_TICK: number;
  const MAX_AVAILABLE_REGION: number;
  const MaxIDPerRegion: number[];
  const ITEM_USE_TIME: number;
  const FLUTE_TYPE_ATTACK_MULTIPLIER: number;
  const ROAMING_MIN_CHANCE: number;
  const ROAMING_MAX_CHANCE: number;
  const SHINY_CHANCE_BATTLE: number;
  const SHINY_CHANCE_DUNGEON: number;
  const SHINY_CHANCE_SHOP: number;
  const SHINY_CHANCE_STONE: number;
  const SHINY_CHANCE_SAFARI: number;
  const SHINY_CHANCE_BREEDING: number;
  const SHINY_CHANCE_FARM: number;
  const ITEM_PRICE_MULTIPLIER: number;
  const ITEM_PRICE_DEDUCT: number;
  const PLATE_VALUE: number;
  const BREEDING_ATTACK_BONUS: number;
  const FARM_PLOT_WIDTH: number;
  const FARM_PLOT_HEIGHT: number;
  const BerryDistribution: number[];
  const MULCH_USE_TIME: number;
  const BOOST_MULCH_MULTIPLIER: number;
  const RICH_MULCH_MULTIPLIER: number;
  const SURPRISE_MULCH_MULTIPLIER: number;
  const AMAZE_MULCH_GROWTH_MULTIPLIER: number;
  const AMAZE_MULCH_PRODUCE_MULTIPLIER: number;
  const AMAZE_MULCH_MUTATE_MULTIPLIER: number;
  const WANDER_RATE: number;
  const BerryColor: string[];
  const BASE_DUNGEON_SIZE: number;
  const MIN_DUNGEON_SIZE: number;
  const DUNGEON_CHEST_SHOW: number;
  const DUNGEON_MAP_SHOW: number;
  enum AchievementOption {
    less,
    equal,
    more,
  }

  enum AchievementType {
    "None",
    "Money",
    "Token",
    "Attack",
    "Diamond",
    "Underground Items Found",
    "Underground Layers Mined",
    "Max Level Oak Item",
    "Captured",
    "Defeated",
    "Caught Pokemon",
    "Shiny Pokemon",
    "Hatch",
    "Pokeball",
    "Click",
    "Route Kill",
    "Clear Gym",
    "Clear Dungeon",
    "Farming",
    "Quest",
    "Battle Frontier",
    "Protein",
  }
  enum DungeonTile {
    empty,
    entrance,
    enemy,
    chest,
    boss,
  }
  const ROUTE_HELD_ITEM_MODIFIER: number;
  const DUNGEON_HELD_ITEM_MODIFIER: number;
  const DUNGEON_BOSS_HELD_ITEM_MODIFIER: number;
  const HELD_ITEM_CHANCE: number;
  const HELD_UNDERGROUND_ITEM_CHANCE: number;
  const GEM_UPGRADE_COST: number;
  const GEM_UPGRADE_STEP: number;
  const MAX_GEM_UPGRADES: number;
  const DUNGEON_GEMS: number;
  const DUNGEON_BOSS_GEMS: number;
  const GYM_GEMS: number;
  const SAFARI_BATTLE_CHANCE: number;
  const SAFARI_BASE_POKEBALL_COUNT: number;
  const LEGAL_WALK_BLOCKS: number[];
  const SAFARI_OUT_OF_BALLS: string;
  const GAIN_MONEY_BASE_REWARD: number;
  const HATCH_EGGS_BASE_REWARD: number;
  const SHINY_BASE_REWARD: number;
  const DEFEAT_POKEMONS_BASE_REWARD: number;
  const CAPTURE_POKEMONS_BASE_REWARD: number;
  const GAIN_TOKENS_BASE_REWARD: number;
  const GAIN_FARM_POINTS_BASE_REWARD: number;
  const MINE_LAYERS_BASE_REWARD: number;
  const MINE_ITEMS_BASE_REWARD: number;
  const USE_OAK_ITEM_BASE_REWARD: number;
  const ACTIVE_QUEST_MULTIPLIER: number;
  const QUEST_CLICKS_PER_SECOND: number;
  const QUESTS_PER_SET: number;
  const DNA_ITEM_CHANCE: number;
  enum GameState {
    idle,
    paused,
    fighting,
    gym,
    dungeon,
    safari,
    town,
    shop,
    battleFrontier,
    temporaryBattle,
  }
  enum Pokeball {
    "None",
    "Pokeball",
    "Greatball",
    "Ultraball",
    "Masterball",
    "Fastball",
    "Quickball",
    "Timerball",
    "Duskball",
    "Luxuryball",
    "Diveball",
    "Lureball",
    "Nestball",
    "Repeatball",
  }
  enum Currency {
    money,
    questPoint,
    dungeonToken,
    diamond,
    farmPoint,
    battlePoint,
  }
  enum TypeEffectiveness {
    Immune,
    NotVery,
    Normal,
    Very,
  }
  enum TypeEffectivenessValue {
    Immune,
    NotVery,
    Normal,
    Very,
  }
  function humanifyString(str: string): string;
  function camelCaseToString(str: string): string;
  function formatDate(date: Date): string;
  function formatTime(input: number | Date): string;
  function formatTimeFullLetters(input: number): string;
  function formatTimeShortWords(input: number): string;
  function formatSecondsToTime(input: number): string;
  function formatNumber(input: number): string;
  enum Region {
    none,
    kanto,
    johto,
    hoenn,
    sinnoh,
    unova,
    kalos,
    alola,
    galar,
    final,
  }
  function clipNumber(num: number, min: number, max: number): number;
  function expRandomElement<T>(array: T[], ratio: number): T;
  const TypeColor: string[];
  const ROUTE_KILLS_NEEDED: number;
  const ACHIEVEMENT_DEFEAT_ROUTE_VALUES: number[];
  const ACHIEVEMENT_DEFEAT_GYM_VALUES: number[];
  const ACHIEVEMENT_DEFEAT_DUNGEON_VALUES: number[];
  type EnvironmentData = Partial<Record<number, Set<string | number>>>;
  const Environments: {
    Water: EnvironmentData;
    Ice: EnvironmentData;
    Forest: EnvironmentData;
    Cave: EnvironmentData;
    GemCave: EnvironmentData;
    PowerPlant: EnvironmentData;
    Mansion: EnvironmentData;
    Graveyard: EnvironmentData;
  };
  type Environment = keyof typeof Environments;
  const EnvironmentCssClass: Record<Environment, string>;
  enum Starter {
    "None" = "",
    "Bulbasaur" = "Bulbasaur",
    "Charmander" = "Charmander",
    "Squirtle" = "Squirtle",
    "Pikachu" = "Pikachu",
  }
  enum StoneType {
    "None",
    "Leaf_stone",
    "Fire_stone",
    "Water_stone",
    "Thunder_stone",
    "Moon_stone",
    "Trade_stone",
    "Sun_stone",
    "Soothe_bell",
    "Metal_coat",
    "Kings_rock",
    "Upgrade",
    "Dragon_scale",
    "Prism_scale",
    "Deepsea_tooth",
    "Deepsea_scale",
    "Shiny_stone",
    "Dusk_stone",
    "Dawn_stone",
    "Razor_claw",
    "Razor_fang",
    "Electirizer",
    "Magmarizer",
    "Protector",
    "Dubious_disc",
    "Reaper_cloth",
    "Black_DNA",
    "White_DNA",
    "Sachet",
    "Whipped_dream",
    "Ice_stone",
  }
  enum BattleItemType {
    "xAttack" = "",
    "xClick" = "",
    "Lucky_egg" = "",
    "Token_collector" = "",
    "Item_magnet" = "",
    "Lucky_incense" = "",
  }
  enum FluteItemType {
    "Red_Flute" = "",
    "White_Flute" = "",
    "Black_Flute" = "",
    "Yellow_Flute" = "",
    "Blue_Flute" = "",
    "Poke_Flute" = "",
    "Azure_Flute" = "",
    "Eon_Flute" = "",
    "Sun_Flute" = "",
    "Moon_Flute" = "",
    "Time_Flute" = "",
    "Grass_Flute" = "",
  }
  enum PokemonItemType {
    "Eevee",
    "Porygon",
    "Jynx",
    "Mr. Mime",
    "Lickitung",
    "Togepi",
    "Beldum",
    "Skorupi",
    "Combee",
    "Burmy (plant)",
    "Spiritomb",
    "Cherubi",
    "Zorua",
    "Meloetta (pirouette)",
    "Toxel",
    "Eternatus",
    "Slowpoke (Galar)",
  }
  enum PokeBlockColor {
    Black,
    Red,
    Gold,
    Purple,
    Gray,
    White,
  }
  enum VitaminType {
    Protein,
    RareCandy,
  }
  enum EnergyRestoreSize {
    SmallRestore,
    MediumRestore,
    LargeRestore,
  }
  enum EggItemType {
    "Fire_egg",
    "Water_egg",
    "Grass_egg",
    "Fighting_egg",
    "Electric_egg",
    "Dragon_egg",
    "Pokemon_egg",
    "Mystery_egg",
  }
  const EnergyRestoreEffect: {
    SmallRestore: number;
    MediumRestore: number;
    LargeRestore: number;
  };
  const FossilToPokemon: {
    "Helix Fossil": string;
    "Dome Fossil": string;
    "Old Amber": string;
    "Root Fossil": string;
    "Claw Fossil": string;
    "Armor Fossil": string;
    "Skull Fossil": string;
    "Cover Fossil": string;
    "Plume Fossil": string;
    "Jaw Fossil": string;
    "Sail Fossil": string;
  };
  const PokemonToFossil: {
    Omanyte: string;
    Kabuto: string;
    Aerodactyl: string;
    Lileep: string;
    Anorith: string;
    Shieldon: string;
    Cranidos: string;
    Tirtouga: string;
    Archen: string;
    Tyrunt: string;
    Amaura: string;
  };
  const KantoGyms: string[];
  const JohtoGyms: string[];
  const HoennGyms: string[];
  const SinnohGyms: string[];
  const UnovaGyms: string[];
  const KalosGyms: string[];
  const GalarGyms: string[];
  const RegionGyms: string[][];
  function getGymIndex(gym: string): number;
  function getGymRegion(gym: string): Region;
  const KantoDungeons: string[];
  const JohtoDungeons: string[];
  const HoennDungeons: string[];
  const SinnohDungeons: string[];
  const UnovaDungeons: string[];
  const KalosDungeons: string[];
  const GalarDungeons: string[];
  const RegionDungeons: string[][];
  function getDungeonIndex(dungeon: string): number;
  function getDungeonRegion(dungeon: string): Region;
  const StartingTowns: string[];
  const StartingRoutes: number[];
  const DockTowns: string[];
  const RegionalStarters: number[][];
  const TemporaryBattles: string[];
  function getTemporaryBattlesIndex(temporaryBattle: string): number;
  enum DayOfWeek {
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  }
}
