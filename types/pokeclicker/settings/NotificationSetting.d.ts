declare class NotificationSetting {
  warnOnBlocked: () => void;
  inGameNotification: BooleanSetting;
  desktopNotification: BooleanSetting;
  name: string;
  displayName: string;
  constructor(name: string, displayName: string, defaultValueInGame: boolean, lockInGame?: boolean);
}
