declare class PokeBlock extends Item {
    type: GameConstants.PokeBlockColor;
    constructor(color: GameConstants.PokeBlockColor, basePrice: number, currency?: GameConstants.Currency);
}
