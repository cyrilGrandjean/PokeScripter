declare const HatcheryHelperSkills: string[];
declare const HatcheryHelperCalcHatchBonus: (hatched: any) => number;
declare const HatcheryHelperMinBonusMap: Record<number, number>;
declare class HatcheryHelper {
  name: string;
  cost: Amount;
  stepEfficiencyBase: number;
  attackEfficiencyBase: number;
  unlockRequirement?: Requirement | MultiRequirement | OneFromManyRequirement;
  trainerSprite: number;
  hired: KnockoutObservable<boolean>;
  tooltip: KnockoutComputed<string>;
  sortOption: KnockoutObservable<SortOptions>;
  sortDirection: KnockoutObservable<boolean>;
  hatched: KnockoutObservable<number>;
  hatchBonus: KnockoutObservable<number>;
  stepEfficiency: KnockoutObservable<number>;
  attackEfficiency: KnockoutObservable<number>;
  prevBonus: KnockoutObservable<number>;
  nextBonus: KnockoutObservable<number>;
  constructor(
    name: string,
    cost: Amount,
    stepEfficiencyBase: number, // 1 - 200
    attackEfficiencyBase: number,
    unlockRequirement?: Requirement | MultiRequirement | OneFromManyRequirement
  );
  updateBonus(): void;
  isUnlocked(): boolean;
  hire(): void;
  fire(): void;
  charge(): void;
  toJSON(): Record<string, any>;
  fromJSON(json: Record<string, any>): void;
}
declare class HatcheryHelpers {
  hatchery: Breeding;
  static list: HatcheryHelper[];
  static add(helper: HatcheryHelper): void;
  MAX_HIRES: number;
  available: KnockoutComputed<HatcheryHelper[]>;
  hired: KnockoutComputed<HatcheryHelper[]>;
  canHire: KnockoutComputed<boolean>;
  requirement: HatchRequirement;
  constructor(hatchery: Breeding);
  isUnlocked(): boolean;
  addSteps(amount: number, multiplier: Multiplier): void;
  toJSON(): Record<string, any>[];
  fromJSON(json: Array<any>): void;
}
