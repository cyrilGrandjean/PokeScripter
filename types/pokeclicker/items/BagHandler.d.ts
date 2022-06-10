/**
 * Static class as an API for handling items.
 */
declare class BagHandler {
  /**
   * Gets the display name for the item
   * @param item The item identifier
   */
  static displayName(item: BagItem): string;
  /**
   * Gets the image path for the item
   * @param item The item identifier
   */
  static image(item: BagItem): string;
  /**
   * Gets the amount observable for the item. NOTE: You shouldn't use this to modify the amount, as there might
   * be some additional code that needs to be run via the base gainItem API calls. Use BagHandler.gainItem instead.
   * @param item The item identifier
   */
  static amount(item: BagItem): KnockoutObservable<number>;
  /**
   * Handles updating the amount for an item. This should be used instead of modifying the amount observable
   * directly, as the base method might have additional handling.
   * @param item The item identifier
   * @param amount The amount to be added to the Bag. Defaults to 1.
   */
  static gainItem(item: BagItem, amount?: number): void;
  private static getItem;
  private static getUndergroundItem;
  private static getBerry;
  private static getGem;
}
