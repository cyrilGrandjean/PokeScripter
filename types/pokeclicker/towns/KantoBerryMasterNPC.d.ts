declare class KantoBerryMasterNPC extends NPC {
  name: string;
  dialog: string[];
  constructor(name: string, dialog: string[]);
  get dialogHTML(): string;
  static generateMessage(date: Date): string;
}
