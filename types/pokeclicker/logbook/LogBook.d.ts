declare class LogBook implements Feature {
  name: string;
  saveKey: string;
  defaults: Record<string, any>;
  filters: Record<string, Observable<boolean>>;
  logs: ObservableArray<LogBookLog>;
  filteredLogs: PureComputed<LogBookLog[]>;
  newLog(type: LogBookType, message: string): void;
  fromJSON(json: any): void;
  toJSON(): {
    logs: Array<{
      type: LogBookType;
      description: string;
      date: number;
    }>;
  };
  initialize(): void;
  canAccess(): boolean;
  update(): void;
}
