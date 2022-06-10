declare class BerryMasterShop extends Shop {
  items: Item[];
  name: string;
  constructor(items: Item[], name?: string);
  onclick(): void;
  amountInput: () => JQuery<HTMLElement>;
}
