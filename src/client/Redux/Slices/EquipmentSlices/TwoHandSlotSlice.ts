import { createSlice } from "@reduxjs/toolkit";
import * as Types from "../../../../../Types";

export const TwoHandSlotSlice = createSlice({
  name: "twohandslotslice",
  initialState: {
    //list of armor for the back slot, describing if the player owns the item or not

    playerOwnsbronze2hsword: false,
    playerOwnsiron2hsword: false,
    playerOwnssteel2hsword: false,
    playerOwnsmithril2hsword: false,
    playerOwnsadamant2hsword: false,
    playerOwnsrune2hsword: false,

    playerOwnsstaffofair: false,
    playerOwnsstaffofwater: false,
    playerOwnsstaffofearth: false,
    playerOwnsstaffoffire: false,
    playerOwnsairbattlestaff: false,
    playerOwnswaterbattlestaff: false,
    playerOwnsearthbattlestaff: false,
    playerOwnsfirebattlestaff: false,
    playerOwnsmysticairstaff: false,
    playerOwnsmysticwaterstaff: false,
    playerOwnsmysticearthstaff: false,
    playerOwnsmysticfirestaff: false,

    playerOwnsshortbow: false,
    playerOwnsoakshortbow: false,
    playerOwnswillowshortbow: false,
    playerOwnsmapleshortbow: false,
    playerOwnsyewshortbow: false,
    playerOwnsmagicshortbow: false,
  },
  reducers: {
    // this is the only reducer needed as the player will only be able to acquire armor, not sell them
    playerNowOwnsTwoHandItem: (state: Types.ITwoHandSlotSlice, action) => {
      state[action.payload as keyof Types.ITwoHandSlotSlice] = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { playerNowOwnsTwoHandItem } = TwoHandSlotSlice.actions;

export default TwoHandSlotSlice.reducer;
