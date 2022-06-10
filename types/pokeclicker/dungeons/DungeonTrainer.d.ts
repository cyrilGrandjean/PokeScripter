declare class DungeonTrainer extends Trainer {
  options?: EnemyOptions;
  constructor(
    trainerClass: string,
    team: GymPokemon[],
    options?: EnemyOptions,
    name?: string,
    subTrainerClass?: string
  );
}
