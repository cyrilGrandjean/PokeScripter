declare function EnvironmentRestricted<T extends Constructor<any> & MinimalEvo>(
  Base: T
): EnvironmentRestrictedT<T>;
declare type EnvironmentRestrictedT<T extends Constructor<any>> = new (
  environment: GameConstants.Environment,
  ...rest: ConstructorParameters<T>
) => InstanceType<T>;
