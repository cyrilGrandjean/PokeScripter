declare class Settings {
  static list: Setting<any>[];
  static add(setting: Setting<any>): void;
  static setSettingByName(name: string, value: any): void;
  static getSetting(name: string): Setting<any>;
  static toJSON(): {};
  static fromJSON(dict: any): void;
  static enumToSettingOptionArray(obj: any, filter?: (v: any) => boolean): SettingOption<string>[];
  static saveDefault(): void;
  static loadDefault(): void;
  static resetDefault(): void;
}
