/**
 * Data Model Interfaces
 */

import { OutputStream } from "./inputstream.interface";
 
/**
 * Class Import
 */

import { DiceParser } from "../diceparser/diceparser.class";
//import { MonsterParser } from "../monsterparser/monsterparser.class";

 
/**
 * Class Model Interfaces
 */

interface RollsSorted {
  [type: string]: Array<string>;
}

interface InputStreamSchema {
  getRolls: OutputStream
}
/**
 * Regex Definitions
 */

const regIsDice: RegExp = /(^\d*D\d+){1}\s?(((\+|-)\s?\d+\s?)+$|$)/gi;

const regIsMonster: RegExp = /(^\d*M\d+){1}\s?(((\+|-)\s?\d+\s?)+$|$)/gi;

/**
 * Class
 */

export class InputStreamController implements InputStreamSchema {
  private _rolls: RollsSorted = {
    dices: [],
    monsters: []
  };

  /**
   * @param response (string) Réponse émise par le chat
   */
  public constructor (response: string) {
    if(typeof response === "string" && response.length > 0) {
      this._sorted(response);
    }
  }

  /** 
  * Tri les rolls par type de lancé
  * @param response (string) Réponse émise par le chat
  */
  private _sorted(response: string): boolean {
    let elements = response.split(" ");

    let i = 0;
    for (const el of elements) {
      if (el === "") continue;
      if (el.match(regIsDice)) {
        this._rolls.dices.push( new DiceParser(el) );
        i++;
      }
      if (el.match(regIsMonster)) {
        // this._rolls.monsters.push( new MonsterParser(el) );
        i++;
      }
    }
    return !(i === 0);
  }

  /**
   * Retourne 
   */
  public getRolls (): OutputStream {
    return this._rolls;
  }

}