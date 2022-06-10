declare class QuestLineCompletedRequirement extends Requirement {
  questLineName: string;
  constructor(questLineName: string);
  getProgress(): number;
  hint(): string;
}
