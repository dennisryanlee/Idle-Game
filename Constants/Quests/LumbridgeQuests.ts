import * as Types from "../../Types";

const LumbridgeQuests: Types.IAllQuestInfo[] = [
  {
    name: "Cook's Assistant",
    stepsComplete: 0,
    stepsTotal: 20,
    questPoints: 1,
    complete: false,
    combatRequirements: 0,
    questRequirements: [],
    levelRequirements: {},
    experienceRewards: {
      Cooking: 300,
    },
    itemRewards: { Coins: 500, Sardines: 20 },
  },
  {
    name: "Myths of the White Lands",
    stepsComplete: 0,
    stepsTotal: 113,
    questPoints: 2,
    complete: false,
    combatRequirements: 0,
    questRequirements: [],
    levelRequirements: {},
    experienceRewards: { ANY: 500 },
    itemRewards: { Coins: 5000 },
  },
  {
    name: "The Restless Ghost",
    stepsComplete: 0,
    stepsTotal: 14,
    questPoints: 1,
    complete: false,
    combatRequirements: 7,
    questRequirements: [],
    levelRequirements: {},
    experienceRewards: {
      Prayer: 1125,
    },
    itemRewards: {},
  },
  {
    name: "The Lost Tribe",
    stepsComplete: 0,
    stepsTotal: 33,
    questPoints: 1,
    complete: false,
    combatRequirements: 0,
    questRequirements: ["Goblin Diplomacy"],
    levelRequirements: {
      Agility: 13,
      Mining: 17,
      Thieving: 13,
    },
    experienceRewards: {
      Mining: 3000,
    },
    itemRewards: {},
  },
  {
    name: "The Blood Pact",
    stepsComplete: 0,
    stepsTotal: 17,
    questPoints: 1,
    complete: false,
    combatRequirements: 1,
    questRequirements: [],
    levelRequirements: {},
    experienceRewards: {
      Attack: 100,
      Strength: 100,
      Defense: 100,
      Range: 100,
      Magic: 100,
    },
    itemRewards: { Coins: 2500 },
  },
  {
    name: "Buyers and Cellars",
    stepsComplete: 0,
    stepsTotal: 15,
    questPoints: 1,
    complete: false,
    combatRequirements: 0,
    questRequirements: [],
    levelRequirements: {
      Thieving: 5,
    },
    experienceRewards: {
      Thieving: 1025,
    },
    itemRewards: {},
  },
];
