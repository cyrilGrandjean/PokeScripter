// ==UserScript==
// @name        Auto Battle - pokeclicker.com
// @namespace   Our Scripts
// @match       https://www.pokeclicker.com/
// @grant       none
// @version     1.0
// @author      Me
// @description 06/06/2022, 19:41:20
// ==/UserScript==

const GameState = {
  idle: 0,
  paused: 1,
  fighting: 2,
  gym: 3,
  dungeon: 4,
  safari: 5,
  town: 6,
  shop: 7,
  battleFrontier: 8,
  temporaryBattle: 9,
};

class AutoBase {
  constructor(interval = 100) {
    this.interval = interval;
    this.loop_id = undefined;
  }

  start() {
    if (!this.loop_id) this.loop_id = setInterval(() => this.loop(), this.interval);
  }

  stop() {
    if (this.loop_id) {
      clearInterval(this.loop_id);
      this.loop_id = undefined;
    }
  }

  enabled() {
    return this.loop_id !== undefined;
  }

  loop() {}
}

class AutoBattle extends AutoBase {
  constructor() {
    super(50);
  }

  loop() {
    switch (App?.game?.gameState) {
      case GameState.fighting:
        Battle.clickAttack();
        break;
      case GameState.gym:
        GymBattle.clickAttack();
        break;
      case GameState.dungeon:
        if (DungeonRunner.fighting() && !DungeonBattle.catching()) DungeonBattle.clickAttack();
        break;
      case GameState.temporaryBattle:
        TemporaryBattleBattle.clickAttack();
        break;
      default:
        break;
    }
  }
}

class AutoGym extends AutoBase {
  constructor() {
    super();
    this.index = 0;
  }

  loop() {
    if (App?.game?.gameState != GameState.town) return;

    if (player.town() instanceof DungeonTown) {
      DungeonRunner.initializeDungeon(player.town().dungeon);
    } else {
      player.town().content[this.index].protectedOnclick();
    }
  }
}

(() => {
  window.autobattle = new AutoBattle();
  window.autogym = new AutoGym();
  window.autobattle.start();

  if (scriptui) {
    scriptui.addOption(new OptionUI("Auto Battle", autobattle));
    scriptui.addOption(new OptionUI("Auto Gym", autogym));
  }
})();
