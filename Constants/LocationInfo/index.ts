import * as Types from "../../Types";
import { LumbridgeSummary } from "./LumbridgeSummary";
import { DraynorSummary } from "./DraynorSummary";
import { LumbridgeSwampCaveSummary } from "./LumbridgeSwampCaveSummary.ts";
import { LumbridgeCatacombsSummary } from "./LumbridgeCatacombsSummary";
import { WizardTowerSummary } from "./WizardTowerSummary";

export const AllLocations: Types.IAllLocations = {
  Lumbridge: LumbridgeSummary,
  Draynor: DraynorSummary,
  LumbridgeSwampCave: LumbridgeSwampCaveSummary,
  LumbridgeCatacombs: LumbridgeCatacombsSummary,
  WizardTower: WizardTowerSummary,
};
// ILumbridgeSwampCaveEnemies
// Edgeville
// Canifis
// Zanaris
// Pollnivneach
// ShiloVillage
// AncientCavern
// Prifddinas
// AnachroniaBaseCamp
// Wilderness
