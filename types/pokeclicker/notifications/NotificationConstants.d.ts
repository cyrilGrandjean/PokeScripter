/**
 * Contains all notification constants for easy access.
 */
declare const NotificationConstants: {
  NotificationOption: typeof NotificationOption;
  NotificationSound: {
    General: {
      shiny_long: Sound;
      new_catch: Sound;
      roaming: Sound;
      achievement: Sound;
      battle_item_timer: Sound;
      underground_energy_full: Sound;
    };
    Hatchery: {
      ready_to_hatch: Sound;
      empty_queue: Sound;
    };
    Quests: {
      quest_ready_to_complete: Sound;
      quest_level_increased: Sound;
    };
    Farming: {
      ready_to_harvest: Sound;
      berry_wither: Sound;
      berry_mutated: Sound;
      berry_replanted: Sound;
      berry_dropped: Sound;
      mulch_ran_out: Sound;
      wandering_pokemon: Sound;
    };
  };
  NotificationSetting: {
    General: {
      encountered_shiny: NotificationSetting;
      encountered_roaming: NotificationSetting;
      quest_ready_to_complete: NotificationSetting;
      underground_energy_full: NotificationSetting;
      underground_energy_restore: NotificationSetting;
      event_start_end: NotificationSetting;
      gym_won: NotificationSetting;
      offline_earnings: NotificationSetting;
      achievement_complete: NotificationSetting;
      new_catch: NotificationSetting;
      battle_frontier: NotificationSetting;
    };
    Hatchery: {
      ready_to_hatch: NotificationSetting;
      hatched: NotificationSetting;
      hatched_shiny: NotificationSetting;
      empty_queue: NotificationSetting;
    };
    Items: {
      route_item_found: NotificationSetting;
      dungeon_item_found: NotificationSetting;
      battle_item_timer: NotificationSetting;
      dropped_item: NotificationSetting;
    };
    Farming: {
      ready_to_harvest: NotificationSetting;
      about_to_wither: NotificationSetting;
      berry_withered: NotificationSetting;
      berry_mutated: NotificationSetting;
      berry_replanted: NotificationSetting;
      berry_dropped: NotificationSetting;
      mulch_ran_out: NotificationSetting;
      wandering_pokemon: NotificationSetting;
    };
  };
};
