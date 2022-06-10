declare class QuestHelper {
  static quests: {
    DefeatPokemonsQuest: typeof DefeatPokemonsQuest;
    CapturePokemonsQuest: typeof CapturePokemonsQuest;
    CapturePokemonTypesQuest: typeof CapturePokemonTypesQuest;
    GainFarmPointsQuest: typeof GainFarmPointsQuest;
    GainMoneyQuest: typeof GainMoneyQuest;
    GainTokensQuest: typeof GainTokensQuest;
    GainGemsQuest: typeof GainGemsQuest;
    HatchEggsQuest: typeof HatchEggsQuest;
    MineLayersQuest: typeof MineLayersQuest;
    MineItemsQuest: typeof MineItemsQuest;
    CatchShiniesQuest: typeof CatchShiniesQuest;
    DefeatGymQuest: typeof DefeatGymQuest;
    DefeatDungeonQuest: typeof DefeatDungeonQuest;
    UsePokeballQuest: typeof UsePokeballQuest;
    UseOakItemQuest: typeof UseOakItemQuest;
    HarvestBerriesQuest: typeof HarvestBerriesQuest;
  };
  static createQuest(questType: string, data?: any[]): Quest;
  static generateQuestList(seed: number, amount?: number, uniqueQuestTypes?: boolean): any[];
  static highestOneShotRoute(region: GameConstants.Region): number;
}
