declare class GemMasterShop extends Shop {
    items: Item[];
    name: string;
    constructor(items: Item[], name?: string);
    onclick(): void;
}
