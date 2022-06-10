interface BerryFlavor {
  type: FlavorType;
  value: number;
}
declare class Berry {
  type: BerryType;
  growthTime: number[];
  harvestAmount: number;
  replantRate: number;
  farmValue: number;
  exp: number;
  color: BerryColor;
  description: string[];
  aura?: Aura;
  flavors: BerryFlavor[];
  wander: PokemonNameType[];
  static baseWander: PokemonNameType[];
  constructor(
    type: BerryType,
    growthTime: number[],
    harvestAmount: number,
    replantRate: number,
    farmValue: number,
    exp: number,
    flavors: number[],
    color: BerryColor,
    description: string[],
    aura?: Aura,
    wander?: PokemonNameType[]
  );
  get descriptionHTML(): string;
}
