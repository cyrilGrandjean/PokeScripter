/**
 * Class which controls the UI of the game.
 */
declare class GameController {
    static applyRouteBindings(): void;
    static convertKey(key: string): string;
    static simulateKey(code: string, type?: string, modifiers?: {}): void;
    static bindToolTips(): void;
    static focusedOnEditableElement(): boolean;
    static keyHeld: {};
    static addKeyListeners(): void;
}
