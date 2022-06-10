declare class DamageCalculator {
  static type1: KnockoutObservable<PokemonType>;
  static type2: KnockoutObservable<PokemonType>;
  static region: KnockoutObservable<GameConstants.Region>;
  static weather: KnockoutObservable<WeatherType>;
  static includeBreeding: KnockoutObservable<boolean>;
  static baseAttackOnly: KnockoutObservable<boolean>;
  static ignoreLevel: KnockoutObservable<boolean>;
  static detailType: KnockoutObservable<PokemonType>;
  static observableTypeDamageArray: KnockoutComputed<number[]>;
  static observableTypeDetails: KnockoutComputed<TypeDetail[]>;
  static observableTotalDamage: KnockoutComputed<number>;
  static totalDamage(): number;
  static getDamageByTypes(): number[];
  static getTypeDetail(): TypeDetail[];
  static getOneTypeDetail(pokemon: PartyPokemon): TypeDetail;
}
declare type TypeDetail = {
  id: number;
  name: string;
  type1: PokemonType;
  type2: PokemonType;
  damage: number;
};
