/**
 * Datalist of all Pokémon that are encountered on the routes
 * No need to ever use this list, use RouteHelper instead
 * If you ever need to use this list, request changes in RouteHelper instead.
 */
declare class RoutePokemon {
  land: PokemonNameType[];
  water: PokemonNameType[];
  headbutt: PokemonNameType[];
  special: SpecialRoutePokemon[];
  constructor({
    land,
    water,
    headbutt,
    special,
  }: {
    land?: PokemonNameType[];
    water?: PokemonNameType[];
    headbutt?: PokemonNameType[];
    special?: SpecialRoutePokemon[];
  });
}
