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
    this.plotlist = [];
    this.farmSubscription = undefined;
  }

  start() {
    this.plotlist = [];
    const farming = App.game.farming;
    farming.plotList.forEach((plot) => {
      this.plotlist.push(
        plot._age.subscribe((data) => {
          const berryData = farming.berryData[plot.berry];
          if (data > berryData.growthTime[3]) {
            this.harvestAll();
            this.plantAll();
          }
        })
      );
    });
  }

  stop() {
    if (!this.enabled()) return;

    this.farmSubscription.dispose();
    this.plotlist.forEach((item) => {
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
