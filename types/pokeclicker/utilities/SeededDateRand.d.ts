declare class SeededDateRand extends SeededRand {
  static next(): number;
  static seedWithDate(d: Date): void;
}
