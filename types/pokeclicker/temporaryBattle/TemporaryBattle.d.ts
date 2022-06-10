declare class TemporaryBattle extends TownContent {
    name: string;
    pokemons: GymPokemon[];
    defeatMessage: string;
    rewardFunction: () => void;
    isTrainerBattle: boolean;
    completeRequirements: (Requirement | OneFromManyRequirement)[];
    cssClass(): string;
    text(): string;
    isVisible(): boolean;
    onclick(): void;
    areaStatus(): areaStatus.unlockedUnfinished | areaStatus.completed;
    constructor(name: string, pokemons: GymPokemon[], defeatMessage: string, requirements?: (Requirement | OneFromManyRequirement)[], completeRequirements?: (Requirement | OneFromManyRequirement)[], rewardFunction?: () => void, isTrainerBattle?: boolean);
}
