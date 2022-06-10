declare class KeyItem {
  name: KeyItemType;
  displayName: string;
  description: string;
  unlockReq: KnockoutComputed<boolean>;
  unlocker: KnockoutSubscription;
  unlockReward: () => void;
  isUnlocked: KnockoutObservable<boolean>;
  constructor(
    name: KeyItemType,
    description: string,
    unlockReq?: () => boolean,
    isUnlocked?: boolean,
    unlockReward?: () => void,
    displayName?: string
  );
  unlock(): void;
}
