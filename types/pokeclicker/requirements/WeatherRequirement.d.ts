declare class WeatherRequirement extends Requirement {
  private weather;
  constructor(weather: WeatherType[], option?: AchievementOption);
  getProgress(): number;
  hint(): string;
}
