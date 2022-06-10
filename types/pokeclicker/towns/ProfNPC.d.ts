declare class ProfNPC extends NPC {
    name: string;
    region: GameConstants.Region;
    pokedexCompleteText: string;
    nextRegionUnlockedText: string;
    constructor(name: string, region: GameConstants.Region, pokedexCompleteText: string, nextRegionUnlockedText: string, image?: string);
    get dialogHTML(): string;
}
