declare class BattleFrontierMilestones {
  static milestoneRewards: any[];
  static addMilestone(milestone: BattleFrontierMilestone): void;
  static nextMileStone(): any;
  static availableMilestones(): any[];
  static nextMileStoneStage(): number;
  static nextMileStoneRewardDescription(): string;
  static gainReward(defeatedStage: number): void;
}
