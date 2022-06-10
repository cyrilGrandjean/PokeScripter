interface StrictBerryReq {
  [key: number]: number;
}
/**
 * Mutation that requires very specific Berry plants near an empty plot.
 * The required Berry plants must be in the Berry stage for mutations to occur.
 */
declare class GrowNearBerryStrictMutation extends GrowNearMutation {
  berryReqs: StrictBerryReq;
  constructor(
    mutationChance: number,
    mutatedBerry: BerryType,
    berryReqs: StrictBerryReq,
    options?: MutationOptions
  );
  /**
   * Determines if the plots near fit the requirements
   * @param plots The list of nearby plots
   */
  nearPlotsFitRequirements(plots: number[]): boolean;
  /**
   * Determines whether the player can even cause this mutation
   */
  get unlocked(): boolean;
}
