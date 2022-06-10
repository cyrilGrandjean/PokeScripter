declare class BattleFrontier implements Feature {
    name: string;
    saveKey: string;
    milestones: typeof BattleFrontierMilestones;
    defaults: {};
    constructor();
    initialize(): void;
    update(delta: number): void;
    canAccess(): boolean;
    enter(): void;
    start(useCheckpoint: boolean): void;
    leave(): void;
    toJSON(): Record<string, any>;
    fromJSON(json: Record<string, any>): void;
}
