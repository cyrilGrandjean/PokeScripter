declare enum PartyPokemonSaveKeys {
  attackBonusPercent = 0,
  attackBonusAmount = 1,
  proteinsUsed = 2,
  exp = 3,
  breeding = 4,
  shiny = 5,
  category = 6,
  levelEvolutionTriggered = 7,
}
declare class PartyPokemon implements Saveable {
  id: number;
  name: PokemonNameType;
  evolutions: Evolution[];
  baseAttack: number;
  exp: number;
  saveKey: string;
  defaults: {
    attackBonusPercent: number;
    attackBonusAmount: number;
    proteinsUsed: number;
    exp: number;
    breeding: boolean;
    shiny: boolean;
    category: number;
    levelEvolutionTriggered: boolean;
  };
  _breeding: KnockoutObservable<boolean>;
  _shiny: KnockoutObservable<boolean>;
  _level: KnockoutObservable<number>;
  _attack: KnockoutObservable<number>;
  _attackBonusPercent: KnockoutObservable<number>;
  _attackBonusAmount: KnockoutObservable<number>;
  _category: KnockoutObservable<number>;
  proteinsUsed: KnockoutObservable<number>;
  constructor(
    id: number,
    name: PokemonNameType,
    evolutions: Evolution[],
    baseAttack: number,
    attackBonusPercent: number,
    attackBonusAmount: number,
    proteinsUsed: any,
    exp?: number,
    breeding?: boolean,
    shiny?: boolean,
    category?: number
  );
  calculateAttack(ignoreLevel?: boolean): number;
  calculateLevelFromExp(): number;
  gainExp(exp: number): void;
  checkForLevelEvolution(): void;
  useStone(stoneType: GameConstants.StoneType): boolean;
  useProtein(amount: number): void;
  proteinUsesRemaining: () => number;
  hideFromProteinList: () => boolean;
  fromJSON(json: Record<string, any>): void;
  toJSON(): {
    id: number;
    0: number;
    1: number;
    2: number;
    3: number;
    4: boolean;
    5: boolean;
    7: boolean;
    6: number;
  };
  get level(): number;
  set level(level: number);
  get attack(): number;
  set attack(attack: number);
  get attackBonusAmount(): number;
  set attackBonusAmount(attackBonusAmount: number);
  get attackBonusPercent(): number;
  set attackBonusPercent(attackBonusPercent: number);
  get breeding(): boolean;
  set breeding(bool: boolean);
  get shiny(): boolean;
  set shiny(bool: boolean);
  get category(): number;
  set category(index: number);
}
