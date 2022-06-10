declare class SubRegion {
  name: string;
  requirement?: Requirement;
  startTown?: string;
  startRoute?: number;
  id: number;
  constructor(name: string, requirement?: Requirement, startTown?: string, startRoute?: number);
  unlocked(): boolean;
}
