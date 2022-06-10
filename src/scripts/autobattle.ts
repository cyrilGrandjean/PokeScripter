import { IntervalAction } from "../base/interval";

export class AutoBattle extends IntervalAction {
  constructor() {
    super(50);
  }

  loop() {
    switch (App?.game?.gameState) {
      case GameConstants.GameState.fighting:
        Battle.clickAttack();
        break;
      case GameConstants.GameState.gym:
        GymBattle.clickAttack();
        break;
      case GameConstants.GameState.dungeon:
        if (DungeonRunner.fighting() && !DungeonBattle.catching()) DungeonBattle.clickAttack();
        break;
      case GameConstants.GameState.temporaryBattle:
        TemporaryBattleBattle.clickAttack();
        break;
      default:
        break;
    }
  }
}

export const autobattle = new AutoBattle();
