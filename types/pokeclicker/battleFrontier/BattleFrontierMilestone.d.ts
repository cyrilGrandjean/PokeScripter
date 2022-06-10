declare class BattleFrontierMilestone {
  stage: number;
  rewardFunction: () => void;
  _image?: string;
  private _description?;
  obtained: KnockoutObservable<boolean>;
  constructor(stage: number, rewardFunction: () => void, _image?: string, _description?: string);
  gain(): void;
  get image(): string;
  get description(): string;
}
