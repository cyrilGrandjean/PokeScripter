declare class Vitamin extends Item {
    type: GameConstants.VitaminType;
    constructor(type: GameConstants.VitaminType, basePrice: number, currency?: GameConstants.Currency, options?: ShopOptions, displayName?: string, description?: string);
    use(): boolean;
}
