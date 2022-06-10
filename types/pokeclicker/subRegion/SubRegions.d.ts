declare class SubRegions {
  static list: Record<number, SubRegion[]>;
  static addSubRegion(region: Region, subregion: SubRegion): void;
  static getSubRegions(region: Region): SubRegion[];
  static getSubRegion(region: Region, subregion: string): SubRegion;
  static getSubRegionById(region: Region, subregionID: number): SubRegion;
  static openModal(): void;
}
declare enum AlolaSubRegions {
  MelemeleIsland = 0,
  AkalaIsland = 1,
  UlaulaAndPoniIslands = 2,
}
