declare enum QuestLineState {
  inactive = 0,
  started = 1,
  ended = 2,
}
declare class QuestLine {
  name: string;
  description: string;
  state: KnockoutObservable<QuestLineState>;
  quests: KnockoutObservableArray<Quest>;
  curQuest: KnockoutComputed<number>;
  curQuestObject: KnockoutComputed<any>;
  curQuestInitial: KnockoutObservable<number>;
  totalQuests: number;
  autoBegin: KnockoutSubscription;
  constructor(name: string, description: string);
  addQuest(quest: Quest): void;
  beginQuest(index?: number, initial?: number): void;
  resumeAt(index: number, initial: any): void;
  toJSON(): {
    state: QuestLineState;
    name: string;
    quest: number;
    initial: number;
  };
}
