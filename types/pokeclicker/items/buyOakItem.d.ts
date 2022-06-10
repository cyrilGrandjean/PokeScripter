declare class BuyOakItem extends Item {
  item: OakItemType;
  constructor(item: OakItemType, basePrice: number, currency?: GameConstants.Currency);
  totalPrice(amt: number): number;
  gain(amt: number): void;
  isAvailable(): boolean;
  get image(): string;
}
