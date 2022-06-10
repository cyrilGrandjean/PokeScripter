/**
 * Parasite Mutation
 */
declare class ParasiteMutation extends EvolveNearBerryMutation {
  constructor(mutationChance: number, berry: BerryType);
  /**
   * Determines which plots can mutate. Excludes the parasite berry
   * @return The plot indices that can mutate
   */
  getMutationPlots(): number[];
}
