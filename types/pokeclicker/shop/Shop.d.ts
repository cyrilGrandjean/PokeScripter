declare class Shop extends TownContent {
  items: Item[];
  name: any;
  cssClass(): string;
  text(): string;
  isVisible(): boolean;
  onclick(): void;
  tooltip: string;
  constructor(items: Item[], name?: any, requirements?: (Requirement | OneFromManyRequirement)[]);
  get displayName(): any;
  amountInput: () => JQuery<HTMLElement>;
}
