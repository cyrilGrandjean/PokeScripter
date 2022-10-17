import { Action } from "./action";

export abstract class IntervalAction extends Action {
  interval: number;
  private loop_id: number;

  constructor(interval: number = 100) {
    super();
    this.interval = interval;
    this.loop_id = undefined;
  }

  protected start() {
    if (!this.loop_id) this.loop_id = window.setInterval(() => this.loop(), this.interval);
  }

  protected stop() {
    if (this.loop_id) {
      clearInterval(this.loop_id);
      this.loop_id = undefined;
    }
  }

  abstract loop(): void;
}
