declare class UndergroundItem {
  name: string;
  id: number;
  value: number;
  valueType: string;
  requirement?: Requirement;
  space: Array<Array<any>>;
  static list: Array<UndergroundItem>;
  constructor(
    name: string,
    id: number,
    space: Array<Array<number>>,
    value?: number,
    valueType?: string,
    requirement?: Requirement
  );
  static addItem(
    name: string,
    id: number,
    space: Array<Array<number>>,
    value?: number,
    valueType?: string,
    requirement?: Requirement
  ): void;
  static getRandomItem(): UndergroundItem;
  static getFullResourceName(valuetype: string, amt: number): string;
  isUnlocked(): boolean;
  isStone(): boolean;
  get displayName(): string;
  get image(): string;
  get undergroundImage(): string;
}
