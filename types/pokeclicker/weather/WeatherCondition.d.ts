declare class WeatherCondition {
  type: WeatherType;
  color: string;
  description: string;
  weight: number;
  multipliers: {
    type: PokemonType;
    multiplier: number;
  }[];
  constructor(
    type: WeatherType,
    color: string,
    description: string,
    weight: number,
    multipliers?: {
      type: PokemonType;
      multiplier: number;
    }[]
  );
  get tooltip(): string;
}
