import { Familiar, myFamiliar, runChoice, useFamiliar, visitUrl } from "kolmafia";
import { $familiar, $item, findFairyMultiplier, get, have, maxBy, set } from "libram";
import { menu } from "./freeFightFamiliar";

let bestNonCheerleaderFairy: Familiar;

export function bestFairy(): Familiar {
    return $familiar`Patriotic Eagle`;
}
