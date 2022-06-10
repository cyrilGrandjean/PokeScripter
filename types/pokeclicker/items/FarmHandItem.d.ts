declare class FarmHandItem extends Item {
  farmHandName: string;
  constructor(farmHandName: string, basePrice: number, currency?: Currency);
  get farmHand(): FarmHand;
  get description(): string;
  isAvailable(): boolean;
  get image(): string;
}
