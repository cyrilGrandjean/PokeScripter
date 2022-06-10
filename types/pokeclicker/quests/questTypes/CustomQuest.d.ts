declare class CustomQuest extends Quest implements QuestInterface {
    initialValue?: number;
    customReward?: () => void;
    constructor(amount: number, reward: (() => void) | number, description: string, focus: any, initialValue?: number, onLoad?: (() => void));
    begin(): void;
    claim(): boolean;
}
