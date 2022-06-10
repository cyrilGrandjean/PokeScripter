declare class Aura {
    auraType: AuraType;
    auraMultipliers: number[];
    constructor(auraType: AuraType, auraMultipliers: number[]);
    /**
     * Handles applying the berry's Aura to its neighbors
     */
    emitAura(index: number): void;
    getAuraValue(stage: PlotStage): number;
}
