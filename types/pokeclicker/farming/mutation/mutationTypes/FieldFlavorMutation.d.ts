/**
 * Mutation that requires a total amount of flavor in the field
 */
declare class FieldFlavorMutation extends GrowMutation {
  fieldFlavor: number[];
  readonly flavorRatio: number[];
  constructor(
    mutationChance: number,
    mutatedBerry: BerryType,
    fieldFlavor: number[],
    options?: MutationOptions
  );
  /**
   * Determines which plots can mutate
   * @return The plot indices that can mutate
   */
  getMutationPlots(): number[];
}
