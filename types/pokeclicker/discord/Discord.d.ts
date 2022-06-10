declare class Discord implements Saveable {
  saveKey: string;
  defaults: Record<string, any>;
  ID: KnockoutObservable<string>;
  codes: Array<DiscordCode>;
  get enabled(): boolean;
  constructor();
  login(): void;
  logout(): void;
  calcCode(code: any): string;
  findCodeMatch(enteredCode: string): DiscordCode;
  enterCode(enteredCode: string): boolean;
  loadCodes(codes: any): void;
  fromJSON(json: any): void;
  toJSON(): Record<string, any>;
}
