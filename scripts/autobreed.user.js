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
  listObservableEgg = [];
  listObservableStep = [];
  isStarted = false;

  constructor() {}

  start() {
    if (this.isStarted) {
      return;
    } else {
      this.listObservableEgg = [];
      this.listObservableStep = [];
      this.isStarted = true;
    }
    App.game.breeding._eggList.forEach((egg, ind) => {
      this.listObservableEgg.push(
        egg.subscribe((data) => {
          if (!data.isNone()) {
            this.listObservableStep[ind]?.dispose();
            this.listObservableStep[ind] = this.subscribeStep(data, ind);
          }
        })
      );
    });
  }

  subscribeStep(data, ind) {
    return data.steps.subscribe((step) => {
      if (step >= data.totalSteps) {
        App.game.breeding.hatchPokemonEgg(ind);
        this.addPokemonToHatchery();
      }
    });
  }

  static getPokemons() {
    return PartyController.getHatcherySortedList().filter((p) => BreedingController.visible(p)());
  }

  addPokemonToHatchery() {
    let pokemons;
    while (App.game.breeding.hasFreeEggSlot() && (pokemons = AutoBreed.getPokemons()).length > 0)
      App.game.breeding.addPokemonToHatchery(pokemons[0]);
  }

  stop() {
    this.listObservableEgg.forEach((obs) => obs.dispose());
    this.listObservableStep.forEach((obs) => obs.dispose());
    this.isStarted = false;
  }

  enabled() {
    return this.isStarted;
  }
}

(() => {
  window.autobreed = new AutoBreed();
  // window.autobreed.start();

  if (scriptui) scriptui.addOption(new OptionUI("Auto Breed", autobreed));
})();
