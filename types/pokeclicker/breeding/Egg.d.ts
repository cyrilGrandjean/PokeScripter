declare class Egg implements Saveable {
  type: EggType;
  totalSteps: number;
  pokemon: PokemonNameType;
  shinyChance: number;
  notified: boolean;
  saveKey: string;
  defaults: {};
  steps: KnockoutObservable<number>;
  pokemonType1: PokemonType;
  pokemonType2: PokemonType;
  progress: KnockoutComputed<number>;
  progressText: KnockoutComputed<string>;
  stepsRemaining: KnockoutComputed<number>;
  constructor(
    type?: EggType,
    totalSteps?: number,
    pokemon?: PokemonNameType,
    steps?: number,
    shinyChance?: number,
    notified?: boolean
  );
  private init;
  isNone(): boolean;
  updateShinyChance(steps: number, multiplier: any): void;
  addSteps(amount: number, multiplier: Multiplier): void;
  canHatch(): boolean;
  hatch(efficiency?: number): boolean;
  toJSON(): Record<string, any>;
  fromJSON(json: Record<string, any>): void;
}
