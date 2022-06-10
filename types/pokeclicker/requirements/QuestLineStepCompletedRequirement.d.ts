declare class QuestLineStepCompletedRequirement extends Requirement {
  questLineName: string;
  questIndex: number;
  constructor(questLineName: string, questIndex: number);
  getProgress(): number;
  hint(): string;
}
