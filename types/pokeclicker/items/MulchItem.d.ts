declare class MulchItem extends Item {
  type: MulchType;
  constructor(type: MulchType, basePrice: number, displayName: string, description: string);
  gain(amt: number): void;
}
