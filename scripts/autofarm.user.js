// ==UserScript==
// @name        Auto Farming - pokeclicker.com
// @namespace   Our Scripts
// @match       https://www.pokeclicker.com/
// @grant       none
// @version     1.0
// @author      Cycy
// @description 06/06/2022, 20:12:17
// ==/UserScript==

class AutoFarm {
  constructor() {
    this.listObsPlot = [];
    this.listObsAge = [];
    this.farmSubscription = undefined;
  }

  start() {
    this.listObsPlot = [];
    const farming = App.game.farming;
    farming.plotList.forEach((plot, ind) => {
      this.listObsPlot.push(
        plot._berry.subscribe((data) => {
          this.listObsAge[ind]?.dispose();
          this.listObsAge[ind] = this.subscribeAge(ind, data);
        })
      );
    });
  }

  subscribeAge(ind, berry) {
    return App.game.farming.plotList[ind]._age.subscribe((data) => {
      const berryData = App.game.farming.berryData[berry];
      if (data > berryData.growthTime[3]) {
        this.harvest(ind);
        this.plant(ind, berry);
      }
    });
  }

  plant(ind, berry) {
    App.game.farming.plant(ind, berry);
  }

  harvest(ind) {
    App.game.farming.harvest(ind);
  }

  stop() {
    if (!this.enabled()) return;

    this.farmSubscription.dispose();
    this.listObsPlot.forEach((item) => {
      item.dispose();
    });
    this.farmSubscription = undefined;
  }

  enabled() {
    return this.farmSubscription !== undefined;
  }

  harvestAll() {
    App.game.farming.harvestAll();
  }

  plantAll() {
    App.game.farming.plantAll(FarmController.selectedBerry());
  }
}

(() => {
  window.autofarm = new AutoFarm();

  if (scriptui) scriptui.addOption(new OptionUI("Auto Farm", autofarm));
})();
