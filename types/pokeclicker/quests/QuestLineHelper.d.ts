/**
 * Static class used to handle Quest Lines
 */
declare class QuestLineHelper {
    static createTutorial(): void;
    static createDeoxysQuestLine(): void;
    static createUndergroundQuestLine(): void;
    static createVivillonQuestLine(): void;
    static createRocketJohtoQuestLine(): void;
    static createAquaMagmaHoennQuestLine(): void;
    static createPlasmaUnovaQuestLine(): void;
    static createFindSurpriseTogepiForEasterQuestLine(): void;
    static createSkullAetherAlolaQuestLine(): void;
    static createGalacticSinnohQuestLine(): void;
    static isQuestLineCompleted(name: string): boolean;
    static loadQuestLines(): void;
}
