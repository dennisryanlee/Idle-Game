import * as Types from "../../Types";
/**
 * EXPERIENCE REWARDS
 * sometimes reward a prismatic lamp, allowing the player to choose the skill in which they gain xp
 * ANY: any skill
 * MAINCOMBAT: attack, strength, defence, constitution, magic, range
 * ANYCOMBAT: attack, strength, defence, constitution, magic, range, prayer, summoning
 */

export const DraynorQuests: Types.IQuestInfo[] = [
  {
    name: "A Fairy Tale I - Growing Pains",
    location: "Draynor",
    stepsTotal: 35,
    questPoints: 2,
    combatRequirements: 68,
    questRequirements: ["Jungle Potion", "Lost City", "Nature Spirit", "Priest in Peril", "The Restless Ghost"],
    levelRequirements: {},
    experienceRewards: {
      Farming: 3500,
      Attack: 2000,
      Magic: 1000,
    },
    itemRewards: {},
  },
  {
    name: "A Fairy Tale II - Cure a Queen",
    location: "Draynor",
    stepsTotal: 36,
    questPoints: 2,
    combatRequirements: 74,
    questRequirements: ["A Fairy Tale I - Growing Pains", "Jungle Potion", "Lost City", "Nature Spirit", "Priest in Peril", "The Restless Ghost"],
    levelRequirements: {
      Thieving: 40,
      Farming: 49,
      Herblore: 57,
    },
    experienceRewards: {
      Herblore: 4750,
      Thieving: 3750,
    },
    itemRewards: {},
  },
  //! Vampyre Slayer  - MAINCOMBAT: 4825,
  {
    name: "Vampyre Slayer",
    location: "Draynor",
    stepsTotal: 23,
    questPoints: 3,
    combatRequirements: 28,
    questRequirements: [],
    levelRequirements: {},
    experienceRewards: {},
    itemRewards: {},
  },
  {
    name: "Ernest the Chicken",
    location: "Draynor",
    stepsTotal: 40,
    questPoints: 4,
    combatRequirements: 0,
    questRequirements: [],
    levelRequirements: {},
    experienceRewards: {},
    itemRewards: { Coins: 3000 },
  },
  {
    name: "Animal Magnetism",
    location: "Draynor",
    stepsTotal: 52,
    questPoints: 1,
    combatRequirements: 0,
    questRequirements: ["Ernest the Chicken", "Priest in Peril", "The Restless Ghost"],
    levelRequirements: {
      Slayer: 18,
      Crafting: 19,
      Ranged: 30,
      Woodcutting: 35,
      Thieving: 15,
    },
    experienceRewards: {
      Crafting: 1000,
      Fletching: 1000,
      Slayer: 1000,
      Woodcutting: 2500,
    },
    itemRewards: {},
  },
  //! Love Story has ANY: 10000,
  {
    name: "Love Story",
    location: "Draynor",
    stepsTotal: 44,
    questPoints: 2,
    combatRequirements: 97,
    questRequirements: [
      "Swan Song",
      "Garden of Tranquillity",
      "Creature of Fenkenstrain",
      "Priest in Peril",
      "The Restless Ghost",
      "One Small Favour",
      "Rune Mysteries",
      "Recipe for Disaster: Freeing Sir Amik Varze",
      "Recipe for Disaster: Another Cook's Quest",
      "Cook's Assistant",
      "Legends' Quest",
      "Family Crest",
      "Heroes' Quest",
      "Shield of Arrav",
      "Lost City",
      "Dragon Slayer",
      "Merlin's Crystal",
      "Druidic Ritual",
      "Shilo Village",
      "Jungle Potion",
      "Underground Pass",
      "Biohazard",
      "Plague City",
      "Waterfall Quest",
    ],
    levelRequirements: {
      Magic: 77,
      Construction: 68,
      Smithing: 68,
      Crafting: 67,
    },
    experienceRewards: {
      Construction: 50000,
      Magic: 50000,
      Smithing: 40000,
      Crafting: 40000,
    },
    itemRewards: { Coins: 35000 },
  },
  //! Swept away has ANY: 5000
  {
    name: "Swept Away",
    location: "Draynor",
    stepsTotal: 30,
    questPoints: 2,
    combatRequirements: 0,
    questRequirements: [],
    levelRequirements: {},
    experienceRewards: {},
    itemRewards: {},
  },
  {
    name: "Missing My Mummy",
    location: "Draynor",
    stepsTotal: 45,
    questPoints: 1,
    combatRequirements: 70,
    questRequirements: ["The Golem", "Icthlarin's Little Helper", "Diamond in the Rough", "Gertrude's Cat", "Stolen Hearts"],
    levelRequirements: {
      Construction: 35,
      Cooking: 35,
      Crafting: 45,
      Magic: 50,
      Prayer: 45,
      Thieving: 25,
    },
    experienceRewards: {
      Constitution: 7000,
      Construction: 2100,
      Cooking: 2100,
      Crafting: 3350,
      Magic: 5000,
      Prayer: 6500,
      Thieving: 3000,
    },
    itemRewards: { Coins: 5000 },
  },
  {
    name: "Stolen Hearts",
    location: "Draynor",
    stepsTotal: 29,
    questPoints: 3,
    combatRequirements: 2,
    questRequirements: [],
    levelRequirements: {},
    experienceRewards: {
      Constitution: 250,
      Attack: 250,
      Agility: 250,
      Thieving: 250,
    },
    itemRewards: { Coins: 2500 },
  },
];

const temp = {};
