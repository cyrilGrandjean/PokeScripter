declare const FarmHandSkills: string[];
declare enum FarmHandSpeeds {
  Fastest = 0,
  Faster = 1,
  Fast = 2,
  AboveAverage = 3,
  Average = 4,
  BelowAverage = 5,
  Slow = 6,
  Slower = 7,
  Slowest = 8,
  SnailPaced = 9,
  Lazy = 10,
}
declare enum FarmHandBerryType {
  "Random" = -3,
  "Replant" = -2,
}
declare const FarmHandBerryTypes: {
  [x: number]: string;
  None: BerryType.None;
  Cheri: BerryType.Cheri;
  Chesto: BerryType.Chesto;
  Pecha: BerryType.Pecha;
  Rawst: BerryType.Rawst;
  Aspear: BerryType.Aspear;
  Leppa: BerryType.Leppa;
  Oran: BerryType.Oran;
  Sitrus: BerryType.Sitrus;
  Persim: BerryType.Persim;
  Razz: BerryType.Razz;
  Bluk: BerryType.Bluk;
  Nanab: BerryType.Nanab;
  Wepear: BerryType.Wepear;
  Pinap: BerryType.Pinap;
  Figy: BerryType.Figy;
  Wiki: BerryType.Wiki;
  Mago: BerryType.Mago;
  Aguav: BerryType.Aguav;
  Iapapa: BerryType.Iapapa;
  Lum: BerryType.Lum;
  Pomeg: BerryType.Pomeg;
  Kelpsy: BerryType.Kelpsy;
  Qualot: BerryType.Qualot;
  Hondew: BerryType.Hondew;
  Grepa: BerryType.Grepa;
  Tamato: BerryType.Tamato;
  Cornn: BerryType.Cornn;
  Magost: BerryType.Magost;
  Rabuta: BerryType.Rabuta;
  Nomel: BerryType.Nomel;
  Spelon: BerryType.Spelon;
  Pamtre: BerryType.Pamtre;
  Watmel: BerryType.Watmel;
  Durin: BerryType.Durin;
  Belue: BerryType.Belue;
  Occa: BerryType.Occa;
  Passho: BerryType.Passho;
  Wacan: BerryType.Wacan;
  Rindo: BerryType.Rindo;
  Yache: BerryType.Yache;
  Chople: BerryType.Chople;
  Kebia: BerryType.Kebia;
  Shuca: BerryType.Shuca;
  Coba: BerryType.Coba;
  Payapa: BerryType.Payapa;
  Tanga: BerryType.Tanga;
  Charti: BerryType.Charti;
  Kasib: BerryType.Kasib;
  Haban: BerryType.Haban;
  Colbur: BerryType.Colbur;
  Babiri: BerryType.Babiri;
  Chilan: BerryType.Chilan;
  Roseli: BerryType.Roseli;
  Micle: BerryType.Micle;
  Custap: BerryType.Custap;
  Jaboca: BerryType.Jaboca;
  Rowap: BerryType.Rowap;
  Kee: BerryType.Kee;
  Maranga: BerryType.Maranga;
  Liechi: BerryType.Liechi;
  Ganlon: BerryType.Ganlon;
  Salac: BerryType.Salac;
  Petaya: BerryType.Petaya;
  Apicot: BerryType.Apicot;
  Lansat: BerryType.Lansat;
  Starf: BerryType.Starf;
  Enigma: BerryType.Enigma;
  Random: FarmHandBerryType.Random;
  Replant: FarmHandBerryType.Replant;
};
declare type FarmHandBerryTypes = typeof FarmHandBerryTypes[keyof typeof FarmHandBerryTypes];
declare class FarmHand {
  name: string;
  maxEnergy: number;
  efficiency: number;
  speed: FarmHandSpeeds;
  accuracy: number;
  unlockRequirement?: Requirement | MultiRequirement | OneFromManyRequirement;
  defaults: {
    focus: BerryType;
    shouldHarvest: boolean;
    workTicks: number;
    costTicks: number;
    energy: number;
    hired: boolean;
    plots: any[];
  };
  maxEfficiency: number;
  workTicks: KnockoutObservable<number>;
  costTicks: KnockoutObservable<number>;
  workTick: any;
  costTick: number;
  cost: Amount;
  trainerSprite: number;
  focus: KnockoutObservable<FarmHandBerryTypes>;
  shouldHarvest: KnockoutObservable<boolean>;
  energy: KnockoutObservable<number>;
  hired: KnockoutObservable<boolean>;
  plots: KnockoutObservableArray<number>;
  tooltip: KnockoutComputed<string>;
  constructor(
    name: string,
    maxEnergy: number, // 10 - 100
    efficiency: number, // 1 - 50?
    speed: FarmHandSpeeds,
    accuracy: number, // 0 - 10 (80% - 100%)
    cost: number, // 0 - 10? (can go higher if needed)
    unlockRequirement?: Requirement | MultiRequirement | OneFromManyRequirement
  );
  private calcWorkTick;
  isUnlocked(): boolean;
  togglePlot(plotIndex: number): void;
  hire(): void;
  fire(): void;
  tick(): void;
  work(): void;
  addEnergy(amt?: number): void;
  useEnergy(amt?: number): void;
  charge(): void;
  toJSON(): Record<string, any>;
  fromJSON(json: Record<string, any>): void;
}
declare class FarmHands {
  static list: FarmHand[];
  static add(farmHand: FarmHand): void;
  MAX_HIRES: number;
  available: KnockoutComputed<FarmHand[]>;
  hired: KnockoutComputed<FarmHand[]>;
  availableBerries: KnockoutComputed<FarmHandBerryTypes[]>;
  canHire: KnockoutComputed<boolean>;
  requirement: BerriesUnlockedRequirement;
  constructor();
  isUnlocked(): boolean;
  tick(): void;
  toJSON(): Record<string, any>[];
  fromJSON(json: Array<any>): void;
}
