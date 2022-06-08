// ==UserScript==
// @name        Auto Breeding - pokeclicker.com
// @namespace   Our Scripts
// @match       https://www.pokeclicker.com/
// @grant       none
// @version     1.0
// @author      Me
// @description 06/06/2022, 19:41:20
// ==/UserScript==

class AutoBreed {
  constructor() {
    this.loop_id = undefined;
  }

  start() {
    if (!this.loop_id) this.loop_id = setInterval(AutoBreed.autobreed, 1000);
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

  static getPokemons() {
    return PartyController.getHatcherySortedList().filter((p) => BreedingController.visible(p)());
  }

  static autobreed() {
    if (!App?.game?.breeding) return;

    const breeding = App.game.breeding;
    breeding.eggList.forEach((_, i, li) => breeding.hatchPokemonEgg(li.length - i - 1));

    let pokemons;
    while (breeding.hasFreeEggSlot() && (pokemons = AutoBreed.getPokemons()).length > 0)
      breeding.addPokemonToHatchery(pokemons[0]);
  }
}

(() => {
  window.autobreed = new AutoBreed();
  window.autobreed.start();

  if (scriptui) scriptui.addOption(new OptionUI("Auto Breed", autobreed));
})();
