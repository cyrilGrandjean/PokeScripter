declare class AchievementTracker implements Feature {
  name: string;
  saveKey: string;
  trackedAchievement: KnockoutObservable<Achievement>;
  defaults: {
    trackedAchievement: any;
  };
  constructor();
  initialize(): void;
  canAccess(): boolean;
  update(delta: number): void;
  fromJSON(json: Record<string, any>): void;
  toJSON(): Record<string, any>;
  trackAchievement(achievement: Achievement): void;
  hasTrackedAchievement(): boolean;
}
