declare class Pokeball {
  type: GameConstants.Pokeball;
  catchBonus: () => number;
  catchTime: number;
  description: string;
  unlockRequirement: Requirement | MultiRequirement;
  quantity: KnockoutObservable<number>;
  constructor(
    type: GameConstants.Pokeball,
    catchBonus: () => number,
    catchTime: number,
    description: string,
    unlockRequirement?: Requirement | MultiRequirement,
    quantity?: number
  );
  unlocked(): boolean;
}
