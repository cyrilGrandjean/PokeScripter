declare class Preload {
    static itemsToLoad: any[];
    static itemsLoaded: any[];
    static itemsErrored: any[];
    static itemLoading(item?: any): void;
    static itemLoaded(item?: any): void;
    static itemErrored(item?: any): void;
    static updateProgressBar(): void;
    static hideSplashScreen(fast?: boolean): void;
    static load(skipWait?: boolean): Promise<void>;
    private static loadTowns;
    private static loadPokemon;
    private static loadUndergroundItems;
    private static minimumTime;
    private static loadMap;
}
