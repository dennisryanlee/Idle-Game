import * as Types from "../../Types";
/**
 * EXPERIENCE REWARDS
 * sometimes reward a prismatic lamp, allowing the player to choose the skill in which they gain xp
 * ANY: any skill
 * MAINCOMBAT: attack, strength, defense, constitution, magic, range
 * ANYCOMBAT: attack, strength, defense, constitution, magic, range, prayer, summoning
 */
const LumbridgeQuests: Types.IAllQuestInfo[] = [
  {
    name: "Dragon Slayer",
    location: "Varrock",
    stepsComplete: 0,
    stepsTotal: 53,
    questPoints: 2,
    complete: false,
    combatRequirements: 63,
    questRequirements: [],
    levelRequirements: {},
    experienceRewards: {
      Strength: 18650,
      Defense: 18650,
    },
    itemRewards: {},
  },
];

const temp = {};