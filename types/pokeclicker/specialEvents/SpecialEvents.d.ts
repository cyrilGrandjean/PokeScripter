declare class SpecialEvents implements Feature {
  name: string;
  saveKey: string;
  defaults: Record<string, any>;
  static events: SpecialEvent[];
  static newEvent(
    title: string,
    description: string,
    startTime: Date,
    startFunction: EmptyCallback,
    endTime: Date,
    endFunction: EmptyCallback
  ): void;
  initialize(): void;
  fromJSON(json: any): void;
  toJSON(): {};
  canAccess(): boolean;
  update(delta: number): void;
}
