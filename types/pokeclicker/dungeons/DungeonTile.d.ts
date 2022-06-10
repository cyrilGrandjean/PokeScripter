declare class DungeonTile {
  _isVisible: boolean;
  _isVisited: boolean;
  _hasPlayer: boolean;
  type: KnockoutObservable<GameConstants.DungeonTile>;
  cssClass: KnockoutObservable<string>;
  constructor(type: GameConstants.DungeonTile);
  get isVisible(): boolean;
  set isVisible(val: boolean);
  get isVisited(): boolean;
  set isVisited(val: boolean);
  get hasPlayer(): boolean;
  set hasPlayer(val: boolean);
  calculateCssClass(): void;
}
