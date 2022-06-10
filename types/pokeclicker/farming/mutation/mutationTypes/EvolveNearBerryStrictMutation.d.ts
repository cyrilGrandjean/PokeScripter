/**
 * Mutation that requires very specific Berry plants near an empty plot.
 * The required Berry plants must be in the Berry stage for mutations to occur.
 */
declare class EvolveNearBerryStrictMutation extends EvolveNearMutation {
  berryReqs: StrictBerryReq;
  neighborStageReq: PlotStage;
  constructor(
    mutationChance: number,
    mutatedBerry: BerryType,
    originalBerry: BerryType,
    berryReqs: StrictBerryReq,
    neighborStageReq: PlotStage,
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
