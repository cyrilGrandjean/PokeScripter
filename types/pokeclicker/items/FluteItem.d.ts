declare class FluteItem extends Item {
  gemTypes: (keyof typeof PokemonType)[];
  multiplierType: keyof typeof MultiplierType;
  multiplyBy: number;
  name: GameConstants.FluteItemType;
  constructor(
    name: GameConstants.FluteItemType,
    description: string,
    gemTypes: (keyof typeof PokemonType)[],
    multiplierType: keyof typeof MultiplierType,
    multiplyBy: number
  );
  use(): boolean;
  getDescription(): string;
  getMultiplier(): number;
  isSoldOut(): boolean;
  checkCanUse(): boolean;
}
