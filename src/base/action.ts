export abstract class Action {
  abstract start(): void;
  abstract stop(): void;
  abstract get enabled(): boolean;
}
