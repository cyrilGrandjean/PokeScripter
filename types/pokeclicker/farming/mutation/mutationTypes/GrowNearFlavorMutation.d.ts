/**
 * Mutation that requires specific flavored Berry plants near an empty plot
 * Will check the surround plots for the flavors of the nearby Berry plants. Must be in the range of the flavorReqs
 */
declare class GrowNearFlavorMutation extends GrowNearMutation {
  flavorReqs: number[][];
  readonly flavorRatio: number[];
  /**
   * Constructor for a FlavorMutation
   * @param mutationChance The chance of the mutation occuring
   * @param mutatedBerry The mutated BerryType
   * @param flavorReqs The flavor requirements for the mutation to occur
   * @param options The additional MutationOptions
   */
  constructor(
    mutationChance: number,
    mutatedBerry: BerryType,
    flavorReqs: number[][],
    options?: MutationOptions
  );
  /**
   * Determines if the plots near fit the requirements
   * @param plots The list of nearby plots
   */
  nearPlotsFitRequirements(plots: number[]): boolean;
  /**
   * Handles getting the mutation chance.
   * Will decrease the mutation chance if the mutatedBerry already exists around this one.
   * @param idx The plot index
   */
  mutationChance(idx: number): number;
}
