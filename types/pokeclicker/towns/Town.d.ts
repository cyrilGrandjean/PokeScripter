declare type TownOptionalArgument = {
  requirements?: (Requirement | OneFromManyRequirement)[];
  npcs?: NPC[];
};
declare class Town {
  name: string;
  region: GameConstants.Region;
  requirements: (Requirement | OneFromManyRequirement)[];
  dungeon?: Dungeon;
  npcs?: NPC[];
  startingTown: boolean;
  content: TownContent[];
  constructor(
    name: string,
    region: GameConstants.Region,
    content?: TownContent[],
    optional?: TownOptionalArgument
  );
  isUnlocked(): boolean;
}
declare class DungeonTown extends Town {
  dungeon: Dungeon;
  constructor(
    name: string,
    region: GameConstants.Region,
    requirements?: (Requirement | OneFromManyRequirement)[],
    content?: TownContent[]
  );
}
