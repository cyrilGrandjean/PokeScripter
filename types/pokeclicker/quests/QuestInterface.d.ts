interface QuestInterface {
  index: number;
  progress: KnockoutComputed<number>;
  isCompleted: KnockoutComputed<boolean>;
  claimed: KnockoutObservable<boolean>;
  initial: any;
  notified: boolean;
  focus: KnockoutObservable<any>;
  description: string;
  pointsReward: number;
  xpReward: number;
}
