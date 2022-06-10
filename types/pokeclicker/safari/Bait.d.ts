declare enum BaitType {
    Bait = 0,
    Razz = 1,
    Nanab = 2
}
declare class Bait {
    type: BaitType;
    name: string;
    useName: string;
    image: string;
    amount: () => string | number;
    use: (pokemon: SafariPokemon) => void;
    constructor(type: BaitType, name: string, useName: string, image: string, amount: () => string | number, use: (pokemon: SafariPokemon) => void);
    get btnName(): string;
}
declare const BaitList: {
    [name: string]: Bait;
};
