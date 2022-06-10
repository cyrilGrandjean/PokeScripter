import { Action } from "../base/action";

export class AutoFarm implements Action {
  plotlist: any;
  farmSubscription: any;

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
    if (!this.enabled) return;

    this.farmSubscription.dispose();
    this.plotlist.forEach((item) => {
      item.dispose();
    });
    this.farmSubscription = undefined;
  }

  get enabled() {
    return this.farmSubscription !== undefined;
  }

  harvestAll() {
    App.game.farming.harvestAll();
  }

  plantAll() {
    App.game.farming.plantAll(FarmController.selectedBerry());
  }
}

export const autofarm = new AutoFarm();
