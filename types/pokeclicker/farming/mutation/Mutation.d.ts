interface MutationOptions {
  hint?: string;
  unlockReq?: () => boolean;
  showHint?: boolean;
}
declare abstract class Mutation {
  saveKey: string;
  defaults: Record<string, any>;
  _mutationChance: number;
  mutatedBerry: BerryType;
  _hint?: string;
  showHint: boolean;
  _unlockReq?: () => boolean;
  _hintSeen: KnockoutObservable<boolean>;
  constructor(mutationChance: number, mutatedBerry: BerryType, options?: MutationOptions);
  toJSON(): boolean | boolean[];
  fromJSON(hintSeen: boolean | boolean[]): void;
  /**
   * Determines which plots can mutate
   * @return The plot indices that can mutate
   */
  abstract getMutationPlots(): number[];
  /**
   * Handles updating the farm with the mutation
   * @param index The plot index to mutate
   */
  abstract handleMutation(index: number): void;
  /**
   * Determines whether the player can even cause this mutation
   */
  get unlocked(): boolean;
  /**
   * Handles getting the hint for this mutation for the Kanto Berry Master
   */
  get hint(): string;
  /**
   * Handles getting the mutation chance
   * @param idx The plot index
   */
  mutationChance(idx: number): number;
  /**
   * Update tag for mutations. Returns true if this mutation will occur
   */
  mutate(): boolean;
  get hintSeen(): boolean;
  set hintSeen(bool: boolean);
}
