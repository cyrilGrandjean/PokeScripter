import { IntervalAction } from "../base/interval";

export class AutoMoveRoute extends IntervalAction {
  constructor() {
    super(10);
  }

  loop() {
    if (App?.game?.gameState === GameConstants.GameState.fighting) {
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

export const automove = new AutoMoveRoute();
