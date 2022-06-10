declare class Notifier {
  static notify({
    message,
    type,
    title,
    timeout,
    time,
    sound,
    setting,
    image,
    strippedMessage,
  }: {
    message: string;
    type?: NotificationOption;
    title?: string;
    timeout?: number;
    time?: string;
    sound?: Sound;
    setting?: NotificationSetting;
    image?: string;
    strippedMessage?: string;
  }): void;
  static prompt({
    title,
    message,
    type,
    timeout,
    sound,
  }: {
    title: string;
    message: string;
    type?: NotificationOption;
    timeout?: number;
    sound?: Sound;
  }): Promise<string>;
  static confirm({
    title,
    message,
    confirm,
    cancel,
    type,
    timeout,
    sound,
  }: {
    title: string;
    message: string;
    confirm?: string;
    cancel?: string;
    type?: NotificationOption;
    timeout?: number;
    sound?: Sound;
  }): Promise<boolean>;
}
