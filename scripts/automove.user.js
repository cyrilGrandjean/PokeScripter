// ==UserScript==
// @name        Auto Move - pokeclicker.com
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

class AutoMoveRoute {
  constructor() {
    this.loop_id = undefined;
    this.interval = 10;
  }

  start() {
    if (!this.loop_id) this.loop_id = setInterval(AutoMoveRoute.change_route, this.interval);
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

  static change_route() {
    if (App?.game?.gameState === GameState.fighting) {
      const pokemon = Battle.enemyPokemon();
      if (
        !pokemon ||
        (pokemon.id >= 243 && pokemon.id <= 245) ||
        pokemon.shiny ||
        pokemon.catchRate == 0 ||
        pokemon.heldItem != null
      )
        return;

      const initialRoute = MapHelper.normalizeRoute(player.route(), player.region);
      const firstRoute = Routes.getRoutesByRegion(player.region)[0].number;
      const lastRoute = Routes.getRoutesByRegion(player.region)[
        Routes.getRoutesByRegion(player.region).length - 1
      ].number;
      if (initialRoute + 1 > MapHelper.normalizeRoute(lastRoute, player.region)) {
        MapHelper.moveToRoute(firstRoute, player.region);
      } else {
        MapHelper.moveToRoute(Routes.unnormalizeRoute(initialRoute + 1), player.region);
      }
    }
  }
}

(() => {
  window.automove = new AutoMoveRoute();

  if (scriptui) scriptui.addOption(new OptionUI("Auto Move Route", automove));
})();
