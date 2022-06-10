declare class StartSequenceRunner {
    static starterPicked: GameConstants.Starter;
    static noStarterCount: number;
    static start(): void;
    static pickStarter(s: GameConstants.Starter): void;
    static showCaughtMessage(): void;
}
