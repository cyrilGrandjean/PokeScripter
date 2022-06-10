declare class DungeonMap {
  size: number;
  flash: boolean;
  board: KnockoutObservable<DungeonTile[][]>;
  playerPosition: KnockoutObservable<Point>;
  playerMoved: KnockoutObservable<boolean>;
  constructor(size: number, flash?: boolean);
  moveToCoordinates(x: number, y: number): void;
  moveUp(): void;
  moveRight(): void;
  moveDown(): void;
  moveLeft(): void;
  moveToTile(point: Point): boolean;
  showChestTiles(): void;
  showAllTiles(): void;
  currentTile(): DungeonTile;
  nearbyTiles(point: Point): DungeonTile[];
  hasAccesToTile(point: Point): boolean;
  generateMap(): DungeonTile[][];
  /**
   * Shuffles array in place.
   * @param {Array} a items The array containing the items.
   */
  shuffle(a: any): void;
}
