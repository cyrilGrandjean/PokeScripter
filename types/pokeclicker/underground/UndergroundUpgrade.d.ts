declare class UndergroundUpgrade extends Upgrade {
    constructor(name: UndergroundUpgrade.Upgrades, displayName: string, maxLevel: number, costList: Amount[], bonusList: number[], increasing?: boolean);
    canBuy(): boolean;
}
declare namespace UndergroundUpgrade {
    enum Upgrades {
        'Energy_Max' = 0,
        'Items_Max' = 1,
        'Items_Min' = 2,
        'Energy_Gain' = 3,
        'Energy_Regen_Time' = 4,
        'Daily_Deals_Max' = 5,
        'Bomb_Efficiency' = 6,
        'Survey_Cost' = 7,
        'Survey_Efficiency' = 8,
        'NewYLayer' = 9
    }
}
