/**
 * Mutation that requires at least some amount of specific Berry plants near an empty plot.
 * The required Berry plants must be in the Berry stage for mutations to occur.
 */
declare class EvolveNearBerryMinMutation extends EvolveNearMutation {
  berryReqs: StrictBerryReq;
  constructor(
    mutationChance: number,
    mutatedBerry: BerryType,
    originalBerry: BerryType,
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
