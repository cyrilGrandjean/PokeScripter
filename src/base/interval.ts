import { Action } from "./action";

export abstract class IntervalAction implements Action {
  interval: number;
  private loop_id: number;

  constructor(interval: number = 100) {
    this.interval = interval;
    this.loop_id = undefined;
  }

  start() {
    if (!this.loop_id) this.loop_id = window.setInterval(() => this.loop(), this.interval);
  }

  stop() {
    if (this.loop_id) {
      clearInterval(this.loop_id);
      this.loop_id = undefined;
    }
  }

  get enabled() {
    return this.loop_id !== undefined;
  }

  abstract loop(): void;
}
