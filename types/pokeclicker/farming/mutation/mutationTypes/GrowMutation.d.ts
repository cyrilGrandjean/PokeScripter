/**
 * Mutation that occurs on an empty Plot
 */
declare abstract class GrowMutation extends Mutation {
  constructor(mutationChance: number, mutatedBerry: BerryType, options?: MutationOptions);
  /**
   * Determines which plots can mutate
   * @return The plot indices that can mutate
   */
  getMutationPlots(): number[];
  /**
   * Handles updating the farm with the mutation
   * @param index The plot index to mutate
   */
  handleMutation(index: number): void;
}
