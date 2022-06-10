/**
 * Mutation that applies to a current Berry plant based on the active state of Oak Items
 */
declare class OakMutation extends EvolveMutation {
  oakItem: OakItemType;
  constructor(
    mutationChance: number,
    mutatedBerry: BerryType,
    originalBerry: BerryType,
    oakItem: OakItemType,
    options?: MutationOptions
  );
  /**
   * Determines which plots can mutate
   * @return The plot indices that can mutate
   */
  getMutationPlots(): number[];
  /**
   * Checks whether a plot fits the requirements for a mutation
   * @param plot The Plot
   * @param idx The Plot index
   */
  plotFitRequirements(plot: Plot, idx: number): boolean;
  /**
   * Determines whether the player can even cause this mutation
   */
  get unlocked(): boolean;
  /**
   * Handles getting the hint for this mutation for the Kanto Berry Master
   */
  get hint(): string;
}
