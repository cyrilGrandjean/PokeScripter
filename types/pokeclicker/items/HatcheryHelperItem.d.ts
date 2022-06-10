declare class HatcheryHelperItem extends Item {
  hatcheryHelperName: string;
  constructor(hatcheryHelperName: string, basePrice: number, currency?: Currency);
  get hatcheryHelper(): HatcheryHelper;
  get description(): string;
  isAvailable(): boolean;
  get image(): string;
}
