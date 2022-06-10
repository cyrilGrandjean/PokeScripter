/**
 * Source event for decreasing shop multipliers
 */
declare enum MultiplierDecreaser {
  Battle = 0,
  Berry = 1,
}
/**
 * Additional shop options for an item
 */
interface ShopOptions {
  saveName?: string;
  maxAmount?: number;
  multiplier?: number;
  multiplierDecrease?: boolean;
  multiplierDecreaser?: MultiplierDecreaser;
}
declare class Item {
  name: string;
  basePrice: number;
  currency: GameConstants.Currency;
  saveName: string;
  type: any;
  price: KnockoutObservable<number>;
  multiplier: number;
  multiplierDecrease: boolean;
  multiplierDecreaser: MultiplierDecreaser;
  maxAmount: number;
  _description?: string;
  _displayName: string;
  imageDirectory?: string;
  constructor(
    name: string,
    basePrice: number,
    currency?: GameConstants.Currency,
    { saveName, maxAmount, multiplier, multiplierDecrease, multiplierDecreaser }?: ShopOptions,
    displayName?: string,
    description?: string,
    imageDirectory?: string
  );
  totalPrice(amount: number): number;
  buy(n: number): void;
  gain(n: number): void;
  use(): boolean;
  checkCanUse(): boolean;
  isAvailable(): boolean;
  isSoldOut(): boolean;
  getDescription(): string;
  increasePriceMultiplier(amount?: number): void;
  decreasePriceMultiplier(amount: number, multiplierDecreaser: MultiplierDecreaser): void;
  get description(): string;
  get displayName(): string;
  get image(): string;
}
declare const ItemList: {
  [name: string]: Item;
};
