declare abstract class TownContent {
    abstract cssClass(): string;
    abstract text(): string;
    abstract isVisible(): boolean;
    abstract onclick(): void;
    tooltip: string;
    requirements: (Requirement | OneFromManyRequirement)[];
    parent: Town;
    addParent(parent: Town): void;
    areaStatus(): areaStatus;
    isUnlocked(): boolean;
    clears(): number;
    protectedOnclick(): void;
    constructor(requirements?: (Requirement | OneFromManyRequirement)[]);
}
declare class DockTownContent extends TownContent {
    cssClass(): string;
    isVisible(): boolean;
    onclick(): void;
    text(): string;
}
declare class BattleFrontierTownContent extends TownContent {
    cssClass(): string;
    isVisible(): boolean;
    onclick(): void;
    text(): string;
}
declare class NextRegionTownContent extends TownContent {
    cssClass(): string;
    isVisible(): boolean;
    onclick(): void;
    text(): string;
}
declare class MoveToDungeon extends TownContent {
    dungeon: Dungeon;
    constructor(dungeon: Dungeon);
    cssClass(): string;
    text(): string;
    isVisible(): boolean;
    onclick(): void;
    isUnlocked(): boolean;
    areaStatus(): areaStatus;
    clears(): number;
}
