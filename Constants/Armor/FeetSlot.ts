import * as Types from "../../Types";

const listOfMeleeFeet = {
  bronzearmouredboots: {
    name: "bronzearmouredboots",
    levelReqDefence: 1,
    tier: 5,
    armor: 7.5,
    lifePointsExtra: 0,
    prayerPointsExtra: 0,
    damageReduction: 0.02,
    styleBonusMelee: 0,
    styleBonusRanged: 0,
    styleBonusMagic: 0,
    value: 84,
  },
  ironarmouredboots: {
    name: "ironarmouredboots",
    levelReqDefence: 10,
    tier: 10,
    armor: 10.1,
    lifePointsExtra: 0,
    prayerPointsExtra: 0,
    damageReduction: 0.2,
    styleBonusMelee: 0,
    styleBonusRanged: 0,
    styleBonusMagic: 0,
    value: 126,
  },
  steelarmouredboots: {
    name: "steelarmouredboots",
    levelReqDefence: 20,
    tier: 20,
    armor: 15.8,
    lifePointsExtra: 0,
    prayerPointsExtra: 0,
    damageReduction: 0.4,
    styleBonusMelee: 0,
    styleBonusRanged: 0,
    styleBonusMagic: 0,
    value: 168,
  },
  mithrilarmouredboots: {
    name: "mithrilarmouredboots",
    levelReqDefence: 30,
    tier: 30,
    armor: 22.7,
    lifePointsExtra: 0,
    prayerPointsExtra: 0,
    damageReduction: 0.6,
    styleBonusMelee: 0,
    styleBonusRanged: 0,
    styleBonusMagic: 0,
    value: 251,
  },
  adamantarmouredboots: {
    name: "adamantarmouredboots",
    levelReqDefence: 40,
    tier: 40,
    armor: 31.4,
    lifePointsExtra: 0,
    prayerPointsExtra: 0,
    damageReduction: 0.8,
    styleBonusMelee: 0,
    styleBonusRanged: 0,
    styleBonusMagic: 0,
    value: 334,
  },
  runearmouredboots: {
    name: "runearmouredboots",
    levelReqDefence: 50,
    tier: 50,
    armor: 42.5,
    lifePointsExtra: 0,
    prayerPointsExtra: 0,
    damageReduction: 1,
    styleBonusMelee: 0,
    styleBonusRanged: 0,
    styleBonusMagic: 0,
    value: 834,
  },
};
const listOfMagicFeet = {};
const listOfRangedFeet = {
  leatherboots: {
    name: "leatherboots",
    levelReqDefence: 0,
    tier: 1,
    armor: 5.5,
    lifePointsExtra: 0,
    prayerPointsExtra: 0,
    damageReduction: 0.02,
    styleBonusMelee: 0,
    styleBonusRanged: 0,
    styleBonusMagic: 0,
    value: 6,
  },
  hardleatherboots: {
    name: "hardleatherboots",
    levelReqDefence: 10,
    tier: 5,
    armor: 7.5,
    lifePointsExtra: 0,
    prayerPointsExtra: 0,
    damageReduction: 0.2,
    styleBonusMelee: 0,
    styleBonusRanged: 0,
    styleBonusMagic: 0,
    value: 200,
  },
  studdedleatherboots: {
    name: "studdedleatherboots",
    levelReqDefence: 20,
    tier: 20,
    armor: 15.8,
    lifePointsExtra: 0,
    prayerPointsExtra: 0,
    damageReduction: 0.4,
    styleBonusMelee: 0,
    styleBonusRanged: 0,
    styleBonusMagic: 0,
    value: 1000,
  },
  carapaceboots: {
    name: "carapaceboots",
    levelReqDefence: 30,
    tier: 30,
    armor: 22.7,
    lifePointsExtra: 0,
    prayerPointsExtra: 0,
    damageReduction: 0.6,
    styleBonusMelee: 0,
    styleBonusRanged: 0,
    styleBonusMagic: 0,
    value: 200,
  },
  greendragonhideboots: {
    name: "greendragonhideboots",
    levelReqDefence: 40,
    tier: 40,
    armor: 31.4,
    lifePointsExtra: 0,
    prayerPointsExtra: 0,
    damageReduction: 0.8,
    styleBonusMelee: 0,
    styleBonusRanged: 0,
    styleBonusMagic: 0,
    value: 2500,
  },
};

export const feetSlot: Types.IArmorSlotFeet = {
  melee: listOfMeleeFeet,
  magic: listOfMagicFeet,
  ranged: listOfRangedFeet,
};
