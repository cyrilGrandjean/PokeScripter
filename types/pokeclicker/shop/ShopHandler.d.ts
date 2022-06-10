declare class ShopHandler {
  static shopObservable: KnockoutObservable<Shop>;
  static selected: KnockoutObservable<number>;
  static amount: KnockoutObservable<number>;
  static showShop(shop: Shop): void;
  static setSelected(i: number): void;
  static buyItem(): void;
  static resetAmount(): void;
  static increaseAmount(n: number): void;
  static multiplyAmount(n: number): void;
  static maxAmount(): JQuery<HTMLElement>;
  static calculateCss(i: number): string;
  static calculateButtonCss(): string;
}
