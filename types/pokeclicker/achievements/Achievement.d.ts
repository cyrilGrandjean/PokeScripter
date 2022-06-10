declare class Achievement {
  name: string;
  description: string;
  property: AchievementRequirement;
  bonusWeight: number;
  region: GameConstants.Region;
  achievableFunction: () => boolean | null;
  isCompleted: KnockoutComputed<boolean>;
  getProgressText: KnockoutComputed<string>;
  bonus: number;
  unlocked: boolean;
  constructor(
    name: string,
    description: string,
    property: AchievementRequirement,
    bonusWeight: number,
    region: GameConstants.Region,
    achievableFunction?: () => boolean | null
  );
  check(): void;
  getProgress(): number;
  getProgressPercentage(): string;
  getBonus(): string;
  achievable(): boolean;
}
