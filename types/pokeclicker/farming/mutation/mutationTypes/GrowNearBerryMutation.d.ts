/**
 * Mutation that requires specific Berry plants near an empty plot.
 * The required Berry plants must be in the Berry stage for mutations to occur.
 */
declare class GrowNearBerryMutation extends GrowNearMutation {
  berryReqs: BerryType[];
  constructor(
    mutationChance: number,
    mutatedBerry: BerryType,
    berryReqs: BerryType[],
    options?: MutationOptions
  );
  /**
   * Determines if the plots near fit the requirements
   * @param plots The list of nearby plots
   */
  nearPlotsFitRequirements(plots: number[]): boolean;
  /**
   * Checks an individual plot for a Berry requirement
   */
  checkRequirement(index: number, berryReq: BerryType): boolean;
  /**
   * Handles getting the hint for this mutation for the Kanto Berry Master
   */
  get hint(): string;
  /**
   * Determines whether the player can even cause this mutation
   */
  get unlocked(): boolean;
}
