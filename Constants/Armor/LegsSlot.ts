import * as Types from "../../Types";

const listOfMeleeLegs = {
  bronzeplatelegs: {
    name: "bronzeplatelegs",
    levelReqDefence: 1,
    tier: 5,
    armor: 33,
    lifePointsExtra: 0,
    prayerPointsExtra: 0,
    damageReduction: 0.02,
    styleBonusMelee: 0,
    styleBonusRanged: 0,
    styleBonusMagic: 0,
    value: 251,
  },
  ironplatelegs: {
    name: "ironplatelegs",
    levelReqDefence: 10,
    tier: 10,
    armor: 44.4,
    lifePointsExtra: 0,
    prayerPointsExtra: 0,
    damageReduction: 0.2,
    styleBonusMelee: 0,
    styleBonusRanged: 0,
    styleBonusMagic: 0,
    value: 376,
  },
  steelplatelegs: {
    name: "steelplatelegs",
    levelReqDefence: 20,
    tier: 20,
    armor: 69.5,
    lifePointsExtra: 0,
    prayerPointsExtra: 0,
    damageReduction: 0.4,
    styleBonusMelee: 0,
    styleBonusRanged: 0,
    styleBonusMagic: 0,
    value: 501,
  },
  mithrilplatelegs: {
    name: "mithrilplatelegs",
    levelReqDefence: 30,
    tier: 30,
    armor: 99.8,
    lifePointsExtra: 0,
    prayerPointsExtra: 0,
    damageReduction: 0.6,
    styleBonusMelee: 0,
    styleBonusRanged: 0,
    styleBonusMagic: 0,
    value: 751,
  },
  adamantplatelegs: {
    name: "adamantplatelegs",
    levelReqDefence: 40,
    tier: 40,
    armor: 138.1,
    lifePointsExtra: 0,
    prayerPointsExtra: 0,
    damageReduction: 0.8,
    styleBonusMelee: 0,
    styleBonusRanged: 0,
    styleBonusMagic: 0,
    value: 1001,
  },
  runeplatelegs: {
    name: "runeplatelegs",
    levelReqDefence: 50,
    tier: 50,
    armor: 187,
    lifePointsExtra: 0,
    prayerPointsExtra: 0,
    damageReduction: 1,
    styleBonusMelee: 0,
    styleBonusRanged: 0,
    styleBonusMagic: 0,
    value: 2501,
  },
};
const listOfMagicLegs = {};
const listOfRangedLegs = {
  leatherchaps: {
    name: "leatherchaps",
    levelReqDefence: 0,
    tier: 5,
    armor: 33,
    lifePointsExtra: 0,
    prayerPointsExtra: 0,
    damageReduction: 0.1,
    styleBonusMelee: 0,
    styleBonusRanged: 0,
    styleBonusMagic: 0,
    value: 20,
  },
  hardleatherchaps: {
    name: "hardleatherchaps",
    levelReqDefence: 10,
    tier: 10,
    armor: 44.4,
    lifePointsExtra: 0,
    prayerPointsExtra: 0,
    damageReduction: 0.2,
    styleBonusMelee: 0,
    styleBonusRanged: 0,
    styleBonusMagic: 0,
    value: 170,
  },
  studdedchaps: {
    name: "studdedchaps",
    levelReqDefence: 20,
    tier: 20,
    armor: 69.5,
    lifePointsExtra: 0,
    prayerPointsExtra: 0,
    damageReduction: 0.4,
    styleBonusMelee: 0,
    styleBonusRanged: 0,
    styleBonusMagic: 0,
    value: 750,
  },
  carapacelegs: {
    name: "carapacelegs",
    levelReqDefence: 30,
    tier: 30,
    armor: 99.8,
    lifePointsExtra: 0,
    prayerPointsExtra: 0,
    damageReduction: 0.6,
    styleBonusMelee: 0,
    styleBonusRanged: 0,
    styleBonusMagic: 0,
    value: 700,
  },
  greendragonhidechaps: {
    name: "greendragonhidechaps",
    levelReqDefence: 40,
    tier: 40,
    armor: 138.1,
    lifePointsExtra: 0,
    prayerPointsExtra: 0,
    damageReduction: 0.8,
    styleBonusMelee: 0,
    styleBonusRanged: 0,
    styleBonusMagic: 0,
    value: 3900,
  },
};

export const legSlot: Types.IArmorSlotLegs = {
  melee: listOfMeleeLegs,
  magic: listOfMagicLegs,
  ranged: listOfRangedLegs,
};
