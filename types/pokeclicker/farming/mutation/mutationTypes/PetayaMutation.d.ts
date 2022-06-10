/**
 * Mutation for the Petaya Berry. Requires all 18 typed Berries to be in the field.
 */
declare class PetayaMutation extends GrowMutation {
  constructor(mutationChance: number, options?: MutationOptions);
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
