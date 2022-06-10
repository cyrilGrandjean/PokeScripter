declare class BerryItem extends Item {
  berry: BerryType;
  berryReq?: BerryType;
  berryName: string;
  constructor(berry: BerryType, basePrice: number, currency?: Currency, berryReq?: BerryType);
  gain(amt: number): void;
  get description(): string;
  isAvailable(): boolean;
  get image(): string;
}
