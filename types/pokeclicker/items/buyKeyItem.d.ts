declare class BuyKeyItem extends Item {
  item: KeyItemType;
  constructor(
    item: KeyItemType,
    basePrice: number,
    currency?: GameConstants.Currency,
    options?: ShopOptions,
    displayName?: string
  );
  totalPrice(amt: number): number;
  gain(amt: number): void;
  isAvailable(): boolean;
  get image(): string;
}
