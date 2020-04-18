/**
 * Data Model Interfaces
 */

import { InputStream } from "./inputstream.interface";

 
/**
 * Class Model Interfaces
 */

interface RollsSorted {
  [type: string]: Array<string>;
}


/**
 * Regex Definitions
 */

const regIsDice: RegExp = /(^\d*D\d+){1}\s?(((\+|-)\s?\d+\s?)+$|$)/gi;

const regIsMonster: RegExp = /(^\d*M\d+){1}\s?(((\+|-)\s?\d+\s?)+$|$)/gi;

/**
 * Class
 */

class InputStreamController {
  private _rollsSorted: RollsSorted = {
    dices: [],
    monsters: []
  };

  /**
   * @param response (string) Réponse émise par le chat
   */
  public constructor (response: string) {
    if(typeof response === "string" && response.length > 0) {

    }
  }

  /**
   * Créer un objet associé au type du roll
   * @param rollsSorted 
   */
  private _dispensed(rollsSorted: Array<string>) {
    for(const rollsType in rollsSorted) {
      if(rollsType === "dice")
        this._diceRolls.push(new DicesParser(rollsSorted[rollsType]));
      if(rollsType === "monster")
        this._diceRolls.push(new MonstersParser(rollsSorted[rollsType]));
    }
  }

  /** 
  * Tri les rolls par type de lancé
  * @param response (string) Réponse émise par le chat
  */
  private _sorted(response: string) {
    let elements = response.split(" ");

    for (const el of elements) {
      if (typeof el !== "string") continue;
      if (el.match(regIsDice)) this._rollsSorted.dices.push(el);
      if (el.match(regIsMonster)) this._rollsSorted.monsters.push(el);
    }

    return (this._rollsSorted.dices.length === 0 && this._rollsSorted.dices.length === 0);
  }

}