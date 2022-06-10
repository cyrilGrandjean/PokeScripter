declare class Trainer {
    trainerClass: string;
    team: GymPokemon[];
    subTrainerClass?: string;
    name: string;
    constructor(trainerClass: string, team: GymPokemon[], name?: string, subTrainerClass?: string);
    get image(): string;
}
