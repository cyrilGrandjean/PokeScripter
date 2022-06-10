/**
 * Mutation that requires a specific environment near a Berry plot.
 */
declare abstract class EvolveNearMutation extends EvolveMutation {
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
   * Determines if the plots near fit the requirements
   * @param plots The list of nearby plots
   */
  abstract nearPlotsFitRequirements(plots: number[]): boolean;
}
