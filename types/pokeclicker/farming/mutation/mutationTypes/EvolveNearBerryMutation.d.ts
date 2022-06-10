/**
 * Mutation that requires specific Berry plants near a Berry plot.
 * The required Berry plants must be in the Berry stage for mutations to occur.
 */
declare class EvolveNearBerryMutation extends EvolveNearMutation {
  berryReqs: BerryType[];
  constructor(
    mutationChance: number,
    mutatedBerry: BerryType,
    originalBerry: BerryType,
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
  get hint(): string;
  /**
   * Determines whether the player can even cause this mutation
   */
  get unlocked(): boolean;
}
