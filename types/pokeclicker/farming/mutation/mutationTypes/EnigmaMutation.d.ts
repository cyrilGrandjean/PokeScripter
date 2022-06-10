/**
 * Mutation to produce the Enigma Berry
 */
declare class EnigmaMutation extends GrowMutation {
  hintsSeen: KnockoutObservable<boolean>[];
  constructor(mutationChance: number);
  /**
   * Determines which plots can mutate
   * @return The plot indices that can mutate
   */
  getMutationPlots(): number[];
  /**
   * Returns a list of 4 Berry types to cause the mutation
   */
  static getReqs(): BerryType[];
  get hintIndex(): number;
  /**
   * Handles getting the hint for this mutation for the Kanto Berry Master
   */
  get partialHint(): string;
  private getHint;
  /**
   * Handles getting the full hint for the BerryDex
   */
  get hint(): string;
  toJSON(): boolean[];
  fromJSON(hintsSeen: boolean[]): void;
}
