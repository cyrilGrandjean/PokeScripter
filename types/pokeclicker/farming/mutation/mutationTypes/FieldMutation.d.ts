/**
 * Mutation that requires a number of Berry plants in the farm
 */
declare class FieldMutation extends GrowMutation {
  fieldBerry: BerryType;
  fieldAmount: number;
  constructor(
    mutationChance: number,
    mutatedBerry: BerryType,
    fieldBerry: BerryType,
    fieldAmount?: number,
    options?: MutationOptions
  );
  /**
   * Determines which plots can mutate
   * @return The plot indices that can mutate
   */
  getMutationPlots(): number[];
  /**
   * Determines whether the player can even cause this mutation
   */
  get unlocked(): boolean;
  /**
   * Handles getting the hint for this mutation for the Kanto Berry Master
   */
  get hint(): string;
}
