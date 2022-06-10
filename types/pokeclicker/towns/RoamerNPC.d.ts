declare class RoamerNPC extends NPC {
    name: string;
    dialog: string[];
    region: GameConstants.Region;
    constructor(name: string, dialog: string[], region: GameConstants.Region);
    get dialogHTML(): string;
}
