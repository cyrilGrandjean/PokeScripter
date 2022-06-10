declare class Save {
  static counter: number;
  static key: string;
  static store(player: Player): void;
  static getSaveObject(): {};
  static load(): Player;
  static download(): void;
  static delete(): Promise<void>;
  /** Filters an object by property names
   * @param     object : any The object you want to filter
   * @param       keep : string[] An array of property names that should be kept
   * @returns {Object} : The original object with only the specified properties
   */
  static filter(object: any, keep: string[]): Record<string, any>;
  static initializeMultipliers(): {
    [name: string]: number;
  };
  static initializeItemlist(): {
    [name: string]: KnockoutObservable<number>;
  };
  static initializeGems(saved?: Array<Array<number>>): Array<Array<KnockoutObservable<number>>>;
  static initializeEffects(saved?: Array<string>): {
    [name: string]: KnockoutObservable<number>;
  };
  static initializeEffectTimer(): {
    [name: string]: KnockoutObservable<string>;
  };
  static loadFromFile(file: any): void;
  static convert(): void;
  static convertShinies(list: Array<any>): void;
}
