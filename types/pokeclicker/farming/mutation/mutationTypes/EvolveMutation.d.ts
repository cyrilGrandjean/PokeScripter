/**
 * Mutation that occurs on a Berry plant that is PlotStage.Taller or older.
 */
declare abstract class EvolveMutation extends Mutation {
  originalBerry?: BerryType;
  constructor(
    mutationChance: number,
    mutatedBerry: BerryType,
    originalBerry: BerryType,
    options?: MutationOptions
  );
  /**
   * Determines which plots can mutate
   * @return The plot indices that can mutate
   */
  getMutationPlots(): number[];
  /**
   * Handles updating the farm with the mutation.
   * Mutations will keep the new Berry plant in the same stage as it was previously
   * @param index The plot index to mutate
   */
  handleMutation(index: number): void;
  /**
   * Determines whether the player can even cause this mutation
   */
  get unlocked(): boolean;
}
