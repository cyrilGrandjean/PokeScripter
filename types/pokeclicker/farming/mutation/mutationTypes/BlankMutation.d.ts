/**
 * A Blank Mutation to be used to store hint data.
 * This is mostly because the Mutation framework controls the hints, but some mutations are outside of the Mutation framework
 */
declare class BlankMutation extends Mutation {
  getMutationPlots(): number[];
  handleMutation(index: number): void;
}
