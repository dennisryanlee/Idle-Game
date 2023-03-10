import * as Types from "../../Types";
import { getLevel } from "../XP Levels";

// low and high roll data from https://runescape.wiki/w/Module:Woodcutting_chance_calculator/data

export const ListOfLogs: Types.IListOfLogs = {
  logs: {
    name: `logs`,
    displayName: `Logs`,
    levelReqWoodcutting: 1,
    XPGivenWoodcutting: 25,
    levelReqFiremaking: 1,
    XPGivenFiremaking: 40,
    value: 4,
    low: { bronze: 64, iron: 96, steel: 128, mithril: 160, adamant: 192, rune: 224, dragon: 240, crystal: 248 },
    high: { bronze: 200, iron: 300, steel: 400, mithril: 500, adamant: 600, rune: 700, dragon: 750, crystal: 775 },
  },
  oak: {
    name: `oak`,
    displayName: `Oak logs`,
    levelReqWoodcutting: 15,
    XPGivenWoodcutting: 37.5,
    levelReqFiremaking: 15,
    XPGivenFiremaking: 60,
    value: 20,
    low: { bronze: 32, iron: 48, steel: 64, mithril: 80, adamant: 96, rune: 112, dragon: 120, crystal: 124 },
    high: { bronze: 100, iron: 150, steel: 200, mithril: 250, adamant: 300, rune: 350, dragon: 375, crystal: 387 },
  },
  willow: {
    name: `willow`,
    displayName: `Willow logs`,
    levelReqWoodcutting: 30,
    XPGivenWoodcutting: 67.5,
    levelReqFiremaking: 30,
    XPGivenFiremaking: 90,
    value: 40,
    low: { bronze: 16, iron: 24, steel: 32, mithril: 40, adamant: 48, rune: 56, dragon: 60, crystal: 62 },
    high: { bronze: 50, iron: 75, steel: 100, mithril: 125, adamant: 150, rune: 175, dragon: 187, crystal: 193 },
  },
  maple: {
    name: `maple`,
    displayName: `Maple logs`,
    levelReqWoodcutting: 45,
    XPGivenWoodcutting: 100,
    levelReqFiremaking: 45,
    XPGivenFiremaking: 135.5,
    value: 80,
    low: { bronze: 8, iron: 12, steel: 16, mithril: 20, adamant: 24, rune: 28, dragon: 30, crystal: 31 },
    high: { bronze: 25, iron: 37, steel: 50, mithril: 62, adamant: 75, rune: 87, dragon: 93, crystal: 96 },
  },
  yew: {
    name: `yew`,
    displayName: `Yew logs`,
    levelReqWoodcutting: 60,
    XPGivenWoodcutting: 175,
    levelReqFiremaking: 60,
    XPGivenFiremaking: 202.5,
    value: 160,
    low: { bronze: 4, iron: 6, steel: 8, mithril: 10, adamant: 12, rune: 14, dragon: 15, crystal: 16 },
    high: { bronze: 12, iron: 19, steel: 25, mithril: 31, adamant: 37, rune: 44, dragon: 47, crystal: 48 },
  },
  magic: {
    name: `magic`,
    displayName: `Magic logs`,
    levelReqWoodcutting: 75,
    XPGivenWoodcutting: 250,
    levelReqFiremaking: 75,
    XPGivenFiremaking: 303.8,
    value: 320,
    low: { bronze: 2, iron: 3, steel: 4, mithril: 5, adamant: 6, rune: 7, dragon: 7, crystal: 8 },
    high: { bronze: 6, iron: 9, steel: 12, mithril: 15, adamant: 18, rune: 21, dragon: 22, crystal: 23 },
  },
  elder: {
    name: `elder`,
    displayName: `Elder logs`,
    levelReqWoodcutting: 90,
    XPGivenWoodcutting: 325,
    levelReqFiremaking: 90,
    XPGivenFiremaking: 450,
    value: 480,
    low: { bronze: 2, iron: 3, steel: 4, mithril: 5, adamant: 6, rune: 7, dragon: 7, crystal: 8 },
    high: { bronze: 6, iron: 9, steel: 12, mithril: 15, adamant: 18, rune: 21, dragon: 22, crystal: 23 },
  },
};

/**
 * Determines if the player is successful in chopping a log.
 * If the player is woodcutting, and the game interval has ticked, run this function
 * @param log The log the player is attempting to chop.
 * @param WCEXP The player's XP in Woodcutting.
 * @param hatchet The hatchet the player is using.
 * @returns Returns a boolean indicating whether the player successfully gathered a log.
 */
export const playerEarnsLog = (log: Types.ILog, WCEXP: number, hatchet: Types.IHatchet) => {
  //? adjust function to account for buffs and boosts later
  // calculate the player's Woodcutting level
  let WCLevel = getLevel(WCEXP);

  const hatchetName = hatchet.name.replace(`hatchet`, ``);

  // console.log({ low: log.low[hatchetName], high: log.high[hatchetName] });

  // calculate the rawRoll needed for the player to chop a log - formula obtained from wiki: https://runescape.wiki/w/Woodcutting#Mechanics
  let playerRoll = Math.floor(
    ((99 - WCLevel) * Number(log.low[hatchetName as keyof Types.logRoll]) + (WCLevel - 1) * Number(log.high[hatchetName as keyof Types.logRoll])) / 98
  );

  // roll in the range 0-256 inclusive
  let gameRoll = Math.floor(Math.random() * 256);

  // if the player rolled higher than the game, return true
  // playerRoll depends on level, hatchet, and tree stats, gameroll is a random number

  // console.log({ playerRoll, gameRoll });
  if (playerRoll >= gameRoll) {
    return true;
  } else {
    return false;
  }
};
