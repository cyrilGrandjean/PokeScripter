import { IntervalAction } from "../base/interval";

export class AutoBreed extends IntervalAction {
  constructor() {
    super(1000);
  }

  getPokemons() {
    return PartyController.getHatcherySortedList().filter((p) => BreedingController.visible(p)());
  }

  loop() {
    if (!App?.game?.breeding) return;

    const breeding = App.game.breeding;
    breeding.eggList.forEach((_, i, li) => breeding.hatchPokemonEgg(li.length - i - 1));

    let pokemons;
    while (breeding.hasFreeEggSlot() && (pokemons = this.getPokemons()).length > 0)
      breeding.addPokemonToHatchery(pokemons[0]);
  }
}

export const autobreed = new AutoBreed();
