import { Action } from "../base/action";

class Tile {
  constructor(public tile: DungeonTile, public pos: Point) {}
}

export class AutoDungeon extends Action {
  private subscriptions: KnockoutSubscription[];
  private dungeonStartedSub: KnockoutSubscription;
  private bossTile?: Tile;
  private dungeontick?: () => void;

  constructor() {
    super();
    this.subscriptions = [];
  }

  freeze() {
    return {
      subscriptions: Array.from(this.subscriptions),
      dungeonStartedSub: this.dungeonStartedSub,
      bossTile: this.bossTile,
      dungeonFinished: DungeonRunner.dungeonFinished(),
    };
  }
  private sub<T>(
    observable: KnockoutObservable<T>,
    callback: (newValue: T) => void,
    target?: any,
    event?: "change" | "beforeChange"
  ) {
    this.subscriptions.push(observable.subscribe(callback, target, event));
  }

  protected start(): void {
    // console.info("start", this.freeze());
    this.dungeonStartedSub = DungeonRunner.dungeonFinished.subscribe((value) => {
      value ? this.dungeonStopped() : this.dungeonStarted();
    });
    DungeonRunner.dungeonFinished.notifySubscribers();
  }

  protected stop(): void {
    // console.info("stop", this.freeze());
    this.dungeonStartedSub.dispose();
    this.dungeonStopped();
  }

  dungeonStarted() {
    // console.info("dungeonStarted", this.freeze());
    this.dungeontick = DungeonRunner.tick;
    DungeonRunner.map.board().forEach((row, y) => {
      row.forEach((tile, x) => {
        if (tile.type() == GameConstants.DungeonTile.boss)
          this.bossTile = new Tile(tile, new Point(x, y));
      });
    });
    DungeonRunner.fighting.notifySubscribers();
    DungeonRunner.tick = () => {
      this.dungeontick.call(DungeonRunner);
      if (!DungeonRunner.fighting() && !DungeonBattle.catching()) {
        this.move();
      }
    };
  }
  dungeonStopped() {
    // console.info("dungeonStopped", this.freeze());
    for (const sub of this.subscriptions) {
      sub.dispose();
    }

    this.bossTile = undefined;
    if (this.dungeontick !== undefined) {
      DungeonRunner.tick = this.dungeontick;
      this.dungeontick = undefined;
    }
  }

  move() {
    if (this.bossTile === undefined || DungeonRunner.fighting() || DungeonBattle.catching()) return;

    const { canGoToBoss, hasChests, hasEnemies } = this.checktiles();
    const nextTiles = this.unvisitedTiles();

    if (nextTiles.length === 0) {
      if (hasEnemies) {
        // console.info("moving to some enemy", this.freeze());
        this.moveTo(GameConstants.DungeonTile.enemy);
      } else if (hasChests) {
        // console.info("moving to some chest", this.freeze());
        this.moveTo(GameConstants.DungeonTile.chest);
        DungeonRunner.handleClick();
      } else if (canGoToBoss) {
        // console.info("moving to the boss", this.freeze());
        DungeonRunner.map.moveToCoordinates(this.bossTile.pos.x, this.bossTile.pos.y);
        DungeonRunner.handleClick();
      } else {
        throw Error("idk where to move next.");
      }
    } else {
      // console.info("moving to some random tile", this.freeze(), nextTiles);
      const dist = (a: Point, b: Point) => Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
      const nextTile = nextTiles.reduce((a, b) =>
        dist(a, this.bossTile.pos) > dist(b, this.bossTile.pos) ? b : a
      );
      DungeonRunner.map.moveToCoordinates(nextTile.x, nextTile.y);
    }
  }
  moveTo(type: GameConstants.DungeonTile) {
    DungeonRunner.map.board().forEach((row, y) => {
      row.forEach((tile, x) => {
        if (tile.type() == type) {
          DungeonRunner.map.moveToCoordinates(x, y);
          return;
        }
      });
    });
  }

  unvisitedTiles() {
    return DungeonRunner.map
      .board()
      .map((row, y) => {
        return row
          .map((tile, x) => {
            const pos = new Point(x, y);
            if (!tile.isVisited && this.hasVisitedNeighbor(pos)) {
              return pos;
            }
          })
          .filter((point) => point);
      })
      .flat();
  }
  hasVisitedNeighbor(point: Point): boolean {
    return DungeonRunner.map.nearbyTiles(point).some((tile) => tile?.isVisited);
  }

  checktiles() {
    let canGoToBoss = this.bossTile?.tile.isVisible;
    let hasChests = false;
    let hasEnemies = false;

    for (const row of DungeonRunner.map.board()) {
      for (const tile of row) {
        switch (tile.type()) {
          case GameConstants.DungeonTile.chest:
            hasChests = true;
            break;
          case GameConstants.DungeonTile.enemy:
            hasEnemies = true;
            break;
        }
      }
    }
    return { canGoToBoss, hasChests, hasEnemies };
  }
}

export const autodungeon = new AutoDungeon();
