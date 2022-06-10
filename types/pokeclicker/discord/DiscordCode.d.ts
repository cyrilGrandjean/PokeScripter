declare class DiscordCode {
    name: string;
    image: string;
    price: number;
    description: string;
    private claimFunction;
    claimed: boolean;
    constructor(name: string, image: string, price: number, description: string, claimFunction?: () => boolean);
    claim(): void;
    toJSON(): {
        name: string;
        image: string;
        price: number;
        description: string;
        claimed: boolean;
    };
}
