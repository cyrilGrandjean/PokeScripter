declare class TemporaryBattleRequirement extends Requirement {
  battleName: string;
  constructor(battleName: string, defeatsRequired?: number);
  getProgress(): number;
  hint(): string;
}
