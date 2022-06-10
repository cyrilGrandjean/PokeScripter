declare class Champion extends Gym {
  basePokemon: GymPokemon[];
  alternativePokemon1?: GymPokemon[];
  alternativePokemon2?: GymPokemon[];
  alternativePokemon3?: GymPokemon[];
  rewardFunction: () => void;
  constructor(
    leaderName: string,
    town: string,
    basePokemon: GymPokemon[],
    badgeReward: BadgeEnums,
    moneyReward: number,
    rewardMessage: string,
    requirements?: Requirement[],
    alternativePokemon1?: GymPokemon[],
    alternativePokemon2?: GymPokemon[],
    alternativePokemon3?: GymPokemon[],
    rewardFunction?: () => void
  );
  setPokemon(starter: number): void;
}
