declare class RegionRoute {
  routeName: string;
  region: Region;
  number: number;
  pokemon: RoutePokemon;
  requirements: Requirement[];
  orderNumber?: number;
  subRegion?: number;
  constructor(
    routeName: string,
    region: Region,
    number: number,
    pokemon: RoutePokemon,
    requirements?: Requirement[],
    orderNumber?: number,
    subRegion?: number
  );
  isUnlocked(): boolean;
}
